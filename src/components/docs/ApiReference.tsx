import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";
import ParamTable from "./ParamTable";

export default function ApiReference() {
  const qrRequestParams = [
    {
      name: "monto",
      type: "number",
      required: true,
      description:
        "Monto a cobrar en MXN (máximo 12 dígitos antes del punto decimal, 2 después)",
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
      type: "number",
      required: true,
      description:
        'Referencia numérica de 1-7 dígitos. Usa "0" si no requieres referencia.',
      example: "1234567",
    },
    {
      name: "vigencia",
      type: "number",
      required: true,
      description:
        'Timestamp Unix (epoch) para la fecha de expiración del QR. "0" significa sin límite de tiempo.',
      example: "0",
    },
  ];

  const pushRequestParams = [
    {
      name: "monto",
      type: "number",
      required: true,
      description:
        "Monto a cobrar en MXN (máximo 12 dígitos antes del punto decimal, 2 después)",
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
      type: "number",
      required: true,
      description:
        'Referencia numérica de 1-7 dígitos. Usa "0" si no requieres referencia.',
      example: "1234567",
    },
    {
      name: "vigencia",
      type: "number",
      required: true,
      description:
        'Timestamp Unix (epoch) para la fecha de expiración. "0" significa sin límite de tiempo.',
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
      required: false,
      description: "Folio CoDi de una transacción específica (20 caracteres)",
      example: "321e210838321e210838",
    },
    {
      name: "tpg",
      type: "number",
      required: true,
      description: "Transacciones por página (máximo 10)",
      example: "10",
    },
    {
      name: "npg",
      type: "number",
      required: true,
      description: "Número de página (empezando en 1)",
      example: "1",
    },
    {
      name: "fechaInicial",
      type: "string",
      required: false,
      description: 'Fecha inicial en formato YYYY-MM-DD. "0" para omitir.',
      example: "2024-01-01",
    },
    {
      name: "fechaFinal",
      type: "string",
      required: false,
      description: 'Fecha final en formato YYYY-MM-DD. "0" para omitir.',
      example: "2024-01-31",
    },
  ];

  return (
    <div>
      <DocSection id="api-reference" title="Referencia de API" level={1}>
        <p className="text-lg text-gray-700 mb-4">
          La API CoDi proporciona tres endpoints principales para generar pagos,
          enviar notificaciones push y consultar el estado de transacciones.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Base URL:</strong>{" "}
            <code className="bg-white px-2 py-1 rounded">
              http://localhost:3000
            </code>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Autenticación:</strong> Todas las solicitudes requieren el
            header <code className="bg-white px-2 py-1 rounded">x-api-key</code>
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-sm text-gray-700">
            <strong>📖 Documentación OpenAPI:</strong> La especificación
            completa de la API en formato Swagger está disponible en:{" "}
            <a
              href="https://api.bite-size.mx/api-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              https://api.bite-size.mx/api-docs/
            </a>
          </p>
        </div>
      </DocSection>

      {/* QR Endpoint */}
      <DocSection id="endpoint-qr" title="POST /v2/codi/qr">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800 mr-2">
            POST
          </span>
          <code className="text-sm font-mono text-gray-700">/v2/codi/qr</code>
        </div>

        <p className="text-gray-700 mb-4">
          Genera un código QR para cobro CoDi. El cliente puede escanear el QR
          con su app bancaria para realizar el pago.
        </p>

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
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800 mr-2">
            POST
          </span>
          <code className="text-sm font-mono text-gray-700">/v2/codi/push</code>
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
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800 mr-2">
            POST
          </span>
          <code className="text-sm font-mono text-gray-700">
            /v2/codi/consulta
          </code>
        </div>

        <p className="text-gray-700 mb-4">
          Consulta el estado de transacciones CoDi. Puedes buscar por folio
          específico o listar transacciones por rango de fechas con paginación.
        </p>

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
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 mr-2">
            GET
          </span>
          <code className="text-sm font-mono text-gray-700">/v2/health</code>
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
    </div>
  );
}
