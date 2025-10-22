import { Link } from 'react-router-dom';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Obtén tu API Key',
      description: 'Regístrate con Banxico y obtén tus credenciales de acceso. Configura tus certificados digitales.',
      isClickable: true,
      link: '/enrollment',
    },
    {
      number: '2',
      title: 'Genera Solicitud de Pago',
      description: 'Usa nuestra API para crear un código QR o enviar una notificación push con el monto y concepto del pago.',
      isClickable: false,
    },
    {
      number: '3',
      title: 'Recibe Confirmación',
      description: 'Cuando el cliente paga, recibes una notificación en tu webhook con los detalles de la transacción.',
      isClickable: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cómo Funciona en 3 Pasos
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const StepContent = (
            <div className="text-center">
              {/* Number circle */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-600 text-white rounded-full mb-6 text-3xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          );

          return (
            <div key={index} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200 -z-10" />
              )}

              {step.isClickable ? (
                <Link
                  to={step.link!}
                  className="block relative rounded-lg border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:border-primary-600 group"
                >
                  {/* Clickable badge */}
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ¡Haz clic aquí!
                  </div>

                  {StepContent}

                  <div className="mt-6 bg-primary-600 text-white px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 group-hover:bg-primary-700 transition-colors">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Registrarme Ahora</span>
                    <svg
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ) : (
                StepContent
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
