import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-expect-error - Style file doesn't have type definitions
import tomorrowNight from 'react-syntax-highlighter/dist/styles/tomorrow-night';
import { useApiKey } from '../../hooks/useApiKey';
import { copyToClipboard } from '../../utils/clipboard';
import { curlTemplates, javascriptTemplates, pythonTemplates } from '../../utils/codeTemplates';

type Endpoint = 'qr' | 'push' | 'consulta';
type Language = 'curl' | 'javascript' | 'python';

export default function CodeGenerator() {
  const { apiKey } = useApiKey();
  const [endpoint, setEndpoint] = useState<Endpoint>('qr');
  const [language, setLanguage] = useState<Language>('curl');
  const [copied, setCopied] = useState(false);
  const [displayApiKey, setDisplayApiKey] = useState('YOUR_API_KEY_HERE');

  // Update display API key when stored API key changes
  useEffect(() => {
    if (apiKey && apiKey.length === 128) {
      setDisplayApiKey(apiKey);
    }
  }, [apiKey]);

  const getCode = (): string => {
    const templates = {
      curl: curlTemplates,
      javascript: javascriptTemplates,
      python: pythonTemplates,
    };

    return templates[language][endpoint](displayApiKey);
  };

  const getLanguageLabel = (lang: Language): string => {
    const labels = {
      curl: 'cURL',
      javascript: 'JavaScript (Axios)',
      python: 'Python (requests)',
    };
    return labels[lang];
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(getCode());
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Generador de Código
        </h2>
        <p className="text-gray-600">
          Genera ejemplos de código listos para usar en tu lenguaje favorito.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 space-y-4">
        {/* Endpoint Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Endpoint
          </label>
          <div className="grid grid-cols-3 gap-3">
            {([
              { id: 'qr', label: 'Generar QR' },
              { id: 'push', label: 'Push Notification' },
              { id: 'consulta', label: 'Consultar Estado' },
            ] as const).map((ep) => (
              <button
                key={ep.id}
                onClick={() => setEndpoint(ep.id)}
                className={`py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                  endpoint === ep.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {ep.label}
              </button>
            ))}
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lenguaje
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['curl', 'javascript', 'python'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                  language === lang
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getLanguageLabel(lang)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* API Key Notice */}
      {!apiKey && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex gap-2">
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm text-yellow-800 font-medium">
                No se encontró API Key guardada
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Usa el Playground para guardar tu API Key, o reemplaza "YOUR_API_KEY_HERE" en el código.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Code Display */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            {getLanguageLabel(language)}
          </span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copiado!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copiar
              </>
            )}
          </button>
        </div>

        <SyntaxHighlighter
          language={language === 'curl' ? 'bash' : language}
          style={tomorrowNight}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: '14px',
          }}
          showLineNumbers
        >
          {getCode()}
        </SyntaxHighlighter>
      </div>

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Consejos de Uso</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Reemplaza los valores de ejemplo con tus datos reales</li>
          <li>• Asegúrate de que tu API Key tenga los permisos necesarios</li>
          <li>• Para producción, usa variables de entorno para la API Key</li>
          <li>• Verifica la URL del endpoint según tu entorno (desarrollo/producción)</li>
        </ul>
      </div>
    </div>
  );
}
