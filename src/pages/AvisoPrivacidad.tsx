import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import { FileText, Shield, Database, UserCheck, AlertCircle, ExternalLink } from 'lucide-react';

export function AvisoPrivacidad() {
  return (
    <Layout>
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Aviso de Privacidad</h1>
            </div>
            <p className="text-lg text-gray-600">
              Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Información Importante</h2>
                <p className="text-gray-700">
                  Este sitio web facilita el acceso a la API de CoDi® (Cobro Digital) para desarrolladores.
                  Todos los datos personales recopilados están sujetos a las regulaciones de privacidad de
                  México y son procesados con fines de KYC (Know Your Customer) conforme a las normativas
                  del Banco de México.
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1: Responsable */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Responsable del Tratamiento</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Nombre del Proyecto:</strong> CoDi API - Plataforma de Desarrollo
                </p>
                <p>
                  <strong>Operador de la Plataforma:</strong> Este sitio opera en colaboración con el sistema
                  CoDi® del Banco de México (BANXICO).
                </p>
                <p>
                  <strong>Contacto:</strong> Para consultas sobre privacidad, utiliza nuestro formulario de contacto
                  en la página principal.
                </p>
              </div>
            </section>

            {/* Section 2: Datos Recopilados */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Datos Personales Recopilados</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Recopilamos la siguiente información a través del formulario de inscripción:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Datos de Identificación:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Nombre completo (persona física o razón social)</li>
                    <li>RFC (Registro Federal de Contribuyentes)</li>
                    <li>CURP (Clave Única de Registro de Población) - personas físicas</li>
                    <li>Documentos oficiales de identificación</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Datos de Contacto:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Dirección fiscal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Datos Bancarios:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Institución financiera</li>
                    <li>CLABE interbancaria</li>
                    <li>Número de cuenta</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Documentación KYC:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Identificación oficial vigente</li>
                    <li>Comprobante de domicilio</li>
                    <li>Constancia de situación fiscal</li>
                    <li>Acta constitutiva (personas morales)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Finalidades */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Finalidades del Tratamiento</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Sus datos personales serán utilizados para las siguientes finalidades:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Finalidades Primarias (no requieren consentimiento):</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Verificación de identidad y validación de datos (KYC - Know Your Customer)</li>
                    <li>Procesamiento de solicitudes de acceso a la API de CoDi®</li>
                    <li>Cumplimiento de obligaciones regulatorias del Banco de México</li>
                    <li>Prevención de lavado de dinero y financiamiento al terrorismo</li>
                    <li>Administración y operación de la plataforma CoDi®</li>
                    <li>Validación de cuentas bancarias para transferencias electrónicas</li>
                    <li>Generación de estadísticas (datos disociados, sin identificación personal)</li>
                    <li>Cumplimiento de requerimientos de autoridades competentes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Finalidades Secundarias:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Envío de notificaciones sobre el estado de su solicitud</li>
                    <li>Comunicación de actualizaciones de la plataforma y documentación</li>
                    <li>Soporte técnico y atención a consultas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Compartir Datos */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Transferencia de Datos</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Sus datos personales pueden ser compartidos con las siguientes entidades,
                sin requerir su consentimiento adicional:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Banco de México (BANXICO):</strong> Para operación y supervisión del sistema CoDi®</li>
                <li><strong>Instituciones Financieras:</strong> Su banco para validación de cuentas y procesamiento de pagos</li>
                <li><strong>Autoridades Financieras:</strong> SHCP, CNBV, CONDUSEF, según sea requerido por ley</li>
                <li><strong>Autoridades Judiciales:</strong> Fiscalía General de la República y tribunales competentes</li>
                <li><strong>Entidades de Prevención de Lavado de Dinero:</strong> Conforme a obligaciones legales</li>
              </ul>

              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="text-sm text-gray-700">
                  Estas transferencias están fundamentadas en el Artículo 70 de la Ley General de Protección
                  de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO).
                </p>
              </div>
            </section>

            {/* Section 5: Derechos ARCO */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Derechos ARCO</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Usted tiene derecho a:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando considere que no se están usando adecuadamente</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded">
                <p className="text-gray-700 mb-2">
                  <strong>Para ejercer sus derechos ARCO:</strong>
                </p>
                <p className="text-gray-700">
                  Envíe una solicitud a través de nuestro formulario de contacto en la página principal,
                  incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                  <li>Nombre completo y correo electrónico</li>
                  <li>Descripción clara del derecho que desea ejercer</li>
                  <li>Documentos que acrediten su identidad</li>
                  <li>Descripción de los datos personales sobre los que busca ejercer el derecho</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  Tiempo de respuesta: 20 días hábiles a partir de la recepción de la solicitud
                </p>
              </div>
            </section>

            {/* Section 6: Seguridad */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Medidas de Seguridad</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger
                sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Acceso restringido solo a personal autorizado</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Respaldos periódicos de información</li>
                <li>Protocolos de respuesta ante incidentes de seguridad</li>
              </ul>
            </section>

            {/* Section 7: Cookies */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Uso de Cookies y Tecnologías Similares</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Este sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de usuario:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                <li><strong>Cookies de sesión:</strong> Para mantener su sesión activa</li>
                <li><strong>Almacenamiento local:</strong> Para guardar preferencias de usuario (como su API key)</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar
                la funcionalidad del sitio.
              </p>
            </section>

            {/* Section 8: Banxico References */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Avisos de Privacidad del Banco de México</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Para información detallada sobre el tratamiento de datos personales en el sistema CoDi®,
                consulte los avisos de privacidad oficiales del Banco de México:
              </p>

              <div className="space-y-3">
                <a
                  href="/aviso-privacidad/AvisoPrivacidadBanxico.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <FileText className="w-5 h-5" />
                  <span>Aviso de Privacidad Integral CoDi® - Banco de México</span>
                </a>

                <a
                  href="/aviso-privacidad/AvisoPrivacidadSimplificadoBanxico.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <FileText className="w-5 h-5" />
                  <span>Aviso de Privacidad Simplificado - Banco de México</span>
                </a>

                <a
                  href="/aviso-privacidad/AvisoPrivacidadPlataformaCodi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <FileText className="w-5 h-5" />
                  <span>Términos y Condiciones Plataforma CoDi®</span>
                </a>

                <a
                  href="https://www.banxico.org.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Sitio Oficial del Banco de México</span>
                </a>
              </div>
            </section>

            {/* Section 9: Cambios */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">9. Cambios al Aviso de Privacidad</h2>
              </div>

              <p className="text-gray-700">
                Este aviso de privacidad puede ser modificado para reflejar cambios en nuestras prácticas
                de información o cambios en la legislación aplicable. Las modificaciones se publicarán en
                esta página con la fecha de última actualización. Le recomendamos revisar periódicamente
                este aviso para estar informado sobre cómo protegemos su información.
              </p>
            </section>

            {/* Section 10: Marco Legal */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">10. Fundamento Legal</h2>
              </div>

              <p className="text-gray-700 mb-4">
                El tratamiento de sus datos personales se fundamenta en:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO)</li>
                <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</li>
                <li>Ley del Banco de México</li>
                <li>Ley de Sistemas de Pagos</li>
                <li>Ley de Instituciones de Crédito</li>
                <li>Disposiciones de carácter general en materia de prevención de lavado de dinero</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre privacidad?</h2>
              <p className="mb-6">
                Si tienes preguntas sobre este aviso de privacidad o sobre el manejo de tus datos personales,
                no dudes en contactarnos.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ir a Contacto
                <ExternalLink className="w-5 h-5" />
              </a>
            </section>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
