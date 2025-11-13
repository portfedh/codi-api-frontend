import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas Ayuda?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            ¿Quieres ayuda para implementar la API en tu sitio web o negocio?
            También podemos ayudarte a configurar todo. Estaremos encantados de
            asistirte.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contacto por Email
                </h3>
                <p className="text-gray-600 mb-4">
                  Si necesitas ayuda, tienes alguna pregunta, sugerencia o
                  problema, contáctanos.
                </p>
                <a
                  href="mailto:contacto@bite-size.mx"
                  className="inline-flex items-center px-4 md:px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    contacto@bite-size.mx
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Tiempo de respuesta estimado: 24-48 horas hábiles
          </div>
        </div>
      </div>
    </section>
  );
}
