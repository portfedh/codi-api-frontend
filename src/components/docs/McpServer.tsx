import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";

export default function McpServer() {
  return (
    <div>
      <DocSection id="mcp-server" title="Servidor MCP" level={1}>
        <p className="text-lg text-gray-700 mb-4">
          El servidor MCP (Model Context Protocol) de CoDi le da a tu asistente
          de IA conocimiento estructurado y offline de la API — endpoints,
          reglas de campos, códigos de error y prompts de integración —
          directamente en tu editor.
        </p>
        <p className="text-gray-700 mb-4">
          Una vez instalado, asistentes como Claude Code, GitHub Copilot,
          Cursor o Windsurf pueden generar código correcto para CoDi sin
          necesitar credenciales ni conexión a internet.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex gap-2">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm text-blue-900 font-medium">
                Sin credenciales, sin conexión extra
              </p>
              <p className="text-xs text-blue-800 mt-1">
                El servidor MCP funciona completamente offline. No requiere tu
                API Key ni acceso a los servidores de Banxico. Toda la
                información está empaquetada localmente.
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="mcp-instalacion" title="Instalación Rápida">
        <p className="text-gray-700 mb-4">
          Elige tu herramienta y sigue las instrucciones. Requiere{" "}
          <strong>Node.js 18+</strong> instalado en tu sistema.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Claude Code
        </h4>
        <CodeBlock
          language="bash"
          title="Claude Code — instalación con un comando"
          showLineNumbers={false}
          code={`claude mcp add codi-api-mcp -- npx -y codi-api-mcp`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          OpenAI Codex CLI
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Instalación con un comando:
        </p>
        <CodeBlock
          language="bash"
          title="OpenAI Codex CLI — instalación con un comando"
          showLineNumbers={false}
          code={`codex mcp add codi-api-mcp -- npx -y codi-api-mcp`}
        />
        <p className="text-gray-600 text-sm mb-2 mt-3">
          O agrega esto directamente a{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            ~/.codex/config.toml
          </code>
          :
        </p>
        <CodeBlock
          language="toml"
          title="~/.codex/config.toml"
          showLineNumbers={false}
          code={`[mcp_servers.codi-api-mcp]
command = "npx"
args = ["-y", "codi-api-mcp"]`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Gemini CLI
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Agrega esto a{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            ~/.gemini/settings.json
          </code>{" "}
          (configuración global) o a{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            .gemini/settings.json
          </code>{" "}
          en la raíz de tu proyecto:
        </p>
        <CodeBlock
          language="json"
          title="~/.gemini/settings.json"
          showLineNumbers={false}
          code={`{
  "mcpServers": {
    "codi-api-mcp": {
      "command": "npx",
      "args": ["-y", "codi-api-mcp"]
    }
  }
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          VS Code (GitHub Copilot)
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Agrega esto a tu archivo{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            .vscode/mcp.json
          </code>{" "}
          en la raíz del proyecto:
        </p>
        <CodeBlock
          language="json"
          title=".vscode/mcp.json"
          showLineNumbers={false}
          code={`{
  "servers": {
    "codi-api-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "codi-api-mcp"]
    }
  }
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Cursor
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Agrega esto a tu archivo{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            .cursor/mcp.json
          </code>
          :
        </p>
        <CodeBlock
          language="json"
          title=".cursor/mcp.json"
          showLineNumbers={false}
          code={`{
  "mcpServers": {
    "codi-api-mcp": {
      "command": "npx",
      "args": ["-y", "codi-api-mcp"]
    }
  }
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Windsurf
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Agrega esto a tu archivo{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            ~/.codeium/windsurf/mcp_config.json
          </code>
          :
        </p>
        <CodeBlock
          language="json"
          title="~/.codeium/windsurf/mcp_config.json"
          showLineNumbers={false}
          code={`{
  "mcpServers": {
    "codi-api-mcp": {
      "command": "npx",
      "args": ["-y", "codi-api-mcp"]
    }
  }
}`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Claude Desktop
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Agrega esto a tu archivo de configuración de Claude Desktop:
        </p>
        <CodeBlock
          language="json"
          title="claude_desktop_config.json"
          showLineNumbers={false}
          code={`{
  "mcpServers": {
    "codi-api-mcp": {
      "command": "npx",
      "args": ["-y", "codi-api-mcp"]
    }
  }
}`}
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
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
                Requisito: Node.js 18+
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Asegúrate de tener Node.js versión 18 o superior instalado.
                Verifica con{" "}
                <code className="bg-yellow-100 px-1 rounded">node --version</code>
                .
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="mcp-claude-code" title="Opciones de Alcance (Claude Code)">
        <p className="text-gray-700 mb-4">
          Al instalar con Claude Code puedes elegir el alcance del servidor MCP
          según tus necesidades:
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Alcance de usuario (recomendado)
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Disponible en todos tus proyectos de Claude Code:
        </p>
        <CodeBlock
          language="bash"
          title="Alcance de usuario"
          showLineNumbers={false}
          code={`claude mcp add --scope user codi-api-mcp -- npx -y codi-api-mcp`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Alcance de proyecto
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Solo disponible en el proyecto actual (se guarda en{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            .mcp.json
          </code>
          ):
        </p>
        <CodeBlock
          language="bash"
          title="Alcance de proyecto"
          showLineNumbers={false}
          code={`claude mcp add --scope project codi-api-mcp -- npx -y codi-api-mcp`}
        />

        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
          Alcance predeterminado
        </h4>
        <p className="text-gray-600 text-sm mb-2">
          Sin flag, usa el alcance predeterminado de Claude Code:
        </p>
        <CodeBlock
          language="bash"
          title="Alcance predeterminado"
          showLineNumbers={false}
          code={`claude mcp add codi-api-mcp -- npx -y codi-api-mcp`}
        />
      </DocSection>

      <DocSection id="mcp-recursos" title="Recursos Disponibles">
        <p className="text-gray-700 mb-4">
          El servidor expone los siguientes recursos mediante URIs{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">codi://</code>
          . Tu asistente de IA puede leerlos automáticamente al responder
          preguntas sobre la API:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-900">
                  URI
                </th>
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-900">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  uri: "codi://overview",
                  desc: "Visión general del sistema CoDi: qué es, cómo funciona y casos de uso.",
                },
                {
                  uri: "codi://endpoints",
                  desc: "Referencia completa de todos los endpoints: parámetros, tipos y reglas de validación.",
                },
                {
                  uri: "codi://authentication",
                  desc: "Guía de autenticación: formato de API Key, manejo del header x-api-key.",
                },
                {
                  uri: "codi://error-codes",
                  desc: "Catálogo de códigos de error HTTP y valores de edoPet con sus significados.",
                },
                {
                  uri: "codi://integration-guide",
                  desc: "Guía de integración paso a paso con ejemplos en múltiples lenguajes.",
                },
                {
                  uri: "codi://institutions",
                  desc: "Lista de instituciones financieras con sus códigos bancarios.",
                },
              ].map((row) => (
                <tr key={row.uri} className="even:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-mono text-xs text-primary-700 whitespace-nowrap">
                    {row.uri}
                  </td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-700">
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="mcp-prompts" title="Prompts Disponibles">
        <p className="text-gray-700 mb-4">
          Además de los recursos, el servidor incluye prompts predefinidos que
          generan código listo para usar:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-900">
                  Prompt
                </th>
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-900">
                  Qué genera
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prompt: "generate-qr-integration",
                  desc: "Código completo para generar un QR de cobro CoDi en el lenguaje que elijas.",
                },
                {
                  prompt: "generate-push-integration",
                  desc: "Código para enviar notificaciones push de cobro a un dispositivo móvil.",
                },
                {
                  prompt: "generate-consulta-integration",
                  desc: "Código para consultar el estado de un pago por folio o referencia.",
                },
                {
                  prompt: "generate-webhook-handler",
                  desc: "Manejador de webhooks para procesar confirmaciones de pago entrantes.",
                },
              ].map((row) => (
                <tr key={row.prompt} className="even:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-mono text-xs text-primary-700 whitespace-nowrap">
                    {row.prompt}
                  </td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-700">
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="mcp-ejemplos" title="Qué Puedes Preguntar">
        <p className="text-gray-700 mb-4">
          Una vez instalado el servidor MCP, puedes hacerle preguntas como
          estas a tu asistente de IA directamente desde tu editor:
        </p>

        <CodeBlock
          language="text"
          title="Ejemplos de preguntas"
          showLineNumbers={false}
          code={`¿Cuáles son los campos obligatorios para generar un QR de CoDi?

Genera una función en TypeScript que llame al endpoint /v2/codi/push.

¿Qué significa edoPet = -5 en la respuesta del API?

Dame un ejemplo de manejo de errores para la API CoDi en Python.

¿Cuál es el código bancario de Banorte para el campo institucionBeneficiaria?

Genera un manejador de webhook en Node.js para recibir confirmaciones de pago.

¿Cuál es el límite de caracteres del campo "concepto"?

Muéstrame cómo consultar el estado de un pago por referencia numérica.`}
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <div className="flex gap-2">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm text-blue-900 font-medium">
                El asistente de IA resuelve ambigüedades automáticamente
              </p>
              <p className="text-xs text-blue-800 mt-1">
                El servidor MCP provee contexto suficiente para que el asistente
                genere código correcto sin que tengas que especificar cada detalle
                del API. No necesitas recordar los nombres exactos de los campos
                ni los formatos requeridos.
              </p>
            </div>
          </div>
        </div>
      </DocSection>
    </div>
  );
}
