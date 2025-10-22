import DocSection from './DocSection';
import CodeBlock from './CodeBlock';

export default function GettingStarted() {
  return (
    <div>
      <DocSection id="introduccion" title="Introducción" level={1}>
        <p className="text-lg text-gray-700 mb-4">
          La API CoDi te permite integrar pagos instantáneos del sistema CoDi de Banxico en tu aplicación.
          Esta guía te ayudará a realizar tu primera solicitud en minutos.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">¿Qué necesitas?</h4>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Una API Key válida (128 caracteres hexadecimales)</li>
            <li>Conocimientos básicos de HTTP y JSON</li>
            <li>Un cliente HTTP (cURL, Postman, o tu lenguaje favorito)</li>
          </ul>
        </div>
      </DocSection>

      <DocSection id="autenticacion" title="Autenticación">
        <p className="text-gray-700 mb-4">
          Todas las solicitudes a la API requieren autenticación mediante una API Key que se envía en el header <code className="bg-gray-100 px-2 py-1 rounded text-sm">x-api-key</code>.
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
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm text-yellow-800 font-medium">
                Seguridad de la API Key
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Nunca compartas tu API Key públicamente. En producción, usa variables de entorno y nunca la incluyas en tu código fuente.
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="primer-request" title="Tu Primer Request">
        <p className="text-gray-700 mb-4">
          Empecemos generando un código QR para un pago de $99.99 MXN. Este es el tipo de solicitud más común.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">Paso 1: Preparar los datos</h4>
        <p className="text-gray-700 mb-3">
          Necesitas enviar estos campos obligatorios:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>monto</strong>: Cantidad a cobrar (número decimal)</li>
          <li><strong>concepto</strong>: Descripción del pago (máx. 40 caracteres ASCII)</li>
          <li><strong>referenciaNumerica</strong>: Número de referencia (1-7 dígitos, usa "0" si no aplica)</li>
          <li><strong>vigencia</strong>: Minutos de validez ("0" = sin límite)</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">Paso 2: Hacer la solicitud</h4>

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
          title="JavaScript (Axios)"
          code={`import axios from 'axios';

const response = await axios.post('http://localhost:3000/v2/codi/qr', {
  monto: 99.99,
  concepto: 'Pago de ejemplo',
  referenciaNumerica: '1234567',
  vigencia: '0'
}, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY_HERE'
  }
});

console.log(response.data);`}
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

        <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Paso 3: Procesar la respuesta</h4>
        <p className="text-gray-700 mb-3">
          Si la solicitud es exitosa, recibirás una respuesta con el código QR y los detalles del pago:
        </p>

        <CodeBlock
          language="json"
          title="Respuesta exitosa"
          showLineNumbers={false}
          code={`{
  "success": true,
  "message": "QR generado exitosamente",
  "data": {
    "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANS...",
    "folioCodi": "321e210838321e210838",
    "cuentaBeneficiario": "646180157042875817",
    "nombreBeneficiario": "BANCO AZTECA SA INSTITUCION DE BANCA MULTIPLE",
    "claveRastreo": "CR1234567890",
    "fechaOperacion": "2024-01-15T10:30:00Z"
  }
}`}
        />

        <p className="text-gray-700 mt-4">
          El campo <code className="bg-gray-100 px-2 py-1 rounded text-sm">qrCode</code> contiene la imagen del QR en formato Base64 lista para mostrar en tu aplicación.
        </p>
      </DocSection>

      <DocSection id="proximos-pasos" title="Próximos Pasos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Explorar el Playground</h4>
            <p className="text-gray-600 text-sm mb-3">
              Prueba los tres endpoints disponibles de forma interactiva sin escribir código.
            </p>
            <a href="/playground" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Ir al Playground →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Referencia de API</h4>
            <p className="text-gray-600 text-sm mb-3">
              Consulta la documentación completa de todos los endpoints y parámetros.
            </p>
            <a href="#api-reference" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Ver Referencia →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Códigos de Instituciones</h4>
            <p className="text-gray-600 text-sm mb-3">
              Encuentra los códigos bancarios necesarios para tus solicitudes.
            </p>
            <a href="/tools" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Buscar Instituciones →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Generador de Código</h4>
            <p className="text-gray-600 text-sm mb-3">
              Genera ejemplos de código listos para usar en tu lenguaje favorito.
            </p>
            <a href="/tools" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Generar Código →
            </a>
          </div>
        </div>
      </DocSection>
    </div>
  );
}
