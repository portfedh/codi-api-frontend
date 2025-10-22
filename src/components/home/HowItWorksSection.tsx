export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Obtén tu API Key',
      description: 'Regístrate con Banxico y obtén tus credenciales de acceso. Configura tus certificados digitales.',
    },
    {
      number: '2',
      title: 'Genera Solicitud de Pago',
      description: 'Usa nuestra API para crear un código QR o enviar una notificación push con el monto y concepto del pago.',
    },
    {
      number: '3',
      title: 'Recibe Confirmación',
      description: 'Cuando el cliente paga, recibes una notificación en tu webhook con los detalles de la transacción.',
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
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line (hidden on last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200 -z-10" />
            )}

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
          </div>
        ))}
      </div>
    </section>
  );
}
