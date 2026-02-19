import { useState } from 'react';
import GettingStarted from '../components/docs/GettingStarted';
import ApiReference from '../components/docs/ApiReference';
import ErrorCodes from '../components/docs/ErrorCodes';
import McpServer from '../components/docs/McpServer';

type DocSection = 'getting-started' | 'api-reference' | 'error-codes' | 'mcp-server';

export default function Docs() {
  const [activeSection, setActiveSection] = useState<DocSection>('getting-started');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(() =>
    localStorage.getItem('mcp-banner-dismissed') === 'true'
  );

  const dismissBanner = () => {
    setBannerDismissed(true);
    localStorage.setItem('mcp-banner-dismissed', 'true');
  };


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
        { id: 'webhook-notifications', name: 'Notificaciones Webhook' },
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
    {
      id: 'mcp-server' as const,
      name: 'Servidor MCP',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      subsections: [
        { id: 'mcp-server',      name: 'Introducción' },
        { id: 'mcp-instalacion', name: 'Instalación Rápida' },
        { id: 'mcp-claude-code', name: 'Opciones de Alcance' },
        { id: 'mcp-recursos',   name: 'Recursos Disponibles' },
        { id: 'mcp-prompts',    name: 'Prompts Disponibles' },
        { id: 'mcp-ejemplos',   name: 'Qué Puedes Preguntar' },
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
      case 'mcp-server':
        return <McpServer />;
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
          Todo lo que necesitas para integrar la API CoDi<sup className="text-[0.5em] ml-0.5">®</sup> en tu aplicación
        </p>
      </div>

      {/* MCP Server banner */}
      {!bannerDismissed && activeSection !== 'mcp-server' && (
        <div className="mb-6 flex items-start gap-4 p-4 bg-purple-50 border border-purple-200 rounded-xl">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold bg-purple-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                Nuevo
              </span>
              <p className="text-sm font-semibold text-purple-900">
                Servidor MCP para IA
              </p>
            </div>
            <p className="text-sm text-purple-700">
              Integra la API CoDi<sup className="text-[0.6em]">®</sup> directamente en Claude Code, Cursor, Windsurf y más — sin credenciales, sin conexión extra.
            </p>
          </div>
          <button
            onClick={dismissBanner}
            className="flex-shrink-0 text-purple-400 hover:text-purple-600 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

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
              {sections.map((section) => {
                const isMcp = section.id === 'mcp-server';
                const isActive = activeSection === section.id;
                return (
                  <div key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive && isMcp
                          ? 'bg-purple-50 text-purple-700'
                          : isActive
                          ? 'bg-primary-50 text-primary-700'
                          : isMcp
                          ? 'text-purple-700 hover:bg-purple-50'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.icon}
                      <span className="flex-1 text-left">{section.name}</span>
                      {isMcp && (
                        <span className="text-[10px] font-semibold bg-purple-600 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                          Nuevo
                        </span>
                      )}
                    </button>
                    {isActive && (
                      <div className="mt-1 ml-8 space-y-1">
                        {section.subsections.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => handleSubsectionClick(subsection.id)}
                            className={`block w-full text-left px-3 py-1.5 text-sm transition-colors ${
                              isMcp
                                ? 'text-gray-600 hover:text-purple-600'
                                : 'text-gray-600 hover:text-primary-600'
                            }`}
                          >
                            {subsection.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
                  href="https://api.bite-size.mx/api-docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  → Especificación Swagger ↗
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
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-white h-full w-64 sm:w-72 p-6 overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Navegación</h3>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-1">
                {sections.map((section) => {
                  const isMcp = section.id === 'mcp-server';
                  const isActive = activeSection === section.id;
                  return (
                    <div key={section.id}>
                      <button
                        onClick={() => {
                          setActiveSection(section.id);
                          if (section.subsections.length > 0) {
                            handleSubsectionClick(section.subsections[0].id);
                          }
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive && isMcp
                            ? 'bg-purple-50 text-purple-700'
                            : isActive
                            ? 'bg-primary-50 text-primary-700'
                            : isMcp
                            ? 'text-purple-700 hover:bg-purple-50'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {section.icon}
                        <span className="flex-1 text-left">{section.name}</span>
                        {isMcp && (
                          <span className="text-[10px] font-semibold bg-purple-600 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                            Nuevo
                          </span>
                        )}
                      </button>
                      {isActive && (
                        <div className="mt-1 ml-8 space-y-1">
                          {section.subsections.map((subsection) => (
                            <button
                              key={subsection.id}
                              onClick={() => handleSubsectionClick(subsection.id)}
                              className={`block w-full text-left px-3 py-1.5 text-sm transition-colors ${
                                isMcp
                                  ? 'text-gray-600 hover:text-purple-600'
                                  : 'text-gray-600 hover:text-primary-600'
                              }`}
                            >
                              {subsection.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Quick Links - Mobile */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Enlaces Rápidos
                </h4>
                <div className="space-y-2">
                  <a
                    href="/playground"
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    → API Playground
                  </a>
                  <a
                    href="/tools"
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    → Herramientas
                  </a>
                  <a
                    href="https://api.bite-size.mx/api-docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    → Especificación Swagger ↗
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
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
            {renderContent()}
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-gray-200">
            <div className="flex-1">
              {activeSection !== 'getting-started' && (
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">Anterior</span>
                  <span className="sm:hidden">Página Anterior</span>
                </button>
              )}
            </div>
            <div className="flex-1 flex justify-end">
              {activeSection !== sections[sections.length - 1].id && (
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <span className="sm:hidden">Página Siguiente</span>
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
