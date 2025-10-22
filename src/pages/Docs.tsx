import { useState } from 'react';
import GettingStarted from '../components/docs/GettingStarted';
import ApiReference from '../components/docs/ApiReference';
import ErrorCodes from '../components/docs/ErrorCodes';

type DocSection = 'getting-started' | 'api-reference' | 'error-codes';

export default function Docs() {
  const [activeSection, setActiveSection] = useState<DocSection>('getting-started');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    {
      id: 'getting-started' as const,
      name: 'Primeros Pasos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      subsections: [
        { id: 'introduccion', name: 'Introducción' },
        { id: 'autenticacion', name: 'Autenticación' },
        { id: 'primer-request', name: 'Tu Primer Request' },
        { id: 'proximos-pasos', name: 'Próximos Pasos' },
      ]
    },
    {
      id: 'api-reference' as const,
      name: 'Referencia de API',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      subsections: [
        { id: 'api-reference', name: 'Visión General' },
        { id: 'endpoint-qr', name: 'POST /v2/codi/qr' },
        { id: 'endpoint-push', name: 'POST /v2/codi/push' },
        { id: 'endpoint-consulta', name: 'POST /v2/codi/consulta' },
        { id: 'endpoint-health', name: 'GET /v2/health' },
      ]
    },
    {
      id: 'error-codes' as const,
      name: 'Códigos de Error',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      subsections: [
        { id: 'error-codes', name: 'Visión General' },
        { id: 'http-status-codes', name: 'Códigos HTTP' },
        { id: 'ejemplos-errores', name: 'Ejemplos' },
        { id: 'manejo-errores', name: 'Buenas Prácticas' },
      ]
    },
  ];

  const handleSubsectionClick = (subsectionId: string) => {
    const element = document.getElementById(subsectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return <GettingStarted />;
      case 'api-reference':
        return <ApiReference />;
      case 'error-codes':
        return <ErrorCodes />;
      default:
        return <GettingStarted />;
    }
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Documentación
        </h1>
        <p className="text-lg text-gray-600">
          Todo lo que necesitas para integrar la API CoDi en tu aplicación
        </p>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <span className="font-medium">
            {sections.find(s => s.id === activeSection)?.name}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Layout */}
      <div className="flex gap-8">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-8">
            <nav className="space-y-1">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section.icon}
                    {section.name}
                  </button>
                  {activeSection === section.id && (
                    <div className="mt-1 ml-8 space-y-1">
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          onClick={() => handleSubsectionClick(subsection.id)}
                          className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {subsection.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Enlaces Rápidos
              </h4>
              <div className="space-y-2">
                <a
                  href="/playground"
                  className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  → API Playground
                </a>
                <a
                  href="/tools"
                  className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  → Herramientas
                </a>
                <a
                  href={import.meta.env.VITE_GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  → GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Sidebar - Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-white h-full w-64 p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Navegación</h3>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => {
                        setActiveSection(section.id);
                        if (section.subsections.length > 0) {
                          handleSubsectionClick(section.subsections[0].id);
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.icon}
                      {section.name}
                    </button>
                    {activeSection === section.id && (
                      <div className="mt-1 ml-8 space-y-1">
                        {section.subsections.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => handleSubsectionClick(subsection.id)}
                            className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {subsection.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
            {renderContent()}
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 flex items-center justify-between pt-8 border-t border-gray-200">
            <div>
              {activeSection !== 'getting-started' && (
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>
              )}
            </div>
            <div>
              {activeSection !== 'error-codes' && (
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Siguiente
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
