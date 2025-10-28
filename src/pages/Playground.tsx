import { useState } from 'react';
import { Check, TestTube2 } from 'lucide-react';
import QRForm from '../components/forms/QRForm';
import PushForm from '../components/forms/PushForm';
import ConsultaForm from '../components/forms/ConsultaForm';
import { useApiKey } from '../hooks/useApiKey';

// Real API key for testing and donations (Bite Size S.A. de C.V.)
const BITE_SIZE_API_KEY =
  'ee9b8605ffaa6682d8f6b8077d0ec485f433a06345409a99f6b99335af44fb9cedddec8ff9cef8edc5417cf8f9a691e976fab7a44fc23f63ec659a31daacc8b6';

export default function Playground() {
  const [activeTab, setActiveTab] = useState<'qr' | 'push' | 'consulta'>('qr');
  const { apiKey, saveApiKey } = useApiKey();
  const isUsingBiteSizeKey = apiKey === BITE_SIZE_API_KEY;

  const tabs = [
    { id: 'qr', name: 'Generar QR', description: 'Código QR para pagos' },
    { id: 'push', name: 'Push Notification', description: 'Enviar solicitud al celular' },
    { id: 'consulta', name: 'Consultar Estado', description: 'Verificar pago' },
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
          Prueba los endpoints de la API CoDi en tiempo real
        </p>
      </div>

      {/* Bite Size Testing Banner */}
      {!isUsingBiteSizeKey ? (
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <TestTube2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                ¿No tienes API Key? ¡Prueba con la nuestra!
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Usa la clave API real de <strong>Bite Size S.A. de C.V.</strong> para
                probar el API con pagos reales. Puedes hacer pruebas desde <strong>$1 MXN</strong> hasta
                cualquier monto. Si deseas, también puedes usarla para{' '}
                <strong>donar al proyecto</strong>.
              </p>
              <button
                onClick={handleLoadBiteSizeKey}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
              >
                <TestTube2 className="w-4 h-4" />
                Cargar Clave Bite Size
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                <strong className="text-green-900">Usando clave Bite Size</strong> —
                Puedes hacer pruebas desde $1 MXN o donar al proyecto con el monto que desees.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-4 md:space-x-8 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-2 md:px-1 border-b-2 font-medium text-sm transition-colors flex-shrink-0`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{tab.name}</span>
                  <span className="text-xs text-gray-500 hidden sm:inline">{tab.description}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {activeTab === 'qr' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Generar Código QR
            </h2>
            <p className="text-gray-600 mb-6">
              Crea un código QR para solicitar un pago. El cliente podrá escanearlo desde su app bancaria.
            </p>
            <QRForm />
          </div>
        )}

        {activeTab === 'push' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Enviar Push Notification
            </h2>
            <p className="text-gray-600 mb-6">
              Envía una solicitud de pago directamente al celular del cliente. Recibirá una notificación en su app bancaria.
            </p>
            <PushForm />
          </div>
        )}

        {activeTab === 'consulta' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Consultar Estado de Pago
            </h2>
            <p className="text-gray-600 mb-6">
              Verifica el estado de una operación CoDi usando el folio. Obtén detalles completos de la transacción.
            </p>
            <ConsultaForm />
          </div>
        )}
      </div>
    </div>
  );
}
