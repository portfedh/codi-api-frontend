import { Link } from 'react-router-dom';
import { XCircle, Home, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import SponsorModal from '../components/common/SponsorModal';

export default function DonationCancel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl w-full text-center">
        {/* Cancel Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <XCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-500" />
        </div>

        {/* Message */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Pago Cancelado
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 px-2">
            Tu donación no se ha procesado.
          </p>
          <p className="text-sm sm:text-base text-gray-500 px-2">
            No te preocupes, no se ha realizado ningún cargo a tu tarjeta.
            Si cambiaste de opinión o tuviste algún problema, puedes intentar nuevamente.
          </p>
        </div>

        {/* Information Box */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-left">
          <h2 className="text-base sm:text-lg font-semibold text-yellow-900 mb-3">
            Otras formas de apoyar
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-yellow-800">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-0.5 flex-shrink-0">•</span>
              <span><strong>CoDi (QR):</strong> Paga con tu app bancaria usando un código QR.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-0.5 flex-shrink-0">•</span>
              <span><strong>SPEI:</strong> Transferencia bancaria directa.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-0.5 flex-shrink-0">•</span>
              <span><strong>Contribuir al código:</strong> Comparte tu experiencia en GitHub.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Intentar Nuevamente
            </button>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-sm sm:text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Volver al Inicio
            </Link>
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

      {/* Sponsor Modal */}
      <SponsorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
