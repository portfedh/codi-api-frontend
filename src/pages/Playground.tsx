import { useState } from "react";
import { Check, TestTube2, Webhook } from "lucide-react";
import QRForm from "../components/forms/QRForm";
import PushForm from "../components/forms/PushForm";
import ConsultaForm from "../components/forms/ConsultaForm";
import JSONDisplay from "../components/common/JSONDisplay";
import { useApiKey } from "../hooks/useApiKey";

// Real API key for testing and donations (Bite Size S.A. de C.V.)
const BITE_SIZE_API_KEY =
  "ee9b8605ffaa6682d8f6b8077d0ec485f433a06345409a99f6b99335af44fb9cedddec8ff9cef8edc5417cf8f9a691e976fab7a44fc23f63ec659a31daacc8b6";

export default function Playground() {
  const [activeTab, setActiveTab] = useState<
    "qr" | "push" | "consulta" | "webhook"
  >("qr");
  const { apiKey, saveApiKey } = useApiKey();
  const isUsingBiteSizeKey = apiKey === BITE_SIZE_API_KEY;

  const tabs = [
    { id: "qr", name: "Generar QR", description: "Código QR para pagos" },
    {
      id: "push",
      name: "Push Notification",
      description: "Enviar solicitud al celular",
    },
    { id: "consulta", name: "Consultar Estado", description: "Verificar pago" },
    { id: "webhook", name: "Webhook", description: "Notificaciones de pago" },
  ] as const;

  const handleLoadBiteSizeKey = () => {
    saveApiKey(BITE_SIZE_API_KEY);
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          API Playground
        </h1>
        <p className="text-lg text-gray-600">
          Prueba los endpoints de la API CoDi<sup className="text-[0.5em] ml-0.5">®</sup> en tiempo real
        </p>
      </div>

      {/* Bite Size Testing Banner */}
      {!isUsingBiteSizeKey ? (
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 sm:p-5 shadow-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <TestTube2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                ¿No tienes API Key? ¡Prueba con la nuestra!
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Usa la clave API real de <strong>Bite Size S.A. de C.V.</strong>{" "}
                para probar el API con pagos reales. Puedes hacer pruebas desde{" "}
                <strong>$1 MXN</strong> hasta{" "}
                <strong>$12,500 por operación</strong>. Si deseas, también
                puedes usarla para <strong>donar al proyecto</strong>.
              </p>
              <button
                onClick={handleLoadBiteSizeKey}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto"
              >
                Cargar Clave Bite Size
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="flex-shrink-0">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                <strong className="text-green-900">
                  Usando clave Bite Size
                </strong>{" "}
                — Puedes hacer pruebas desde $1 MXN o donar al proyecto con el
                monto que desees.
              </p>
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="font-medium text-gray-800 mb-2">
                  Ejemplos para consultar estado:
                </p>
                <ul className="space-y-2 ml-2 sm:ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 flex-shrink-0">•</span>
                    <div className="min-w-0">
                      <span className="font-mono text-xs bg-white px-1.5 sm:px-2 py-0.5 rounded border border-green-200 break-all">
                        333413b9d7
                      </span>
                      <span className="text-gray-600 ml-1 sm:ml-2 text-xs">
                        — IDC (2 folios pagados)
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 flex-shrink-0">•</span>
                    <div className="min-w-0">
                      <span className="font-mono text-xs bg-white px-1.5 sm:px-2 py-0.5 rounded border border-green-200 break-all">
                        338225a919338225a919
                      </span>
                      <span className="text-gray-600 ml-1 sm:ml-2 text-xs">
                        — Folio CoDi<sup className="text-[0.5em] ml-0.5">®</sup> (Aceptado)
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 flex-shrink-0">•</span>
                    <div className="min-w-0">
                      <span className="font-mono text-xs bg-white px-1.5 sm:px-2 py-0.5 rounded border border-green-200 break-all">
                        337e1588e9337e1588e9
                      </span>
                      <span className="text-gray-600 ml-1 sm:ml-2 text-xs">
                        — Folio CoDi<sup className="text-[0.5em] ml-0.5">®</sup> (Rechazado)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav
            className="-mb-px flex space-x-4 md:space-x-8 overflow-x-auto"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-2 md:px-1 border-b-2 font-medium text-sm transition-colors flex-shrink-0`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{tab.name}</span>
                  <span className="text-xs text-gray-500 hidden sm:inline">
                    {tab.description}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        {activeTab === "qr" && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Generar Código QR
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Crea un código QR para solicitar un pago. El cliente podrá
              escanearlo desde su app bancaria.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-6">
              <p className="text-xs sm:text-sm text-gray-700">
                <strong className="text-blue-900">💡 Nota importante:</strong>{" "}
                Un mismo código QR puede recibir múltiples pagos. Cada pago
                genera su propio{" "}
                <span className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-blue-200">
                  folioCodi
                </span>
                , pero todos quedan asociados al mismo{" "}
                <span className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-blue-200">
                  IDC
                </span>{" "}
                (Identificador de Cobro). Usa el IDC para consultar todos los
                pagos recibidos en un QR específico.
              </p>
            </div>
            <QRForm />
          </div>
        )}

        {activeTab === "push" && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Enviar Push Notification
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Envía una solicitud de pago directamente al celular del cliente.
              Recibirá una notificación en su app bancaria.
            </p>
            <PushForm />
          </div>
        )}

        {activeTab === "consulta" && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Consultar Estado de Pago
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Verifica el estado de una operación CoDi<sup className="text-[0.5em] ml-0.5">®</sup> usando el folio. Obtén
              detalles completos de la transacción.
              <span className="block mt-2 text-xs sm:text-sm">
                Nota: Solo puedes consultar folios asociados a tu API Key.
              </span>
            </p>
            <ConsultaForm />
          </div>
        )}

        {activeTab === "webhook" && (
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Webhook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Notificaciones Webhook
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Cuando un pago es completado o cancelado, el sistema CoDi<sup className="text-[0.5em] ml-0.5">®</sup> enviará
              una notificación POST a la URL de webhook que configuraste. Esta
              es la estructura del cuerpo de la solicitud que recibirás:
            </p>

            {/* Example Webhook Payload */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ejemplo de Payload
              </h3>
              <JSONDisplay
                data={{
                  cadenaInformacion: {
                    certComercioProveedor: "00001000000511252793",
                    celularCliente: "8916498571",
                    digitoVerificadorCliente: 0,
                    nombreCliente: "P**** R******* C*** L*****",
                    claveInstitucionCliente: 40012,
                    tipoCuentaCliente: 40,
                    numeroCuentaCliente: "012180001597582168",
                    idMensajeCobro: "338225a919338225a919",
                    concepto: "Prueba Push Aceptado",
                    monto: 1,
                    claveRastreo: "0666072507",
                    resultadoMensajeCobro: 1,
                    horaSolicitudMensajeCobro: 1761698811708,
                    horaProcMensajeCobro: 1761698872000,
                    certBdeM: "00000200002000003582",
                    horaEnvioMensaje: 1761698872653,
                  },
                  selloDigital:
                    "p1IO0OjPJwjs/rnUaXxRpGu2GwrFGpYLKYeujDG5bjelh/DxqNM...",
                }}
              />
            </div>

            {/* Key Fields Explanation */}
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-blue-900 mb-3">
                  📊 Campos Importantes
                </h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-blue-200 inline-block mb-1">
                      resultadoMensajeCobro
                    </dt>
                    <dd className="text-gray-700 mt-1">
                      Indica el estado final del pago:
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>
                          <span className="font-semibold text-green-700">
                            1
                          </span>{" "}
                          = Pago completado exitosamente
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-700">
                            0
                          </span>{" "}
                          = Aceptado por el usuario pero aún no completado
                        </li>
                        <li>
                          <span className="font-semibold text-red-700">2</span>{" "}
                          = Pago rechazado
                        </li>
                      </ul>
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-blue-200 inline-block mb-1">
                      claveInstitucionCliente
                    </dt>
                    <dd className="text-gray-700 mt-1">
                      Código de la institución bancaria del cliente (ej.{" "}
                      <code className="font-mono text-xs">40012</code> = BBVA
                      Bancomer). Puedes consultar qué banco corresponde a cada
                      código en la sección de{" "}
                      <a
                        href="/tools"
                        className="text-primary-600 hover:text-primary-700 underline font-medium"
                      >
                        Herramientas
                      </a>
                      .
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-blue-200 inline-block mb-1">
                      idMensajeCobro
                    </dt>
                    <dd className="text-gray-700 mt-1">
                      Folio único de la transacción CoDi<sup className="text-[0.5em] ml-0.5">®</sup>. Úsalo para consultar
                      el estado del pago con el endpoint de Consulta.
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-blue-200 inline-block mb-1">
                      selloDigital
                    </dt>
                    <dd className="text-gray-700 mt-1">
                      Firma digital que garantiza la autenticidad de la
                      notificación (verificada automáticamente por nuestro
                      sistema).
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-blue-200 inline-block mb-1">
                      x-api-key
                    </dt>
                    <dd className="text-gray-700 mt-1">
                      La solicitud POST incluye tu API Key en el header{" "}
                      <code className="font-mono text-xs">x-api-key</code> para
                      que puedas verificar que la notificación es auténtica.
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Integration Tips */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-amber-900 mb-3">
                  💡 Consejos de Integración
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>
                      Tu endpoint webhook debe responder con un código HTTP{" "}
                      <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-amber-200">
                        200 OK
                      </code>{" "}
                      para confirmar la recepción.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>
                      Procesa la notificación de forma asíncrona para responder
                      rápidamente.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>
                      Implementa un mecanismo de deduplicación usando el{" "}
                      <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-amber-200">
                        idMensajeCobro
                      </code>{" "}
                      para evitar procesar la misma notificación múltiples
                      veces.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>
                      Verifica el header{" "}
                      <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-amber-200">
                        x-api-key
                      </code>{" "}
                      para confirmar que la notificación proviene de nuestro
                      sistema.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>
                      Si tu webhook no responde o falla, el API CoDi<sup className="text-[0.5em] ml-0.5">®</sup> puede
                      reintentar el envío.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
