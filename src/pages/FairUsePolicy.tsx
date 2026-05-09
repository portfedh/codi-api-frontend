import { Link } from 'react-router-dom';
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
                <li><strong>CoDi API (La Plataforma):</strong> Herramienta de código abierto que ofrece servicios de gestión y generación de solicitudes de pago CoDi®.</li>
                <li><strong>Usuario:</strong> Persona física o moral que utiliza la plataforma, ya sea a través del servidor compartido o mediante auto-hospedaje.</li>
                <li><strong>Servidor Compartido:</strong> Instancia gratuita de la plataforma operada y mantenida por Bite Size SA de CV, accesible para la comunidad sujeto a esta política de uso justo.</li>
                <li><strong>Auto-hospedaje (Self-hosting):</strong> Modalidad en la que el Usuario despliega y opera su propia instancia de la plataforma a partir del código fuente público.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Modelo de Servicio</h2>
              <p className="text-gray-700 mb-4">
                CoDi API es una plataforma de <strong>código abierto y de uso gratuito</strong>. Bite Size SA de CV no cobra
                por el uso de la plataforma ni vende folios, paquetes ni suscripciones. La plataforma se ofrece bajo dos modalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Servidor compartido gratuito:</strong> Operado por Bite Size SA de CV como una facilidad para la comunidad,
                  sujeto a esta política de uso justo.
                </li>
                <li>
                  <strong>Auto-hospedaje:</strong> El Usuario puede descargar el código fuente desde el repositorio público y desplegar
                  su propia instancia. Esta modalidad es la <strong>recomendada para uso en producción, alto volumen, o cargas
                  comerciales sostenidas</strong>.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso Justo del Servidor Compartido</h2>
              <p className="text-gray-700 mb-4">
                El servidor compartido está pensado para desarrollo, pruebas, integración y casos de uso de bajo a moderado volumen.
                Para preservar su disponibilidad y rendimiento para toda la comunidad, el Usuario acepta utilizarlo de manera responsable
                conforme a las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  No se establecen cuotas numéricas fijas. Bite Size SA de CV se reserva el derecho de aplicar limitaciones de tasa
                  (rate limiting), suspender accesos o ajustar las condiciones del servicio cuando un patrón de uso afecte la
                  disponibilidad o el rendimiento para el resto de la comunidad.
                </li>
                <li>No se permite el uso automatizado masivo orientado a saturar el servicio.</li>
                <li>No se permite la reventa o sublicenciamiento del acceso al servidor compartido.</li>
                <li>No se permite compartir credenciales entre múltiples organizaciones o terceros no autorizados.</li>
                <li>No se permite ninguna actividad que comprometa la estabilidad, seguridad o integridad del servidor.</li>
                <li>El uso debe ser conforme a las leyes fiscales y mercantiles aplicables.</li>
                <li>
                  Para uso en <strong>producción, alto volumen o cargas comerciales sostenidas</strong>, se recomienda
                  auto-hospedar la plataforma utilizando el código fuente disponible en el repositorio público.
                </li>
              </ul>
              <p className="text-gray-700 mb-2">
                <strong>Nota sobre el endpoint de Consulta de Estado de Pago:</strong>
              </p>
              <p className="text-gray-700">
                El endpoint de "Consultar Estado de Pago" está sujeto a esta política de uso justo. Bite Size SA de CV se reserva
                el derecho de implementar limitaciones de tasa (rate limiting) o modificar las condiciones de acceso a este endpoint
                en cualquier momento para garantizar la disponibilidad y el rendimiento del servicio para todos los usuarios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sin Garantías / Sin SLA</h2>
              <p className="text-gray-700 mb-4">
                El servidor compartido se ofrece <strong>"tal cual" (as-is)</strong>, de forma gratuita y{' '}
                <strong>sin garantía alguna</strong> de disponibilidad, continuidad, rendimiento, exactitud, ni adecuación para un
                propósito particular. El Usuario reconoce y acepta que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Bite Size SA de CV puede modificar, degradar, suspender o discontinuar el servidor compartido
                  <strong> en cualquier momento, con o sin aviso previo</strong>.
                </li>
                <li>No existe ningún acuerdo de nivel de servicio (SLA) asociado al servidor compartido.</li>
                <li>
                  Bite Size SA de CV no es responsable por pérdidas económicas, operativas o de cualquier otra naturaleza derivadas
                  de la indisponibilidad, latencia, errores o discontinuación del servidor compartido.
                </li>
                <li>
                  Para Usuarios que requieran garantías de disponibilidad, control sobre la infraestructura, o cumplimiento de SLAs propios,
                  la modalidad recomendada es el <strong>auto-hospedaje</strong>.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacidad y Seguridad</h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de los datos proporcionados por los usuarios al servidor compartido está sujeto al{' '}
                <Link to="/aviso-privacidad" className="text-blue-600 hover:text-blue-800 underline">
                  Aviso de Privacidad
                </Link>{' '}
                disponible en nuestro sitio web. Bite Size SA de CV implementa medidas de seguridad para proteger la información de los
                usuarios, incluyendo cifrado de datos sensibles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 mb-4">El Usuario se compromete a:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información veraz y actualizada cuando sea requerida.</li>
                <li>Mantener la confidencialidad de las credenciales de acceso (API keys) que le sean asignadas.</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de sus credenciales.</li>
                <li>Utilizar la plataforma conforme a la legislación aplicable.</li>
                <li>No realizar actividades que puedan dañar, interferir o saturar la plataforma o el servidor compartido.</li>
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
                <li>Incumplimiento de disposiciones legales aplicables por parte del Usuario.</li>
                <li>Daños derivados de la actividad comercial del Usuario.</li>
                <li>Fallas en sistemas de terceros (bancos, procesadores de pago, etc.).</li>
                <li>Problemas técnicos, indisponibilidad, pérdida de datos o suspensiones del servidor compartido.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Suspensión y Cancelación</h2>
              <p className="text-gray-700 mb-4">
                Bite Size SA de CV se reserva el derecho de suspender, limitar o revocar el acceso al servidor compartido a usuarios que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Incumplan esta política de uso justo.</li>
                <li>Realicen actividades fraudulentas o ilegales.</li>
                <li>Afecten el funcionamiento, la estabilidad o el rendimiento de la plataforma.</li>
                <li>Permanezcan inactivos por períodos prolongados.</li>
              </ul>
              <p className="text-gray-700">
                La revocación del acceso al servidor compartido <strong>no afecta</strong> el derecho del Usuario a continuar utilizando
                el código fuente abierto de la plataforma mediante auto-hospedaje, conforme a los términos de la licencia open source aplicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Bite Size SA de CV se reserva el derecho de modificar esta política en cualquier momento. Las modificaciones
                serán notificadas mediante publicación en el sitio web.
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
