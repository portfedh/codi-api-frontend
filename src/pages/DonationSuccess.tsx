import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Home, Github } from 'lucide-react';

export default function DonationSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-500" />
        </div>

        {/* Thank You Message */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            ¡Gracias por tu Apoyo!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 px-2">
            Tu donación ha sido procesada exitosamente.
          </p>
          <p className="text-sm sm:text-base text-gray-500 px-2">
            Tu contribución nos ayuda a mantener y mejorar el proyecto CoDi API,
            haciéndolo accesible para toda la comunidad de desarrolladores en México.
          </p>
        </div>

        {/* Session ID (optional, for reference) */}
        {sessionId && (
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">ID de Transacción:</p>
            <p className="text-xs font-mono text-gray-800 break-all">
              {sessionId}
            </p>
          </div>
        )}

        {/* What's Next Section */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-lg text-left">
          <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">
            ¿Qué sigue?
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
              <span>Recibirás un comprobante de pago por correo electrónico de Stripe.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
              <span>Tu donación se destinará al desarrollo, mantenimiento y hosting del proyecto.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
              <span>Puedes seguir el progreso del proyecto en nuestro repositorio de GitHub.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Volver al Inicio
            </Link>

            <a
              href={import.meta.env.VITE_GITHUB_REPO || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-sm sm:text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver en GitHub
            </a>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 mb-3">Explora el proyecto:</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <Link
                to="/playground"
                className="text-xs sm:text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Probar el API
              </Link>
              <Link
                to="/docs"
                className="text-xs sm:text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Documentación
              </Link>
              <Link
                to="/enrollment"
                className="text-xs sm:text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Solicitar Acceso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
