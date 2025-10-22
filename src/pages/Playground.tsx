import { useState } from 'react';
import QRForm from '../components/forms/QRForm';
import PushForm from '../components/forms/PushForm';
import ConsultaForm from '../components/forms/ConsultaForm';

export default function Playground() {
  const [activeTab, setActiveTab] = useState<'qr' | 'push' | 'consulta'>('qr');

  const tabs = [
    { id: 'qr', name: 'Generar QR', description: 'Código QR para pagos' },
    { id: 'push', name: 'Push Notification', description: 'Enviar solicitud al celular' },
    { id: 'consulta', name: 'Consultar Estado', description: 'Verificar pago' },
  ] as const;

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
