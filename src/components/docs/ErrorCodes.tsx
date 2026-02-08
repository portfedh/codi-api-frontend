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
            Las respuestas de error de validación (400) siguen este formato:
          </p>
          <CodeBlock
            language="json"
            showLineNumbers={false}
            code={`{
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "campo_con_error",
      "message": "Descripción específica del problema (en inglés)"
    }
  ]
}`}
          />
          <p className="text-xs text-blue-700 mt-2">
            <strong>Nota:</strong> Los mensajes de error de validación son retornados en inglés por la API.
            Consulta la tabla de mensajes más abajo para ver las traducciones.
          </p>
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
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "monto",
      "message": "Monto must be a number between 0 and 999,999,999,999.99 with at most two decimal places"
    },
    {
      "field": "concepto",
      "message": "Concepto must be a string with a minimum length of 1 and maximum length of 40 allowed ascii characters"
    }
  ]
}`}
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Traducción: "Monto debe ser un número entre 0 y 999,999,999,999.99 con máximo dos decimales" /
          "Concepto debe ser una cadena de mínimo 1 y máximo 40 caracteres ASCII permitidos"
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Error 401: API Key Inválida</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "message": "API Key missing"
}`}
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Traducción: "Falta la API Key"
        </p>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "message": "Invalid API Key"
}`}
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Traducción: "API Key inválida"
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Error 400: Vigencia en Segundos</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "vigencia",
      "message": "Vigencia must be a millisecond timestamp (not seconds). Multiply by 1000 if needed"
    }
  ]
}`}
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Traducción: "Vigencia debe ser un timestamp en milisegundos (no segundos). Multiplica por 1000 si es necesario"
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Error 500: Error Interno</h4>
        <CodeBlock
          language="json"
          showLineNumbers={false}
          code={`{
  "message": "Internal server error"
}`}
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Traducción: "Error interno del servidor"
        </p>
      </DocSection>

      <DocSection id="mensajes-validacion" title="Mensajes de Validación de la API">
        <p className="text-gray-700 mb-4">
          Referencia completa de los mensajes de error que retorna la API para cada campo.
          Los mensajes son retornados en inglés. Se incluye la traducción para referencia.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Endpoints QR y Push</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Campo</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Mensaje de la API (inglés)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Traducción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">monto</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Monto cannot be empty</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Monto no puede estar vacío</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">monto</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Monto must be a numeric value</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Monto debe ser un valor numérico</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">monto</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Monto must be a number between 0 and 999,999,999,999.99 with at most two decimal places</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Monto debe ser un número entre 0 y 999,999,999,999.99 con máximo dos decimales</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">referenciaNumerica</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">ReferenciaNumerica must contain only digits (0-9) with a maximum length of 7</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">ReferenciaNumerica debe contener solo dígitos (0-9) con un máximo de 7</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">concepto</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Concepto must be a string with a minimum length of 1 and maximum length of 40 allowed ascii characters</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Concepto debe ser una cadena de mínimo 1 y máximo 40 caracteres ASCII permitidos</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">concepto</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Concepto contains invalid characters</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Concepto contiene caracteres inválidos</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">vigencia</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Vigencia cannot be empty</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Vigencia no puede estar vacía</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">vigencia</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Vigencia must be '0' or a numeric value without any letters or special characters</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Vigencia debe ser '0' o un valor numérico sin letras ni caracteres especiales</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">vigencia</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Vigencia numeric value cannot exceed 15 digits</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">El valor numérico de vigencia no puede exceder 15 dígitos</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">vigencia</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Vigencia must be a millisecond timestamp (not seconds). Multiply by 1000 if needed</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Vigencia debe ser un timestamp en milisegundos (no segundos). Multiplica por 1000 si es necesario</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">vigencia</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Vigencia timestamp must be in the future</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">El timestamp de vigencia debe ser en el futuro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">vigencia</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Vigencia timestamp cannot exceed one year from now</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">El timestamp de vigencia no puede exceder un año desde ahora</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Endpoint Push (adicional)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Campo</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Mensaje de la API (inglés)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Traducción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">celularCliente</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">celularCliente cannot be empty</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">celularCliente no puede estar vacío</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">celularCliente</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">CelularCliente must contain exactly 10 numeric digits</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">CelularCliente debe contener exactamente 10 dígitos numéricos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Endpoint Consulta</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Campo</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Mensaje de la API (inglés)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Traducción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">folioCodi</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">FolioCodi is required</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">FolioCodi es requerido</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">folioCodi</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">FolioCodi must be 10 or 20 characters long</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">FolioCodi debe tener 10 o 20 caracteres</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">tpg</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">tpg is required</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">tpg es requerido</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">tpg</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">tpg must be a number between 1 and 100</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">tpg debe ser un número entre 1 y 100</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">npg</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">npg is required</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">npg es requerido</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">npg</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">npg must be a number between 1 and 2147483647</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">npg debe ser un número entre 1 y 2,147,483,647</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">fechaInicial</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">fechaInicial is required</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">fechaInicial es requerido</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">fechaInicial</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">fechaInicial must be '0' or a valid date in YYYYMMDD format</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">fechaInicial debe ser '0' o una fecha válida en formato YYYYMMDD</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">fechaFinal</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">fechaFinal is required</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">fechaFinal es requerido</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">fechaFinal</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">fechaFinal must be '0' or a valid date in YYYYMMDD format</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">fechaFinal debe ser '0' o una fecha válida en formato YYYYMMDD</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">fechaFinal</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">fechaFinal must be after fechaInicial and not in the future</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">fechaFinal debe ser posterior a fechaInicial y no puede ser una fecha futura</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Autenticación</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">HTTP</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Mensaje de la API (inglés)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Traducción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-mono text-xs">401</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">API Key missing</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">Falta la API Key</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-xs">401</td>
                <td className="p-3 border border-gray-200 text-xs"><code className="bg-gray-100 px-1 rounded">Invalid API Key</code></td>
                <td className="p-3 border border-gray-200 text-xs text-gray-600">API Key inválida</td>
              </tr>
            </tbody>
          </table>
        </div>
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
