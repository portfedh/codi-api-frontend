import DocSection from './DocSection';
import CodeBlock from './CodeBlock';

export default function ErrorCodes() {
  const errorCodes = [
    {
      code: 400,
      name: 'Bad Request',
      description: 'La solicitud contiene parámetros inválidos o mal formados.',
      examples: [
        'Campos requeridos faltantes',
        'Formato de datos incorrecto (ej: monto negativo)',
        'Concepto con caracteres no ASCII',
        'Referencia numérica mayor a 7 dígitos',
      ]
    },
    {
      code: 401,
      name: 'Unauthorized',
      description: 'API Key faltante, inválida o mal formada.',
      examples: [
        'Header x-api-key no proporcionado',
        'API Key con longitud incorrecta (debe ser 128 caracteres)',
        'API Key con formato inválido',
      ]
    },
    {
      code: 403,
      name: 'Forbidden',
      description: 'API Key válida pero sin permisos para la operación solicitada.',
      examples: [
        'API Key deshabilitada',
        'Sin permisos para el endpoint',
        'Límite de requests excedido',
      ]
    },
    {
      code: 404,
      name: 'Not Found',
      description: 'El recurso solicitado no existe.',
      examples: [
        'Endpoint incorrecto',
        'Folio CoDi no encontrado',
        'Transacción no existe',
      ]
    },
    {
      code: 422,
      name: 'Unprocessable Entity',
      description: 'Los datos son válidos pero no pueden procesarse.',
      examples: [
        'Institución bancaria no válida',
        'Monto fuera de rango permitido',
        'Número celular inválido',
      ]
    },
    {
      code: 500,
      name: 'Internal Server Error',
      description: 'Error interno del servidor.',
      examples: [
        'Error de base de datos',
        'Error al conectar con servicio externo',
        'Error inesperado del sistema',
      ]
    },
    {
      code: 503,
      name: 'Service Unavailable',
      description: 'El servicio está temporalmente no disponible.',
      examples: [
        'Mantenimiento programado',
        'Sobrecarga del sistema',
        'Servicio de Banxico no disponible',
      ]
    },
  ];

  return (
    <div>
      <DocSection id="error-codes" title="Códigos de Error" level={1}>
        <p className="text-lg text-gray-700 mb-4">
          La API utiliza códigos de estado HTTP estándar para indicar el éxito o fallo de las solicitudes.
          Todos los errores incluyen un mensaje descriptivo en formato JSON.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Formato de Respuesta de Error</h4>
          <p className="text-sm text-blue-800 mb-3">
            Todas las respuestas de error siguen este formato consistente:
          </p>
          <CodeBlock
            language="json"
            showLineNumbers={false}
            code={`{
  "success": false,
  "message": "Descripción legible del error",
  "errors": [
    {
      "field": "campo_con_error",
      "message": "Descripción específica del problema"
    }
  ]
}`}
          />
        </div>
      </DocSection>

      <DocSection id="http-status-codes" title="Códigos de Estado HTTP">
        <div className="space-y-6">
          {errorCodes.map((error) => (
            <div key={error.code} className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold ${
                  error.code < 400 ? 'bg-green-100 text-green-800' :
                  error.code < 500 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {error.code}
                </span>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">{error.name}</h4>
                  <p className="text-gray-700 mt-1">{error.description}</p>
                </div>
              </div>
              <div className="ml-[52px]">
                <p className="text-sm font-medium text-gray-700 mb-2">Causas comunes:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {error.examples.map((example, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="ejemplos-errores" title="Ejemplos de Errores">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Error 400: Validación de Campos</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "success": false,
  "message": "Errores de validación en la solicitud",
  "errors": [
    {
      "field": "monto",
      "message": "El monto debe ser un número positivo"
    },
    {
      "field": "concepto",
      "message": "El concepto no puede exceder 40 caracteres"
    }
  ]
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Error 401: API Key Inválida</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "success": false,
  "message": "API Key inválida o faltante",
  "errors": [
    {
      "field": "x-api-key",
      "message": "La API Key debe tener exactamente 128 caracteres hexadecimales"
    }
  ]
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Error 422: Datos No Procesables</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "success": false,
  "message": "No se pudo procesar la solicitud",
  "errors": [
    {
      "field": "celularCliente",
      "message": "El número celular debe tener exactamente 10 dígitos"
    }
  ]
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Error 500: Error Interno</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "success": false,
  "message": "Error interno del servidor",
  "errors": [
    {
      "field": "system",
      "message": "Por favor intenta nuevamente más tarde"
    }
  ]
}`}
        />
      </DocSection>

      <DocSection id="manejo-errores" title="Buenas Prácticas para Manejo de Errores">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-primary-500 p-4">
            <h5 className="font-semibold text-gray-900 mb-2">1. Siempre verifica el código de estado HTTP</h5>
            <p className="text-sm text-gray-700">
              No asumas que todas las respuestas son exitosas. Verifica el status code antes de procesar la respuesta.
            </p>
            <CodeBlock
              language="javascript"
              code={`try {
  const response = await axios.post('/v2/codi/qr', data);
  console.log('Éxito:', response.data);
} catch (error) {
  if (error.response) {
    // El servidor respondió con un código de error
    console.error('Error:', error.response.status);
    console.error('Detalles:', error.response.data.errors);
  } else if (error.request) {
    // La solicitud se hizo pero no hubo respuesta
    console.error('Sin respuesta del servidor');
  } else {
    // Error al configurar la solicitud
    console.error('Error:', error.message);
  }
}`}
            />
          </div>

          <div className="bg-white border-l-4 border-primary-500 p-4">
            <h5 className="font-semibold text-gray-900 mb-2">2. Implementa reintentos con backoff exponencial</h5>
            <p className="text-sm text-gray-700 mb-2">
              Para errores 500 y 503, implementa una estrategia de reintentos con esperas incrementales.
            </p>
          </div>

          <div className="bg-white border-l-4 border-primary-500 p-4">
            <h5 className="font-semibold text-gray-900 mb-2">3. Registra los errores para debugging</h5>
            <p className="text-sm text-gray-700">
              Guarda logs detallados de los errores incluyendo el timestamp, request body y response completa.
            </p>
          </div>

          <div className="bg-white border-l-4 border-primary-500 p-4">
            <h5 className="font-semibold text-gray-900 mb-2">4. Muestra mensajes útiles al usuario</h5>
            <p className="text-sm text-gray-700">
              Traduce los errores técnicos a mensajes comprensibles para el usuario final.
            </p>
          </div>
        </div>
      </DocSection>
    </div>
  );
}
