import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Página no encontrada
            </h2>
            <p className="text-lg text-gray-600">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Volver al inicio
          </Link>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Enlaces útiles:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/playground"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                API Playground
              </Link>
              <Link
                to="/docs"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Documentación
              </Link>
              <Link
                to="/tools"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Herramientas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
