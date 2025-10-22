import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";

export default function GettingStarted() {
  return (
    <div>
      <DocSection id="introduccion" title="Introducción" level={1}>
        <p className="text-lg text-gray-700 mb-4">
          La API CoDi te permite integrar pagos instantáneos del sistema CoDi de
          Banxico en tu aplicación. Esta guía te ayudará a realizar tu primera
          solicitud en minutos.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            ¿Qué necesitas?
          </h4>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Una API Key válida (128 caracteres hexadecimales)</li>
            <li>Conocimientos básicos de HTTP y JSON</li>
            <li>Un cliente HTTP (cURL, Postman, o tu lenguaje favorito)</li>
          </ul>
        </div>
      </DocSection>

      <DocSection id="autenticacion" title="Autenticación">
        <p className="text-gray-700 mb-4">
          Todas las solicitudes a la API requieren autenticación mediante una
          API Key que se envía en el header{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            x-api-key
          </code>
          .
        </p>

        <CodeBlock
          language="bash"
          title="Ejemplo de autenticación"
          code={`curl -X POST http://localhost:3000/v2/codi/qr \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: TU_API_KEY_DE_128_CARACTERES" \\
  -d '{
    "monto": 99.99,
    "concepto": "Pago de ejemplo",
    "referenciaNumerica": "1234567",
    "vigencia": "0"
  }'`}
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
          <div className="flex gap-2">
            <svg
              className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm text-yellow-800 font-medium">
                Seguridad de la API Key
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Nunca compartas tu API Key públicamente. En producción, usa
                variables de entorno y nunca la incluyas en tu código fuente.
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="primer-request" title="Tu Primer Request">
        <p className="text-gray-700 mb-4">
          Empecemos generando un código QR para un pago de $99.99 MXN. Este es
          uno de los tipos de solicitud más comunes.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Paso 1: Preparar los datos
        </h4>
        <p className="text-gray-700 mb-3">
          Necesitas enviar estos campos obligatorios:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>
            <strong>monto</strong>: Cantidad a cobrar (número decimal)
          </li>
          <li>
            <strong>concepto</strong>: Descripción del pago (máx. 40 caracteres
            ASCII)
          </li>
          <li>
            <strong>referenciaNumerica</strong>: Número de referencia (1-7
            dígitos, usa "0" si no aplica)
          </li>
          <li>
            <strong>vigencia</strong>: Tiempo de validez. (Usa "0" = sin límite)
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Paso 2: Hacer la solicitud
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

        <CodeBlock
          language="javascript"
          title="JavaScript (fetch)"
          code={`const response = await fetch('http://localhost:3000/v2/codi/qr', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY_HERE'
  },
  body: JSON.stringify({
    monto: 99.99,
    concepto: 'Pago de ejemplo',
    referenciaNumerica: '1234567',
    vigencia: '0'
  })
});

const data = await response.json();
console.log(data);`}
        />

        <CodeBlock
          language="python"
          title="Python (requests)"
          code={`import requests

url = 'http://localhost:3000/v2/codi/qr'
headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY_HERE'
}
data = {
    'monto': 99.99,
    'concepto': 'Pago de ejemplo',
    'referenciaNumerica': '1234567',
    'vigencia': '0'
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          Paso 3: Procesar la respuesta
        </h4>
        <p className="text-gray-700 mb-3">
          Si la solicitud es exitosa, recibirás una respuesta con el código QR y
          los datos del mensaje de cobro:
        </p>

        <CodeBlock
          language="json"
          title="Respuesta exitosa"
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

        <div className="mt-4 space-y-3">
          <p className="text-gray-700">
            <strong>Campos principales:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                qrCode
              </code>
              : Imagen del código QR en formato Base64, lista para mostrar en tu
              aplicación
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                cadenaMC
              </code>
              : Cadena del mensaje de cobro que se representa en el QR
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                selloDigital
              </code>
              : Firma digital de la respuesta para validación
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                epoch
              </code>
              : Marca de tiempo de generación (milisegundos desde 1970-01-01 UTC)
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                edoPet
              </code>
              : Estado de la petición (0 = éxito, valores negativos = error)
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
          <div className="flex gap-2">
            <svg
              className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm text-green-800 font-medium">
                ¡Solicitud exitosa!
              </p>
              <p className="text-xs text-green-700 mt-1">
                Cuando <code className="bg-green-100 px-1 rounded">edoPet = 0</code>,
                la operación fue exitosa. Consulta la referencia de API para
                conocer otros códigos de estado y errores.
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="proximos-pasos" title="Próximos Pasos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Explorar el Playground
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Prueba los tres endpoints disponibles de forma interactiva sin
              escribir código.
            </p>
            <a
              href="/playground"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Ir al Playground →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Referencia de API
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Consulta la documentación completa de todos los endpoints y
              parámetros.
            </p>
            <a
              href="#api-reference"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Ver Referencia →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Códigos de Instituciones
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Encuentra los códigos bancarios necesarios para tus solicitudes.
            </p>
            <a
              href="/tools"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Buscar Instituciones →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Generador de Código
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Genera ejemplos de código listos para usar en tu lenguaje
              favorito.
            </p>
            <a
              href="/tools"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Generar Código →
            </a>
          </div>
        </div>
      </DocSection>
    </div>
  );
}
