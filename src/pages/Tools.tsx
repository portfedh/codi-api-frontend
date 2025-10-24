import { useState } from 'react';
import InstitutionLookup from '../components/tools/InstitutionLookup';
import CodeGenerator from '../components/tools/CodeGenerator';

export default function Tools() {
  const [activeTab, setActiveTab] = useState<'institutions' | 'code-generator' | 'uptime'>('institutions');

  const tabs = [
    { id: 'institutions', name: 'Búsqueda de Instituciones', description: 'Códigos bancarios' },
    { id: 'code-generator', name: 'Generador de Código', description: 'Ejemplos listos para usar' },
    { id: 'uptime', name: 'Estado del Servicio', description: 'Monitoreo en tiempo real' },
  ] as const;

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Herramientas de Desarrollo
        </h1>
        <p className="text-lg text-gray-600">
          Recursos útiles para facilitar tu integración con la API CoDi
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{tab.name}</span>
                  <span className="text-xs text-gray-500">{tab.description}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {activeTab === 'institutions' && <InstitutionLookup />}
        {activeTab === 'code-generator' && <CodeGenerator />}
        {activeTab === 'uptime' && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">
              Consulta el estado y disponibilidad del servicio
            </p>
            <a
              href="https://stats.uptimerobot.com/4y1Ti1p7BH/801652540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Ver Estado del Servicio
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
