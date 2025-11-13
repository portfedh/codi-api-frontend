import Container from '../components/layout/Container';

export default function FairUsePolicy() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Política de Uso Justo - CoDi API
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acerca de Bite Size SA de CV</h2>
              <p className="text-gray-700 mb-4">
                Bite Size SA de CV es una empresa mexicana, legalmente constituida y existente conforme a la legislación mexicana,
                que opera la plataforma CoDi API accesible a través de su sitio web para la prestación de servicios de generación
                de códigos QR y notificaciones push para pagos digitales CoDi®.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definiciones</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>CoDi API (La Plataforma):</strong> Herramienta en línea que ofrece servicios de gestión y generación de solicitudes de pago CoDi®.</li>
                <li><strong>Usuario (El Cliente):</strong> Persona física o moral que voluntariamente se registra en la plataforma para contratar los servicios ofrecidos.</li>
                <li><strong>Folios:</strong> Unidades de transacción que permiten generar códigos QR o notificaciones push de pago.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Planes y Precios</h2>
              <p className="text-gray-700 mb-4">
                CoDi API ofrece sus servicios a través de esquemas de contratación de paquetes con número de folios determinados.
                Los planes disponibles son:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Gratis:</strong> $0 MXN - 15 folios para desarrollo y pruebas</li>
                <li><strong>Básico:</strong> $249 MXN + IVA - 100 folios</li>
                <li><strong>Estándar:</strong> $999 MXN + IVA - 500 folios</li>
                <li><strong>Premium:</strong> $1,499 MXN + IVA - 1,000 folios</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Todos los folios adquiridos <strong>no caducan</strong> y pueden ser utilizados tanto para generar códigos QR
                como notificaciones push de pago.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso Justo de la Plataforma</h2>
              <p className="text-gray-700 mb-4">
                El Usuario acepta utilizar La Plataforma de manera responsable y conforme a las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Los folios adquiridos son personales e intransferibles</li>
                <li>No se permite el uso compartido de cuentas entre diferentes usuarios</li>
                <li>No se permite la reventa de folios o servicios de la plataforma</li>
                <li>El uso debe ser conforme a las leyes fiscales y mercantiles aplicables</li>
                <li>No se permite el uso automatizado o masivo que pueda afectar el rendimiento de la plataforma</li>
              </ul>
              <p className="text-gray-700 mb-2">
                <strong>Nota sobre el endpoint de Consulta de Estado de Pago:</strong>
              </p>
              <p className="text-gray-700">
                Aunque el endpoint de "Consultar Estado de Pago" no está sujeto a consumo de folios, está sujeto a políticas
                de uso justo. Bite Size SA de CV se reserva el derecho de implementar limitaciones de tasa (rate limiting)
                o modificar las condiciones de acceso a este endpoint en cualquier momento para garantizar la disponibilidad
                y el rendimiento del servicio para todos los usuarios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pagos y Formas de Pago</h2>
              <p className="text-gray-700 mb-4">
                Los pagos deberán realizarse al momento de contratar o renovar el servicio mediante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Tarjeta de crédito o débito</li>
                <li>Transferencia bancaria</li>
                <li>Pagos con CoDi® (código QR o notificación push)</li>
              </ul>
              <p className="text-gray-700">
                Los pagos se procesan a través de procesadores de pago de terceros autorizados. Bite Size SA de CV no almacena
                información de tarjetas de crédito o débito. Para pagos con CoDi®, puede generar un código QR o recibir una
                notificación push directamente desde nuestra plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacidad y Seguridad</h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de los datos proporcionados por los usuarios está sujeto al Aviso de Privacidad disponible en
                nuestro sitio web. Bite Size SA de CV implementa medidas de seguridad para proteger la información de los usuarios,
                incluyendo cifrado de datos sensibles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 mb-4">El Usuario se compromete a:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Mantener la confidencialidad de su cuenta y contraseña</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Utilizar la plataforma conforme a la legislación aplicable</li>
                <li>No realizar actividades que puedan dañar o interferir con la plataforma</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                CoDi API es una herramienta que facilita la gestión de pagos digitales. Bite Size SA de CV no tiene control
                sobre las transacciones realizadas por los usuarios ni sobre los datos contenidos en las solicitudes de pago
                generadas. El Usuario exime expresamente a Bite Size SA de CV de cualquier responsabilidad por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Incumplimiento de disposiciones legales aplicables</li>
                <li>Daños derivados de la actividad comercial del usuario</li>
                <li>Fallas en sistemas de terceros (bancos, procesadores de pago, etc.)</li>
                <li>Problemas técnicos o suspensiones temporales del servicio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Suspensión y Cancelación</h2>
              <p className="text-gray-700 mb-4">
                Bite Size SA de CV se reserva el derecho de suspender o cancelar cuentas de usuarios que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Incumplan estos términos y condiciones</li>
                <li>Realicen actividades fraudulentas o ilegales</li>
                <li>Afecten el funcionamiento de la plataforma</li>
                <li>Permanezcan inactivos por períodos prolongados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Bite Size SA de CV se reserva el derecho de modificar esta política en cualquier momento. Las modificaciones
                serán notificadas a los usuarios por correo electrónico o mediante publicación en el sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Jurisdicción</h2>
              <p className="text-gray-700 mb-4">
                Cualquier controversia derivada de estos términos será resuelta conforme a las leyes de México.
                Las partes se someten a la jurisdicción de los tribunales competentes en Ciudad de México,
                renunciando a cualquier otra jurisdicción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
              <p className="text-gray-700">
                Para cualquier duda o aclaración sobre esta política de uso justo, puede contactarnos en:{' '}
                <a href="mailto:contacto@bite-size.mx" className="text-blue-600 hover:text-blue-800 underline">
                  contacto@bite-size.mx
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
