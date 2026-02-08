import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";
import ParamTable from "./ParamTable";

export default function ApiReference() {
  const qrRequestParams = [
    {
      name: "monto",
      type: "number | string",
      required: true,
      description:
        "Monto a cobrar en MXN. Máximo $12,500 MXN por operación. Máximo 2 decimales.",
      example: "99.99",
    },
    {
      name: "concepto",
      type: "string",
      required: true,
      description:
        "Descripción del pago. Solo caracteres ASCII imprimibles (espacio a ~). Máximo 40 caracteres.",
      example: "Pago de ejemplo",
    },
    {
      name: "referenciaNumerica",
      type: "number | string",
      required: true,
      description:
        'Referencia numérica de 1-7 dígitos. Usa "0" si no requieres referencia.',
      example: "1234567",
    },
    {
      name: "vigencia",
      type: "number | string",
      required: true,
      description:
        'Timestamp Unix en milisegundos (no segundos). Usa "0" para vigencia ilimitada (recomendado). Valores menores a 10,000,000,000 son rechazados.',
      example: "0",
    },
  ];

  const pushRequestParams = [
    {
      name: "monto",
      type: "number | string",
      required: true,
      description:
        "Monto a cobrar en MXN. Máximo $12,500 MXN por operación. Máximo 2 decimales.",
      example: "99.99",
    },
    {
      name: "concepto",
      type: "string",
      required: true,
      description:
        "Descripción del pago. Solo caracteres ASCII imprimibles (espacio a ~). Máximo 40 caracteres.",
      example: "Pago de ejemplo",
    },
    {
      name: "referenciaNumerica",
      type: "number | string",
      required: true,
      description:
        'Referencia numérica de 1-7 dígitos. Usa "0" si no requieres referencia.',
      example: "1234567",
    },
    {
      name: "vigencia",
      type: "number | string",
      required: true,
      description:
        'Timestamp Unix en milisegundos (no segundos). Usa "0" para vigencia ilimitada (recomendado). Valores menores a 10,000,000,000 son rechazados.',
      example: "0",
    },
    {
      name: "celularCliente",
      type: "string",
      required: true,
      description: "Número celular del cliente a 10 dígitos (sin +52)",
      example: "5512345678",
    },
  ];

  const consultaRequestParams = [
    {
      name: "folioCodi",
      type: "string",
      required: true,
      description: "Folio CoDi de una transacción. Exactamente 10 caracteres (IDC/QR) o 20 caracteres (folio Push).",
      example: "321e210838321e210838",
    },
    {
      name: "tpg",
      type: "number | string",
      required: true,
      description: "Transacciones por página (mínimo 1, máximo 100)",
      example: "10",
    },
    {
      name: "npg",
      type: "number | string",
      required: true,
      description: "Número de página (empezando en 1)",
      example: "1",
    },
    {
      name: "fechaInicial",
      type: "number | string",
      required: true,
      description: 'Fecha inicial en formato YYYYMMDD (sin guiones). "0" para consultar todo el historial.',
      example: "20240101",
    },
    {
      name: "fechaFinal",
      type: "number | string",
      required: true,
      description: 'Fecha final en formato YYYYMMDD (sin guiones). "0" para consultar todo el historial. No puede ser una fecha futura.',
      example: "20240131",
    },
  ];

  return (
    <div>
      <DocSection id="api-reference" title="Referencia de API" level={1}>
        <p className="text-lg text-gray-700 mb-4">
          La API CoDi<sup className="text-[0.5em] ml-0.5">®</sup> proporciona tres endpoints principales para generar pagos,
          enviar notificaciones push y consultar el estado de transacciones.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-gray-700">
            <strong>Base URL:</strong>{" "}
            <code className="bg-white px-2 py-1 rounded text-xs sm:text-sm break-all">
              http://localhost:3000
            </code>
          </p>
          <p className="text-xs sm:text-sm text-gray-700 mt-2">
            <strong>Autenticación:</strong> Todas las solicitudes requieren el
            header <code className="bg-white px-2 py-1 rounded text-xs sm:text-sm">x-api-key</code>
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mt-4">
          <p className="text-xs sm:text-sm text-gray-700">
            <strong>📖 Documentación OpenAPI:</strong>
            <br /> La especificación completa de la API en formato Swagger está
            disponible en:{" "}
            <a
              href="https://api.bite-size.mx/api-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium break-all"
            >
              https://api.bite-size.mx/api-docs/
            </a>
          </p>
        </div>
      </DocSection>

      {/* QR Endpoint */}
      <DocSection id="endpoint-qr" title="POST /v2/codi/qr">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-green-100 text-green-800">
            POST
          </span>
          <code className="text-xs sm:text-sm font-mono text-gray-700 break-all">/v2/codi/qr</code>
        </div>

        <p className="text-gray-700 mb-4">
          Genera un código QR para cobro CoDi<sup className="text-[0.5em] ml-0.5">®</sup>. El cliente puede escanear el QR
          con su app bancaria para realizar el pago.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong className="text-blue-900">💡 Nota importante:</strong> Un mismo código QR puede recibir múltiples pagos.
            Cada pago genera su propio <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">folioCodi</code>,
            pero todos quedan asociados al mismo <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">IDC</code> (Identificador de Cobro).
            Usa el IDC para consultar todos los pagos recibidos en un QR específico.
          </p>
        </div>

        <ParamTable
          parameters={qrRequestParams}
          title="Parámetros del Request"
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Ejemplo de Request
        </h4>
        <CodeBlock
          language="bash"
          title="cURL"
          code={`curl -X POST http://localhost:3000/v2/codi/qr \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY_HERE" \\
  -d '{
    "monto": 99.99,
    "concepto": "Pago de ejemplo",
    "referenciaNumerica": "1234567",
    "vigencia": "0"
  }'`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Respuesta Exitosa (200)
        </h4>
        <CodeBlock
          language="json"
          title="Response"
          showLineNumbers={false}
          code={`{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSU...",
  "data": {
    "cadenaMC": "{\\"TYP\\":20,\\"v\\":{\\"DEV\\":\\"29442719514356328128/0\\"},...}",
    "crtBdeM": "00000100000100015974",
    "selloDigital": "HWjD3bPwJ+rfDnDYc8UJt2fmJvFAl9L...",
    "epoch": 1743120460060,
    "edoPet": 0
  }
}`}
        />
      </DocSection>

      {/* Push Endpoint */}
      <DocSection id="endpoint-push" title="POST /v2/codi/push">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-green-100 text-green-800">
            POST
          </span>
          <code className="text-xs sm:text-sm font-mono text-gray-700 break-all">/v2/codi/push</code>
        </div>

        <p className="text-gray-700 mb-4">
          Envía una notificación push al celular del cliente solicitando el
          pago. El cliente recibirá la notificación en su app bancaria y podrá
          autorizar el pago directamente.
        </p>

        <ParamTable
          parameters={pushRequestParams}
          title="Parámetros del Request"
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Ejemplo de Request
        </h4>
        <CodeBlock
          language="bash"
          title="cURL"
          code={`curl -X POST http://localhost:3000/v2/codi/push \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY_HERE" \\
  -d '{
    "monto": 99.99,
    "concepto": "Pago de ejemplo",
    "referenciaNumerica": "1234567",
    "vigencia": "0",
    "celularCliente": "5512345678"
  }'`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Respuesta Exitosa (200)
        </h4>
        <CodeBlock
          language="json"
          title="Response"
          showLineNumbers={false}
          code={`{
  "success": true,
  "message": "Push notification enviada exitosamente",
  "data": {
    "folioCodi": "321e210838321e210838",
    "cuentaBeneficiario": "646180157042875817",
    "nombreBeneficiario": "BANCO AZTECA SA INSTITUCION DE BANCA MULTIPLE",
    "claveRastreo": "CR1234567890",
    "fechaOperacion": "2024-01-15T10:30:00Z",
    "celularCliente": "5512345678"
  }
}`}
        />
      </DocSection>

      {/* Consulta Endpoint */}
      <DocSection id="endpoint-consulta" title="POST /v2/codi/consulta">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-green-100 text-green-800">
            POST
          </span>
          <code className="text-xs sm:text-sm font-mono text-gray-700 break-all">
            /v2/codi/consulta
          </code>
        </div>

        <p className="text-gray-700 mb-4">
          Consulta el estado de transacciones CoDi<sup className="text-[0.5em] ml-0.5">®</sup>. Puedes buscar por folio
          específico o listar transacciones por rango de fechas con paginación.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 mb-3">
            <strong className="text-blue-900">💡 Tipos de búsqueda:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <div>
                <strong>Por IDC (Identificador de Cobro):</strong> Usa el <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">folioCodi</code> que
                termina sin sufijo (ej: <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">333413b9d7</code>) para consultar
                <strong> todos los pagos</strong> asociados a un código QR específico.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <div>
                <strong>Por Folio CoDi:</strong> Usa el folio completo de 20 caracteres (ej: <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">338225a919338225a919</code>)
                para consultar <strong>un pago específico</strong>.
              </div>
            </li>
          </ul>
        </div>

        <ParamTable
          parameters={consultaRequestParams}
          title="Parámetros del Request"
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Ejemplo de Request
        </h4>
        <CodeBlock
          language="bash"
          title="cURL"
          code={`curl -X POST http://localhost:3000/v2/codi/consulta \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY_HERE" \\
  -d '{
    "folioCodi": "321e210838321e210838",
    "tpg": 10,
    "npg": 1,
    "fechaInicial": "0",
    "fechaFinal": "0"
  }'`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Respuesta Exitosa (200)
        </h4>
        <CodeBlock
          language="json"
          title="Response"
          showLineNumbers={false}
          code={`{
  "success": true,
  "message": "Consulta realizada exitosamente",
  "data": {
    "cuentaBeneficiario": "646180157042875817",
    "nombreBeneficiario": "BANCO AZTECA SA INSTITUCION DE BANCA MULTIPLE",
    "operaciones": [
      {
        "folioCodi": "321e210838321e210838",
        "claveRastreo": "CR1234567890",
        "referenciaNumerica": 1234567,
        "concepto": "Pago de ejemplo",
        "monto": "99.99",
        "ordenante": "JUAN PEREZ",
        "cuentaOrdenante": "012180001234567890",
        "institucionOrdenante": "BBVA MEXICO SA INSTITUCION DE BANCA MULTIPLE GRUPO FINANCIERO BBVA MEXICO",
        "fechaOperacion": "2024-01-15T10:30:00Z",
        "estatus": "Liquidada"
      }
    ],
    "paginacion": {
      "paginaActual": 1,
      "transaccionesPorPagina": 10,
      "totalTransacciones": 1,
      "totalPaginas": 1
    }
  }
}`}
        />
      </DocSection>

      {/* Health Check Endpoint */}
      <DocSection id="endpoint-health" title="GET /v2/health">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">
            GET
          </span>
          <code className="text-xs sm:text-sm font-mono text-gray-700 break-all">/v2/health</code>
        </div>

        <p className="text-gray-700 mb-4">
          Verifica el estado de salud de la API y sus dependencias. No requiere
          autenticación.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Ejemplo de Request
        </h4>
        <CodeBlock
          language="bash"
          title="cURL"
          code={`curl http://localhost:3000/v2/health`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Respuesta Exitosa (200)
        </h4>
        <CodeBlock
          language="json"
          title="Response"
          showLineNumbers={false}
          code={`{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "services": {
    "api": "operational",
    "database": "operational"
  }
}`}
        />
      </DocSection>

      {/* Webhook Notifications */}
      <DocSection id="webhook-notifications" title="Notificaciones Webhook">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
            WEBHOOK
          </span>
          <span className="text-xs sm:text-sm font-mono text-gray-700">
            POST a tu URL de webhook
          </span>
        </div>

        <p className="text-gray-700 mb-4">
          Cuando un pago es completado o cancelado, el sistema CoDi<sup className="text-[0.5em] ml-0.5">®</sup> enviará
          automáticamente una notificación POST a la URL de webhook que
          configuraste. Esta notificación incluye todos los detalles de la
          transacción.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong className="text-amber-900">
              🔐 Autenticación del Webhook:
            </strong>{" "}
            La solicitud POST incluirá tu API Key en el header{" "}
            <code className="bg-white px-1.5 py-0.5 rounded border border-amber-200 text-xs font-mono">
              x-api-key
            </code>{" "}
            para que puedas verificar que la notificación es auténtica. El{" "}
            <code className="bg-white px-1.5 py-0.5 rounded border border-amber-200 text-xs font-mono">
              selloDigital
            </code>{" "}
            es verificado automáticamente por nuestro sistema.
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Estructura del Payload
        </h4>
        <CodeBlock
          language="json"
          title="Webhook Payload"
          showLineNumbers={false}
          code={`{
  "cadenaInformacion": {
    "certComercioProveedor": "00001000000511252793",
    "celularCliente": "8916498571",
    "digitoVerificadorCliente": 0,
    "nombreCliente": "P**** R******* C*** L*****",
    "claveInstitucionCliente": 40012,
    "tipoCuentaCliente": 40,
    "numeroCuentaCliente": "012180001597582168",
    "idMensajeCobro": "338225a919338225a919",
    "concepto": "Prueba Push Aceptado",
    "monto": 1,
    "claveRastreo": "0666072507",
    "resultadoMensajeCobro": 1,
    "horaSolicitudMensajeCobro": 1761698811708,
    "horaProcMensajeCobro": 1761698872000,
    "certBdeM": "00000200002000003582",
    "horaEnvioMensaje": 1761698872653
  },
  "selloDigital": "p1IO0OjPJwjs/rnUaXxRpGu2GwrFGpYLKYeujDG5bjelh/DxqNM..."
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
          Campos Importantes
        </h4>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-300 inline-block mb-1">
                resultadoMensajeCobro
              </dt>
              <dd className="text-gray-700 mt-1">
                Estado final del pago:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <code className="font-semibold text-green-700">1</code> =
                    Pago completado exitosamente
                  </li>
                  <li>
                    <code className="font-semibold text-yellow-700">0</code> =
                    Aceptado por el usuario pero aún no completado
                  </li>
                  <li>
                    <code className="font-semibold text-red-700">2</code> =
                    Pago rechazado
                  </li>
                </ul>
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-300 inline-block mb-1">
                claveInstitucionCliente
              </dt>
              <dd className="text-gray-700 mt-1">
                Código de la institución bancaria del cliente (ej.{" "}
                <code className="font-mono text-xs">40012</code> = BBVA
                Bancomer). Consulta el código en la sección de{" "}
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
              <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-300 inline-block mb-1">
                idMensajeCobro
              </dt>
              <dd className="text-gray-700 mt-1">
                Folio único de la transacción CoDi<sup className="text-[0.5em] ml-0.5">®</sup>. Úsalo para consultar el
                estado del pago con el endpoint{" "}
                <code className="font-mono text-xs">POST /v2/codi/consulta</code>
                .
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-300 inline-block mb-1">
                monto
              </dt>
              <dd className="text-gray-700 mt-1">
                Monto del pago en MXN (pesos mexicanos).
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-300 inline-block mb-1">
                claveRastreo
              </dt>
              <dd className="text-gray-700 mt-1">
                Clave de rastreo única de la transacción asignada por el sistema
                bancario.
              </dd>
            </div>
          </dl>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
          Mejores Prácticas de Integración
        </h4>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>
                Tu endpoint debe responder con código HTTP{" "}
                <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">
                  200 OK
                </code>{" "}
                para confirmar la recepción de la notificación.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>
                Procesa la notificación de forma asíncrona para responder
                rápidamente y evitar timeouts.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>
                Implementa deduplicación usando el{" "}
                <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">
                  idMensajeCobro
                </code>{" "}
                para evitar procesar la misma notificación múltiples veces.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>
                Verifica el header{" "}
                <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 text-xs font-mono">
                  x-api-key
                </code>{" "}
                para confirmar que la notificación proviene de nuestro sistema.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>
                Si tu webhook no responde o falla, el API CoDi<sup className="text-[0.5em] ml-0.5">®</sup> puede reintentar
                el envío automáticamente.
              </span>
            </li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Ejemplo de Implementación (Node.js)
        </h4>
        <CodeBlock
          language="javascript"
          title="Express Webhook Handler"
          code={`app.post('/webhook/codi', (req, res) => {
  // Verificar API Key
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.CODI_API_KEY) {
    return res.status(401).json({ error: 'Invalid API Key' });
  }

  const { cadenaInformacion, selloDigital } = req.body;
  const { idMensajeCobro, resultadoMensajeCobro, monto } = cadenaInformacion;

  // Responder inmediatamente
  res.status(200).json({ received: true });

  // Procesar de forma asíncrona
  processPaymentNotification({
    folio: idMensajeCobro,
    status: resultadoMensajeCobro,
    amount: monto,
    // ... otros campos
  }).catch(err => console.error('Error processing webhook:', err));
});`}
        />
      </DocSection>
    </div>
  );
}
