import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  videoUrl?: string;
  videoLabel?: string;
}

export default function FeaturesSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const openVideo = (videoUrl: string) => {
    // Convert YouTube watch URL to embed URL
    const videoId = videoUrl.split('v=')[1]?.split('&')[0];
    if (videoId) {
      setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}`);
      setIsVideoOpen(true);
    }
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setCurrentVideoUrl('');
  };

  // Close modal on Escape key press and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoOpen) {
        closeVideo();
      }
    };

    if (isVideoOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  const features: Feature[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Pago con Código QR",
      description:
        "Genera códigos QR únicos para cada transacción con información de pago embebida. El cliente simplemente escanea y confirma desde su app bancaria.",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Pago con notificación Push",
      description:
        "Envía solicitudes de pago directamente al celular del cliente usando su número telefónico.",
      color: "purple",
      videoUrl: "https://www.youtube.com/watch?v=I1aL_rbNIvI",
      videoLabel: "Ver ejemplo",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "100% Código Abierto",
      description:
        "Proyecto de código abierto bajo licencia Apache 2.0. Auditable, transparente y mejorable por la comunidad.",
      color: "green",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Seguridad Empresarial",
      description:
        "Autenticación con certificados digitales, validación de firmas RSA y comunicación encriptada con Banxico.",
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> =
      {
        blue: {
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200",
        },
        purple: {
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200",
        },
        green: {
          bg: "bg-green-50",
          text: "text-green-600",
          border: "border-green-200",
        },
        red: {
          bg: "bg-red-50",
          text: "text-red-600",
          border: "border-red-200",
        },
      };
    return colors[color];
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Características Principales
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const colors = getColorClasses(feature.color);
          return (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-colors"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} ${colors.text} rounded-lg mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              {feature.videoUrl && (
                <button
                  onClick={() => openVideo(feature.videoUrl!)}
                  className={`inline-flex items-center gap-2 mt-4 ${colors.text} hover:underline font-medium`}
                >
                  <Play className="w-4 h-4" />
                  {feature.videoLabel || "Ver video"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 text-white rounded-full p-2 transition-all"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container with 16:9 aspect ratio */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={currentVideoUrl}
                title="Video de ejemplo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
