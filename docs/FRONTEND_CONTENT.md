# Contenido del Frontend - CoDi API

Este documento contiene todo el contenido de texto e imágenes necesarias para el frontend del proyecto CoDi API. Todo el contenido está en español.

---

## 🎨 Imágenes y Diagramas Necesarios

### Imágenes de Marca
1. **logo-codi-api.svg** - Logo principal del proyecto
   - Formato: SVG (escalable)
   - Versiones: Color, blanco, negro
   - Tamaño recomendado: 200x60px

2. **logo-icon.svg** - Ícono/isotipo para favicon
   - Formato: SVG y PNG (para favicon)
   - Tamaños PNG: 16x16, 32x32, 64x64, 128x128, 256x256

### Diagramas Técnicos

3. **flujo-pago-qr.svg** - Diagrama de flujo de pago con QR
   - Usuario escanea QR → App bancaria → Banxico → Confirmación → Webhook
   - Estilo: Limpio, profesional, colores coherentes

4. **flujo-pago-push.svg** - Diagrama de flujo de pago con Push
   - API envía push → Notificación móvil → Usuario confirma → Banxico → Webhook
   - Estilo: Similar al anterior para consistencia

5. **arquitectura-sistema.svg** - Diagrama de arquitectura del sistema
   - Cliente → API CoDi → Banxico
   - Supabase (base de datos)
   - Mostrar autenticación con certificados
   - Mostrar flujo de logs

6. **modelo-seguridad.svg** - Diagrama de seguridad
   - API Key validation
   - Certificate verification
   - Digital signatures
   - HTTPS/TLS

7. **diagrama-base-datos.png** - Esquema de base de datos
   - Usar el existente en `/database/database_schema.png`
   - O crear versión simplificada si es muy complejo

### Imágenes de UI/UX

8. **hero-illustration.svg** - Ilustración para hero section
   - Concepto: Pagos digitales, QR codes, México
   - Estilo: Moderno, profesional, sin saturar
   - Opcional: Puede ser abstracto o iconográfico

9. **feature-qr.svg** - Ícono de feature QR
   - Representación de QR code con checkmark
   - Tamaño: 64x64px

10. **feature-push.svg** - Ícono de feature Push
    - Representación de notificación móvil
    - Tamaño: 64x64px

11. **feature-api.svg** - Ícono de feature API
    - Representación de API/integración
    - Tamaño: 64x64px

12. **feature-secure.svg** - Ícono de seguridad
    - Candado o escudo
    - Tamaño: 64x64px

### Imágenes de Ejemplo

13. **ejemplo-qr-resultado.png** - Screenshot de QR generado
    - Ejemplo de respuesta exitosa con QR
    - Usar para documentación

14. **ejemplo-json-request.png** - Ejemplo de request JSON
    - Formato bonito, syntax highlighting
    - Usar para documentación

15. **ejemplo-json-response.png** - Ejemplo de response JSON
    - Formato bonito, syntax highlighting
    - Usar para documentación

### Íconos de Estado

16. **status-online.svg** - Indicador de sistema online
    - Círculo verde con checkmark
    - 24x24px

17. **status-offline.svg** - Indicador de sistema offline
    - Círculo rojo con X
    - 24x24px

18. **status-degraded.svg** - Indicador de sistema degradado
    - Círculo amarillo con advertencia
    - 24x24px

### Íconos de Planes y Características

19. **icon-free.svg** - Ícono para plan gratuito
    - Concepto: Regalo/gratis
    - 48x48px
    - Estilo: Consistente con otros íconos

20. **icon-dedicated.svg** - Ícono para plan dedicado
    - Concepto: Servidor/caja fuerte
    - 48x48px
    - Badge "Popular" opcional

21. **icon-enterprise.svg** - Ícono para plan empresarial
    - Concepto: Edificio/empresa
    - 48x48px
    - Estilo premium

22. **icon-no-fees.svg** - Ícono sin comisiones
    - Concepto: Billete con cruz/0% fees
    - 64x64px
    - Para destacar beneficio clave

23. **icon-instant.svg** - Ícono dinero instantáneo
    - Concepto: Rayo + dinero
    - 64x64px
    - Para destacar velocidad

24. **icon-open-source.svg** - Ícono código abierto
    - Concepto: Código con candado abierto
    - 64x64px
    - Para destacar transparencia

### Imágenes para Certificación

25. **banxico-certification-flow.svg** - Diagrama proceso de certificación
    - Flujo: Registro → Validación → Certificados → Pruebas → Aprobación
    - Estilo: Timeline horizontal o vertical
    - Colores institucionales de Banxico (opcional)

26. **self-hosting-diagram.svg** - Diagrama de auto-hosting
    - Arquitectura: Tu servidor → Banxico
    - Mostrar control total del desarrollador
    - Vs. modelo de servidor compartido/dedicado

### Imágenes para Donaciones

27. **icon-donate.svg** - Ícono de donación
    - Concepto: Corazón + mano
    - 48x48px
    - Cálido, agradable

28. **icon-sponsor.svg** - Ícono de sponsor
    - Concepto: Estrella/badge
    - 48x48px
    - Para sponsors destacados

29. **transparency-chart.png/.svg** - Gráfica de uso de donaciones
    - Pie chart o bar chart
    - 60% infraestructura, 20% desarrollo, 15% docs, 5% herramientas
    - Colores claros y profesionales

### Badges y Elementos Visuales

30. **badge-apache-license.svg** - Badge de licencia Apache 2.0
    - Formato estándar de badge
    - 120x20px (estilo shields.io)

31. **badge-open-source.svg** - Badge "100% Open Source"
    - Formato estándar de badge
    - 120x20px

32. **badge-no-fees.svg** - Badge "Sin Comisiones"
    - Formato estándar de badge
    - 120x20px

33. **badge-instant.svg** - Badge "Dinero al Instante"
    - Formato estándar de badge
    - 120x20px

---

## 📊 Resumen de Imágenes Necesarias

**Prioridad Alta (MVP - Stage 1):**
- Logo principal y favicon (1-2)
- Hero illustration (8)
- 4 feature icons principales (9-12)
- 3 badges de valor destacado (22-24)
- 1 diagrama de flujo (3 o 4)

**Prioridad Media (Stage 2):**
- Diagramas técnicos completos (3-7)
- Screenshots de ejemplo (13-15)
- Íconos de planes (19-21)
- Diagrama de certificación (25)

**Prioridad Baja (Stages 3-4):**
- Íconos de estado (16-18)
- Imágenes de donaciones (27-29)
- Badges adicionales (30-33)
- Diagrama de auto-hosting (26)

**Total: 33 imágenes/diagramas**

---

## 📄 Contenido por Página

## 1. PÁGINA DE INICIO (Homepage)

### Hero Section

**Título Principal:**
```
API CoDi para Pagos Digitales en México
```

**Subtítulo:**
```
Genera códigos QR y notificaciones push para cobros CoDi integrados con Banxico.
API RESTful simple, segura y de código abierto.
```

**Valor Destacado (3 badges/highlights):**
```
✅ 100% Código Abierto
💰 Sin Comisiones por Transacción
⚡ Dinero Disponible al Instante
```

**Botones CTA:**
- Botón primario: "Comenzar Ahora"
- Botón secundario: "Ver Documentación"
- Botón terciario: "Probar API"

**Badge de estado:**
```
🟢 Sistema Operativo
```

---

### Sección: ¿Qué es CoDi?

**Título:**
```
¿Qué es CoDi?
```

**Contenido:**
```
CoDi (Cobro Digital) es el sistema de pagos digitales del Banco de México que permite
realizar transferencias electrónicas de forma inmediata mediante códigos QR o notificaciones
push, directamente desde la aplicación bancaria del cliente.

Esta API facilita la integración de CoDi en tu negocio o aplicación, permitiéndote generar
solicitudes de pago y recibir confirmaciones en tiempo real.
```

**Por Qué Elegir CoDi:**
```
💸 Sin Comisiones
A diferencia de otros métodos de pago, CoDi no cobra comisiones por transacción.
Tu cliente paga lo que indiques y tú recibes el 100% del monto.

⚡ Dinero al Instante
El dinero llega a tu cuenta bancaria de forma inmediata, sin delays ni períodos de espera.
Disponible para usar al momento.

🔓 Código Abierto
Esta API es 100% código abierto bajo licencia Apache 2.0. Auditable, transparente
y mejorable por la comunidad.
```

---

### Sección: Características Principales

**Título:**
```
Características Principales
```

**Feature 1: Generación de Códigos QR**
- Título: "Códigos QR Dinámicos"
- Descripción: "Genera códigos QR únicos para cada transacción con información de pago embebida. El cliente simplemente escanea y confirma desde su app bancaria."
- Ícono: feature-qr.svg

**Feature 2: Notificaciones Push**
- Título: "Pagos por Push"
- Descripción: "Envía solicitudes de pago directamente al celular del cliente usando su número telefónico registrado en su banco."
- Ícono: feature-push.svg

**Feature 3: API RESTful**
- Título: "API Simple y Potente"
- Descripción: "Endpoints REST documentados con ejemplos en múltiples lenguajes. Integración en minutos, no en días."
- Ícono: feature-api.svg

**Feature 4: Seguridad**
- Título: "Seguridad Empresarial"
- Descripción: "Autenticación con certificados digitales, validación de firmas RSA y comunicación encriptada con Banxico."
- Ícono: feature-secure.svg

---

### Sección: Cómo Funciona

**Título:**
```
Cómo Funciona en 3 Pasos
```

**Paso 1:**
- Número: "1"
- Título: "Obtén tu API Key"
- Descripción: "Regístrate con Banxico y obtén tus credenciales de acceso. Configura tus certificados digitales."

**Paso 2:**
- Número: "2"
- Título: "Genera Solicitud de Pago"
- Descripción: "Usa nuestra API para crear un código QR o enviar una notificación push con el monto y concepto del pago."

**Paso 3:**
- Número: "3"
- Título: "Recibe Confirmación"
- Descripción: "Cuando el cliente paga, recibes una notificación en tu webhook con los detalles de la transacción."

---

### Sección: Casos de Uso

**Título:**
```
¿Quién Usa CoDi API?
```

**Caso 1: E-commerce**
```
Tiendas en línea que necesitan ofrecer pagos inmediatos sin tarjeta de crédito.
```

**Caso 2: Puntos de Venta**
```
Comercios físicos que quieren cobrar con QR en lugar de terminal de tarjetas.
```

**Caso 3: Servicios**
```
Plataformas de servicios que facturan a clientes y necesitan confirmación inmediata.
```

**Caso 4: Marketplaces**
```
Aplicaciones que conectan compradores y vendedores y procesan pagos entre ellos.
```

---

### Sección: Open Source

**Título:**
```
Proyecto de Código Abierto
```

**Contenido:**
```
CoDi API es un proyecto de código abierto bajo licencia Apache 2.0.
Revisable, auditable y extensible por la comunidad.
```

**Badges:**
- "Apache 2.0 License"
- "Contribuciones Bienvenidas"
- "Documentación Completa"

**Link a GitHub:**
```
Ver en GitHub →
```

---

### Sección: Planes y Precios

**Título:**
```
Elige el Plan que Mejor se Ajuste a Tu Negocio
```

**Subtítulo:**
```
Modelo Open Core: El código es abierto, tú decides cómo lo usas
```

---

#### Plan Gratuito

**Título:**
```
Servidor Compartido
```

**Precio:**
```
$0 MXN / mes
```

**Badge:**
```
GRATIS PARA SIEMPRE
```

**Descripción:**
```
Perfecto para comenzar y proyectos pequeños
```

**Características:**
```
✅ Código 100% abierto (Apache 2.0)
✅ API Key gratuita
✅ Servidor compartido
✅ Todos los endpoints disponibles
✅ Documentación completa
✅ Soporte comunitario (GitHub)
✅ Sin límite de transacciones
⚠️ Recursos compartidos
⚠️ Sin SLA garantizado
```

**Botón:**
```
Comenzar Gratis
```

**Ideal para:**
```
Startups, developers independientes, proyectos personales, testing
```

---

#### Plan Dedicado

**Título:**
```
Servidor Dedicado
```

**Precio:**
```
$500 MXN / mes
```

**Badge:**
```
POPULAR
```

**Descripción:**
```
Para negocios que necesitan garantías de rendimiento
```

**Características:**
```
✅ Todo lo del plan gratuito, más:
✅ Servidor dedicado exclusivo
✅ Mayor velocidad y confiabilidad
✅ SLA 99.9% uptime
✅ Soporte prioritario por email
✅ Monitoreo 24/7
✅ Backups automáticos diarios
✅ Panel de control personalizado
✅ SSL certificado incluido
```

**Botón:**
```
Contratar Ahora
```

**Ideal para:**
```
Pequeñas y medianas empresas, e-commerce, apps con tráfico medio
```

---

#### Plan Empresarial

**Título:**
```
Solución Empresarial
```

**Precio:**
```
Cotización Personalizada
```

**Badge:**
```
ENTERPRISE
```

**Descripción:**
```
Infraestructura a medida para grandes volúmenes
```

**Características:**
```
✅ Todo lo del plan dedicado, más:
✅ Infraestructura personalizada
✅ Múltiples servidores (alta disponibilidad)
✅ SLA personalizado (hasta 99.99%)
✅ Soporte 24/7 por teléfono y chat
✅ Consultoría técnica incluida
✅ Implementación asistida
✅ Capacitación para tu equipo
✅ Integración personalizada
✅ Monitoreo avanzado con alertas
✅ Compliance y auditorías
```

**Botón:**
```
Contactar Ventas
```

**Ideal para:**
```
Grandes empresas, instituciones financieras, alto volumen de transacciones
```

---

**Nota Importante:**
```
💡 Todos los planes permiten auto-hosting si prefieres usar tu propia infraestructura.
El código es 100% abierto y puedes instalarlo donde prefieras.
```

**Tabla Comparativa:**

| Característica | Gratuito | Dedicado | Empresarial |
|----------------|----------|----------|-------------|
| **Precio** | $0/mes | $500/mes | Personalizado |
| **Código Abierto** | ✅ | ✅ | ✅ |
| **Servidor** | Compartido | Dedicado | Personalizado |
| **SLA Uptime** | - | 99.9% | Hasta 99.99% |
| **Soporte** | Comunitario | Email | 24/7 Teléfono |
| **Transacciones** | Ilimitadas | Ilimitadas | Ilimitadas |
| **SSL** | Compartido | Incluido | Incluido |
| **Backups** | - | Diarios | Personalizados |
| **Monitoreo** | Básico | 24/7 | Avanzado |
| **Consultoría** | - | - | ✅ |

---

### Sección: Certificación Directa con Banxico

**Título:**
```
¿Eres Desarrollador? Certifícate Directamente
```

**Descripción:**
```
Si prefieres obtener tus propias credenciales de Banxico y manejar tu infraestructura
completamente, puedes certificarte directamente.
```

**Contenido:**
```
Esta API es de código abierto, lo que significa que puedes:

✅ Descargar e instalar el código en tus servidores
✅ Obtener tu propio API key directamente de Banxico
✅ Configurar tus propios certificados digitales
✅ Mantener control total de tu infraestructura
✅ Personalizar el código según tus necesidades

El proceso de certificación con Banxico toma aproximadamente 2-4 semanas e incluye
validación de tu identidad, configuración de certificados digitales y pruebas de integración.
```

**Pasos para Certificarte:**
```
1. Regístrate en el portal de Banxico
2. Completa el proceso de validación de identidad
3. Obtén tus certificados digitales RSA
4. Configura tu webhook público (HTTPS)
5. Realiza pruebas de integración
6. Recibe tu API key de producción
```

**Recursos:**
```
📚 Guía de certificación con Banxico
📄 Requisitos técnicos y legales
🔐 Tutorial de configuración de certificados
💻 Guía de auto-hosting de esta API
```

**Botones:**
```
[Botón primario] → Ir al Portal de Banxico
[Botón secundario] → Ver Guía de Certificación
[Botón terciario] → Documentación de Auto-hosting
```

**Links Externos Importantes:**
- Portal de Banxico: https://www.banxico.org.mx/codi/
- Documentación oficial CoDi: https://www.banxico.org.mx/sistemas-de-pago/codi.html
- Manual técnico de integración: [link]

**Nota:**
```
⚠️ La certificación directa con Banxico requiere conocimientos técnicos avanzados
y capacidad para mantener infraestructura segura. Si no estás seguro, te recomendamos
comenzar con nuestro plan gratuito de servidor compartido.
```

---

### Sección: Apoya el Proyecto

**Título:**
```
❤️ Apoya el Desarrollo de CoDi API
```

**Descripción:**
```
Este es un proyecto de código abierto mantenido por la comunidad.
Tu apoyo nos ayuda a seguir mejorando y manteniendo esta herramienta gratuita.
```

**Contenido:**
```
CoDi API es y siempre será 100% gratuito y de código abierto. No hay características
premium ocultas ni restricciones en el código. Sin embargo, mantener servidores,
documentación y soporte comunitario tiene costos.

Si este proyecto te ha sido útil, considera apoyarnos:
```

**Formas de Apoyar:**

#### Donación Única
```
Realiza una donación única del monto que prefieras
```

**Montos Sugeridos:**
- $50 MXN - Un café ☕
- $200 MXN - Una comida 🍕
- $500 MXN - Apoyo significativo 🎉
- $1,000+ MXN - Sponsor destacado ⭐

**Botón:**
```
Donar Ahora
```

**Métodos de Pago:**
```
💳 Tarjeta de crédito/débito
🏦 Transferencia bancaria (SPEI)
💰 PayPal
₿ Criptomonedas
```

---

#### Sponsor Mensual

```
Conviértete en sponsor recurrente y aparece en nuestro README
```

**Niveles:**
- $100 MXN/mes - Supporter 🌟
- $300 MXN/mes - Bronze Sponsor 🥉
- $500 MXN/mes - Silver Sponsor 🥈
- $1,000 MXN/mes - Gold Sponsor 🥇
- $2,500+ MXN/mes - Platinum Sponsor 💎

**Beneficios de Sponsors:**
```
✅ Tu nombre/logo en el README del proyecto
✅ Mención en las release notes
✅ Badge de sponsor en GitHub
✅ Reconocimiento en redes sociales
✅ Acceso anticipado a nuevas funcionalidades (Gold+)
✅ Prioridad en solicitudes de features (Platinum)
```

**Botón:**
```
Ser Sponsor Mensual
```

---

#### Otras Formas de Contribuir (Sin Costo)

```
Si no puedes contribuir económicamente, ¡hay muchas otras formas de ayudar!

⭐ Dale una estrella en GitHub
🐛 Reporta bugs y problemas
💻 Contribuye con código
📝 Mejora la documentación
🌐 Traduce a otros idiomas
💬 Ayuda a otros usuarios en las discusiones
📢 Comparte el proyecto en redes sociales
✍️ Escribe un blog post sobre tu experiencia
```

**Botones:**
```
[GitHub] ⭐ Star en GitHub
[Slack/Discord] 💬 Únete a la Comunidad
[Docs] 📝 Contribuir
```

---

**Reconocimiento a Sponsors:**

```
🙏 Gracias a Nuestros Sponsors
```

**Platinum Sponsors:**
```
[Logo grande - enlazable]
[Logo grande - enlazable]
```

**Gold Sponsors:**
```
[Logo mediano - enlazable] [Logo mediano - enlazable] [Logo mediano - enlazable]
```

**Silver & Bronze Sponsors:**
```
[Lista de nombres enlazables]
```

**Link:**
```
Ver todos nuestros sponsors →
```

---

**Transparencia:**
```
💰 ¿En Qué Se Usan las Donaciones?

📊 Ver reporte de transparencia completo →

- 60% - Infraestructura y hosting
- 20% - Desarrollo y mantenimiento
- 15% - Documentación y soporte
- 5% - Herramientas y servicios
```

---

### Footer

**Sección 1: Producto**
- Inicio
- Documentación
- API Playground
- Planes y Precios
- Casos de Uso

**Sección 2: Recursos**
- Guía de Inicio
- Referencia API
- Ejemplos de Código
- Estado del Sistema
- Certificación Banxico

**Sección 3: Comunidad**
- GitHub
- Contribuir
- Código de Conducta
- Reportar Vulnerabilidad
- Apoyar el Proyecto

**Sección 4: Legal**
- Licencia Apache 2.0
- Privacidad
- Términos de Uso
- Seguridad

**Copyright:**
```
© 2025 CoDi API. Proyecto de código abierto bajo licencia Apache 2.0.
```

---

## 2. API PLAYGROUND

### Navegación de Tabs

**Tab 1:** "Generar QR"
**Tab 2:** "Enviar Push"
**Tab 3:** "Consultar Pago"

---

### Tab 1: Generar Código QR

**Título:**
```
Generar Código QR para Pago
```

**Descripción:**
```
Crea un código QR que tus clientes pueden escanear desde su app bancaria para realizar
el pago de forma inmediata.
```

**Formulario:**

**Campo: API Key**
- Label: "API Key"
- Placeholder: "Ingresa tu API key de 128 caracteres"
- Ayuda: "Tu API key se almacena localmente en tu navegador y nunca se envía a nuestros servidores."
- Validación: "Debe tener exactamente 128 caracteres hexadecimales"

**Campo: Monto**
- Label: "Monto (MXN)"
- Placeholder: "1500.00"
- Ayuda: "Cantidad a cobrar en pesos mexicanos. Usa formato decimal (1500.00)"
- Validación: "Debe ser un número positivo mayor a 0"

**Campo: Concepto**
- Label: "Concepto de Pago"
- Placeholder: "Pago de servicio - Factura #12345"
- Ayuda: "Descripción que verá el cliente al pagar. Máximo 140 caracteres."
- Validación: "Requerido. Máximo 140 caracteres."

**Campo: Referencia (opcional)**
- Label: "Referencia Única"
- Placeholder: "INV-2025-001234"
- Ayuda: "Identificador único de tu sistema para rastrear este pago. Si no lo proporcionas, se genera automáticamente."

**Campo: Institución**
- Label: "Institución Bancaria"
- Placeholder: "Selecciona tu banco..."
- Ayuda: "Selecciona el banco donde tienes tu cuenta CoDi registrada."
- Link: "¿No sabes tu código? Consulta la tabla de instituciones →"

**Campo: Teléfono (opcional)**
- Label: "Teléfono del Cliente"
- Placeholder: "5512345678"
- Ayuda: "Número de celular a 10 dígitos. Opcional para QR."

**Campo: Nombre (opcional)**
- Label: "Nombre del Cliente"
- Placeholder: "Juan Pérez"
- Ayuda: "Nombre del cliente que realizará el pago."

**Campo: Email (opcional)**
- Label: "Email del Cliente"
- Placeholder: "cliente@ejemplo.com"
- Ayuda: "Correo electrónico para enviar comprobante."

**Botón Acción:**
```
Generar Código QR
```

**Respuesta Exitosa:**

**Título:**
```
✅ Código QR Generado Exitosamente
```

**Sección QR:**
- Mostrar QR code grande
- Botón: "Descargar QR"

**Sección Datos:**
**Folio de Operación:**
```
ABC123XYZ789
```

**URL de Pago:**
```
https://www.banxico.org.mx/codi/qr?data=...
```
- Botón: "Copiar URL"

**Sección Response JSON:**
- Título: "Respuesta de la API"
- JSON formateado con syntax highlighting
- Botón: "Copiar JSON"

**Respuesta con Error:**

**Título:**
```
❌ Error al Generar Código QR
```

**Mensaje:**
```
[Mensaje de error específico de la API]
```

**Detalles:**
```
[Detalles técnicos del error si están disponibles]
```

**Sugerencias:**
- "Verifica que tu API key sea correcta"
- "Asegúrate de que todos los campos requeridos estén completos"
- "Consulta la documentación de errores para más información"

---

### Tab 2: Enviar Notificación Push

**Título:**
```
Enviar Solicitud de Pago por Push
```

**Descripción:**
```
Envía una notificación directamente al celular del cliente con la solicitud de pago.
El cliente recibirá la notificación en su app bancaria.
```

**Formulario:**

(Mismos campos que QR, excepto que el Teléfono es REQUERIDO)

**Campo: Teléfono**
- Label: "Teléfono del Cliente *"
- Placeholder: "5512345678"
- Ayuda: "Número de celular a 10 dígitos registrado en el banco del cliente. REQUERIDO para notificaciones push."
- Validación: "Debe ser un número de 10 dígitos"

**Botón Acción:**
```
Enviar Notificación Push
```

**Respuesta Exitosa:**

**Título:**
```
✅ Notificación Enviada Exitosamente
```

**Mensaje:**
```
La solicitud de pago ha sido enviada al número 55-1234-5678.
El cliente recibirá la notificación en su app bancaria.
```

**Folio de Operación:**
```
ABC123XYZ789
```

**Siguiente Paso:**
```
Espera a que el cliente confirme el pago. Recibirás una notificación en tu webhook
cuando se complete la transacción.
```

**Sección Response JSON:**
- JSON formateado
- Botón: "Copiar JSON"

---

### Tab 3: Consultar Estado de Pago

**Título:**
```
Consultar Estado de un Pago
```

**Descripción:**
```
Verifica el estado actual de una solicitud de pago usando el folio de operación.
```

**Formulario:**

**Campo: API Key**
- (Mismo que antes)

**Campo: Folio de Operación**
- Label: "Folio de Operación"
- Placeholder: "ABC123XYZ789"
- Ayuda: "El folio que recibiste al generar el QR o enviar el push."
- Validación: "Requerido"

**Botón Acción:**
```
Consultar Estado
```

**Respuesta Exitosa - Pago Completado:**

**Título:**
```
✅ Pago Completado
```

**Estado:**
```
Badge verde: "COMPLETADO"
```

**Detalles:**
**Folio:** ABC123XYZ789
**Monto:** $1,500.00 MXN
**Fecha de Pago:** 20 de Octubre, 2025 - 14:32:15
**Concepto:** Pago de servicio - Factura #12345
**Referencia:** INV-2025-001234

**Información del Pagador:**
**Banco:** BBVA Bancomer
**Cuenta:** ****1234

**Respuesta Exitosa - Pago Pendiente:**

**Título:**
```
⏳ Pago Pendiente
```

**Estado:**
```
Badge amarillo: "PENDIENTE"
```

**Mensaje:**
```
El pago aún no ha sido completado por el cliente.
```

**Respuesta Exitosa - Pago Rechazado:**

**Título:**
```
❌ Pago Rechazado
```

**Estado:**
```
Badge rojo: "RECHAZADO"
```

**Motivo:**
```
[Razón del rechazo si está disponible]
```

---

## 3. HERRAMIENTAS

### Consulta de Instituciones Bancarias

**Título:**
```
Códigos de Instituciones Bancarias
```

**Descripción:**
```
Busca el código de tu institución bancaria para usar en las solicitudes de pago CoDi.
```

**Barra de Búsqueda:**
- Placeholder: "Buscar por nombre o código..."
- Ícono de búsqueda

**Tabla:**

**Encabezados:**
| Código | Nombre de la Institución | Tipo | Acción |

**Ejemplo de filas:**
| 002 | Banamex | Banco | [Copiar] |
| 012 | BBVA Bancomer | Banco | [Copiar] |
| 014 | Santander | Banco | [Copiar] |
| 019 | Banjército | Banco | [Copiar] |
| 021 | HSBC | Banco | [Copiar] |

**Botón Copiar:**
```
Tooltip: "Copiar código"
Feedback al copiar: "✅ Código copiado"
```

**Filtros:**
- Dropdown: "Todos los tipos" / "Bancos" / "Financieras" / "Otros"

**Pie de tabla:**
```
Mostrando 50 de 156 instituciones
```

**Paginación:**
- Anterior | 1 2 3 4 5 | Siguiente

---

## 4. DOCUMENTACIÓN

### 4.1 Guía de Inicio Rápido

**Título:**
```
Guía de Inicio Rápido
```

**Introducción:**
```
Comienza a integrar pagos CoDi en tu aplicación en menos de 10 minutos.
```

---

**Sección: Prerrequisitos**

**Título:**
```
Antes de Comenzar
```

**Lista:**
```
✅ Cuenta activa en Banxico con CoDi habilitado
✅ API Key de 128 caracteres proporcionada por Banxico
✅ Certificados digitales RSA configurados
✅ Webhook público HTTPS para recibir notificaciones
✅ Conocimientos básicos de APIs REST
```

**Nota importante:**
```
⚠️ Si aún no tienes credenciales de Banxico, consulta la sección "Obtener Credenciales"
para iniciar el proceso de registro.
```

---

**Sección: Instalación**

**Título:**
```
Paso 1: Configuración Inicial
```

**No es necesaria instalación. Puedes usar esta API desde cualquier lenguaje que soporte HTTP.**

**Endpoint Base:**
```
https://tu-dominio.com/v2
```

**Autenticación:**
```
Todas las peticiones requieren tu API Key en el header:
x-api-key: TU_API_KEY_DE_128_CARACTERES
```

---

**Sección: Primera Solicitud**

**Título:**
```
Paso 2: Tu Primera Solicitud de Pago
```

**Subtítulo:**
```
Genera un código QR para cobrar $100 MXN
```

**Ejemplo cURL:**
```bash
curl -X POST https://tu-dominio.com/v2/codi/qr \
  -H "Content-Type: application/json" \
  -H "x-api-key: TU_API_KEY" \
  -d '{
    "monto": 100.00,
    "concepto": "Pago de prueba",
    "institucion": "012",
    "referencia": "TEST-001"
  }'
```

**Respuesta Esperada:**
```json
{
  "success": true,
  "data": {
    "folio": "ABC123XYZ789",
    "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANS...",
    "qrUrl": "https://www.banxico.org.mx/codi/qr?data=...",
    "monto": 100.00,
    "concepto": "Pago de prueba",
    "vigencia": "2025-10-20T23:59:59Z"
  }
}
```

---

**Sección: Verificar el Pago**

**Título:**
```
Paso 3: Consultar el Estado del Pago
```

**Ejemplo cURL:**
```bash
curl -X POST https://tu-dominio.com/v2/codi/consulta \
  -H "Content-Type: application/json" \
  -H "x-api-key: TU_API_KEY" \
  -d '{
    "folio": "ABC123XYZ789"
  }'
```

**Respuesta Esperada:**
```json
{
  "success": true,
  "data": {
    "folio": "ABC123XYZ789",
    "estado": "COMPLETADO",
    "monto": 100.00,
    "fechaPago": "2025-10-20T14:32:15Z",
    "banco": "BBVA Bancomer"
  }
}
```

---

**Sección: Recibir Notificaciones**

**Título:**
```
Paso 4: Configurar Webhook
```

**Contenido:**
```
Cuando un pago se completa, Banxico enviará una notificación POST a tu webhook configurado.
```

**Endpoint que debes exponer:**
```
POST https://tu-dominio.com/webhook/codi
```

**Payload que recibirás:**
```json
{
  "folio": "ABC123XYZ789",
  "estado": "COMPLETADO",
  "monto": 100.00,
  "fechaPago": "2025-10-20T14:32:15Z",
  "referencia": "TEST-001",
  "firma": "ABC123..."
}
```

**Importante:**
```
🔒 Siempre verifica la firma digital del webhook para confirmar que proviene de Banxico.
```

---

**Sección: Próximos Pasos**

**Título:**
```
¿Qué Sigue?
```

**Links:**
- → Referencia completa de la API
- → Ejemplos de código en diferentes lenguajes
- → Guía de seguridad y mejores prácticas
- → Casos de uso y patrones de integración

---

### 4.2 Referencia de API

**Título:**
```
Referencia de API
```

**Descripción:**
```
Documentación completa de todos los endpoints disponibles en la API CoDi.
```

---

#### Endpoint 1: Generar Código QR

**Badge:** POST

**Ruta:**
```
/v2/codi/qr
```

**Descripción:**
```
Genera un código QR dinámico para que el cliente pueda escanear y realizar el pago
desde su aplicación bancaria.
```

**Headers Requeridos:**
```
Content-Type: application/json
x-api-key: TU_API_KEY
```

**Body Parameters:**

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
|-----------|------|-----------|-------------|---------|
| `monto` | number | ✅ Sí | Monto a cobrar en MXN. Formato decimal. | 1500.00 |
| `concepto` | string | ✅ Sí | Descripción del pago. Máx 140 chars. | "Pago de servicio" |
| `institucion` | string | ✅ Sí | Código de 3 dígitos del banco. | "012" |
| `referencia` | string | ❌ No | Identificador único. Auto-generado si se omite. | "INV-001" |
| `telefono` | string | ❌ No | Teléfono de 10 dígitos del cliente. | "5512345678" |
| `nombre` | string | ❌ No | Nombre del cliente. | "Juan Pérez" |
| `email` | string | ❌ No | Email del cliente. | "cliente@email.com" |

**Ejemplo de Request:**
```json
{
  "monto": 1500.00,
  "concepto": "Pago de factura #12345",
  "institucion": "012",
  "referencia": "INV-2025-001234",
  "telefono": "5512345678",
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com"
}
```

**Respuesta Exitosa (200 OK):**
```json
{
  "success": true,
  "data": {
    "folio": "ABC123XYZ789",
    "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANS...",
    "qrUrl": "https://www.banxico.org.mx/codi/qr?data=...",
    "monto": 1500.00,
    "concepto": "Pago de factura #12345",
    "referencia": "INV-2025-001234",
    "vigencia": "2025-10-21T23:59:59Z",
    "timestamp": "2025-10-20T14:30:00Z"
  }
}
```

**Respuesta de Error (400 Bad Request):**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_AMOUNT",
    "message": "El monto debe ser un número positivo mayor a 0",
    "details": {
      "field": "monto",
      "value": -100
    }
  }
}
```

**Posibles Códigos de Error:**
- `400` - Bad Request (parámetros inválidos)
- `401` - Unauthorized (API key inválida o faltante)
- `500` - Internal Server Error (error del servidor)
- `503` - Service Unavailable (Banxico no disponible)

---

#### Endpoint 2: Enviar Notificación Push

**Badge:** POST

**Ruta:**
```
/v2/codi/push
```

**Descripción:**
```
Envía una notificación push directamente al celular del cliente con la solicitud de pago.
El cliente recibirá la notificación en su app bancaria.
```

**Headers Requeridos:**
```
Content-Type: application/json
x-api-key: TU_API_KEY
```

**Body Parameters:**

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
|-----------|------|-----------|-------------|---------|
| `monto` | number | ✅ Sí | Monto a cobrar en MXN. | 1500.00 |
| `concepto` | string | ✅ Sí | Descripción del pago. Máx 140 chars. | "Pago de servicio" |
| `institucion` | string | ✅ Sí | Código de 3 dígitos del banco. | "012" |
| `telefono` | string | ✅ Sí | Teléfono de 10 dígitos del cliente. REQUERIDO para push. | "5512345678" |
| `referencia` | string | ❌ No | Identificador único. | "INV-001" |
| `nombre` | string | ❌ No | Nombre del cliente. | "Juan Pérez" |
| `email` | string | ❌ No | Email del cliente. | "cliente@email.com" |

**Ejemplo de Request:**
```json
{
  "monto": 1500.00,
  "concepto": "Pago de factura #12345",
  "institucion": "012",
  "telefono": "5512345678",
  "referencia": "INV-2025-001234",
  "nombre": "Juan Pérez"
}
```

**Respuesta Exitosa (200 OK):**
```json
{
  "success": true,
  "data": {
    "folio": "XYZ789ABC123",
    "telefono": "5512345678",
    "monto": 1500.00,
    "concepto": "Pago de factura #12345",
    "referencia": "INV-2025-001234",
    "estado": "ENVIADO",
    "timestamp": "2025-10-20T14:30:00Z"
  },
  "message": "Notificación enviada exitosamente"
}
```

**Respuesta de Error:**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PHONE",
    "message": "El número telefónico no está registrado en el banco",
    "details": {
      "field": "telefono",
      "value": "5512345678"
    }
  }
}
```

---

#### Endpoint 3: Consultar Estado de Pago

**Badge:** POST

**Ruta:**
```
/v2/codi/consulta
```

**Descripción:**
```
Consulta el estado actual de una solicitud de pago usando el folio de operación.
```

**Headers Requeridos:**
```
Content-Type: application/json
x-api-key: TU_API_KEY
```

**Body Parameters:**

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
|-----------|------|-----------|-------------|---------|
| `folio` | string | ✅ Sí | Folio de operación a consultar. | "ABC123XYZ789" |

**Ejemplo de Request:**
```json
{
  "folio": "ABC123XYZ789"
}
```

**Respuesta Exitosa - Pago Completado (200 OK):**
```json
{
  "success": true,
  "data": {
    "folio": "ABC123XYZ789",
    "estado": "COMPLETADO",
    "monto": 1500.00,
    "concepto": "Pago de factura #12345",
    "referencia": "INV-2025-001234",
    "fechaSolicitud": "2025-10-20T14:30:00Z",
    "fechaPago": "2025-10-20T14:32:15Z",
    "pagador": {
      "banco": "BBVA Bancomer",
      "cuenta": "****1234"
    }
  }
}
```

**Respuesta - Pago Pendiente:**
```json
{
  "success": true,
  "data": {
    "folio": "ABC123XYZ789",
    "estado": "PENDIENTE",
    "monto": 1500.00,
    "concepto": "Pago de factura #12345",
    "referencia": "INV-2025-001234",
    "fechaSolicitud": "2025-10-20T14:30:00Z",
    "vigencia": "2025-10-21T23:59:59Z"
  }
}
```

**Respuesta - Pago Expirado:**
```json
{
  "success": true,
  "data": {
    "folio": "ABC123XYZ789",
    "estado": "EXPIRADO",
    "monto": 1500.00,
    "fechaSolicitud": "2025-10-19T14:30:00Z",
    "vigencia": "2025-10-20T23:59:59Z"
  }
}
```

---

#### Endpoint 4: Webhook de Resultados

**Badge:** POST

**Ruta:**
```
/v2/resultadoOperaciones
```

**Descripción:**
```
Este endpoint RECIBE notificaciones de Banxico cuando un pago se completa o rechaza.
Debes implementar este endpoint en TU servidor y configurar la URL en Banxico.
```

**⚠️ Nota Importante:**
```
Este no es un endpoint que TÚ llamas, sino que Banxico lo llama en tu servidor.
Asegúrate de que tu URL sea pública y accesible vía HTTPS.
```

**Payload que Recibirás:**
```json
{
  "folio": "ABC123XYZ789",
  "estado": "COMPLETADO",
  "monto": 1500.00,
  "concepto": "Pago de factura #12345",
  "referencia": "INV-2025-001234",
  "fechaPago": "2025-10-20T14:32:15Z",
  "pagador": {
    "banco": "012",
    "cuenta": "****1234",
    "nombre": "Juan Pérez"
  },
  "firma": "ABC123DEF456...",
  "timestamp": "2025-10-20T14:32:16Z"
}
```

**Tu Respuesta Esperada (200 OK):**
```json
{
  "success": true,
  "message": "Notificación recibida"
}
```

**Validación de Firma:**
```
⚠️ SIEMPRE verifica la firma digital para confirmar que la notificación
proviene realmente de Banxico y no ha sido modificada.

Consulta la guía de seguridad para ver cómo validar firmas RSA.
```

---

#### Endpoint 5: Health Check

**Badge:** GET

**Ruta:**
```
/v2/health
```

**Descripción:**
```
Verifica el estado del API y la conectividad con Banxico.
```

**Headers Requeridos:**
```
Ninguno (endpoint público)
```

**Respuesta Exitosa (200 OK):**
```json
{
  "status": "ok",
  "timestamp": "2025-10-20T14:30:00Z",
  "services": {
    "api": "operational",
    "banxico": "operational",
    "database": "operational"
  },
  "version": "2.0.0"
}
```

**Respuesta Degradada (200 OK):**
```json
{
  "status": "degraded",
  "timestamp": "2025-10-20T14:30:00Z",
  "services": {
    "api": "operational",
    "banxico": "degraded",
    "database": "operational"
  },
  "version": "2.0.0",
  "message": "Banxico experimentando latencia elevada"
}
```

---

### 4.3 Códigos de Error

**Título:**
```
Códigos de Error y Soluciones
```

**Descripción:**
```
Referencia completa de todos los códigos de error que puede devolver la API y cómo resolverlos.
```

---

**Errores de Autenticación (401)**

| Código | Mensaje | Solución |
|--------|---------|----------|
| `AUTH_MISSING_KEY` | API key no proporcionada | Incluye el header `x-api-key` en tu petición |
| `AUTH_INVALID_KEY` | API key inválida | Verifica que tu API key sea correcta (128 caracteres hex) |
| `AUTH_EXPIRED_KEY` | API key expirada | Solicita una nueva API key a Banxico |
| `AUTH_REVOKED_KEY` | API key revocada | Contacta a Banxico para reactivar tu acceso |

---

**Errores de Validación (400)**

| Código | Mensaje | Solución |
|--------|---------|----------|
| `INVALID_AMOUNT` | Monto inválido | El monto debe ser un número positivo mayor a 0 |
| `INVALID_CONCEPT` | Concepto inválido | El concepto es requerido (máx 140 caracteres) |
| `INVALID_INSTITUTION` | Código de institución inválido | Usa un código de 3 dígitos válido. Ver tabla de instituciones |
| `INVALID_PHONE` | Número telefónico inválido | Debe ser un número de 10 dígitos sin espacios ni guiones |
| `INVALID_EMAIL` | Email inválido | Proporciona un email con formato válido |
| `INVALID_REFERENCE` | Referencia inválida | La referencia debe ser alfanumérica (máx 40 caracteres) |
| `MISSING_PHONE_PUSH` | Teléfono requerido para push | Las notificaciones push requieren el campo `telefono` |

---

**Errores de Negocio (422)**

| Código | Mensaje | Solución |
|--------|---------|----------|
| `AMOUNT_TOO_HIGH` | Monto excede el límite | El monto máximo por transacción es $8,000 MXN |
| `AMOUNT_TOO_LOW` | Monto por debajo del mínimo | El monto mínimo es $0.01 MXN |
| `DUPLICATE_REFERENCE` | Referencia duplicada | Esta referencia ya fue usada. Usa una referencia única |
| `EXPIRED_FOLIO` | Folio expirado | Este folio ya expiró. Los QR son válidos por 24 horas |
| `PHONE_NOT_REGISTERED` | Teléfono no registrado | El número no está registrado en CoDi con este banco |

---

**Errores del Servidor (500)**

| Código | Mensaje | Solución |
|--------|---------|----------|
| `INTERNAL_ERROR` | Error interno del servidor | Intenta nuevamente en unos momentos. Si persiste, reporta el error |
| `DATABASE_ERROR` | Error de base de datos | Intenta nuevamente. Si persiste, contacta soporte |
| `CERTIFICATE_ERROR` | Error en certificado digital | Verifica que tus certificados estén correctamente configurados |
| `SIGNATURE_ERROR` | Error al generar firma | Problema con la firma digital. Contacta soporte |

---

**Errores de Servicios Externos (503)**

| Código | Mensaje | Solución |
|--------|---------|----------|
| `BANXICO_UNAVAILABLE` | Banxico no disponible | El servicio de Banxico está temporalmente no disponible. Intenta más tarde |
| `BANXICO_TIMEOUT` | Timeout de Banxico | La petición a Banxico excedió el tiempo. Intenta nuevamente |
| `SERVICE_DEGRADED` | Servicio degradado | El servicio está experimentando problemas. Funcionalidad limitada |

---

**Errores de Rate Limiting (429)**

| Código | Mensaje | Solución |
|--------|---------|----------|
| `RATE_LIMIT_EXCEEDED` | Límite de peticiones excedido | Has excedido el límite de peticiones. Espera antes de intentar nuevamente |

**Límites:**
```
- 100 peticiones por minuto
- 10,000 peticiones por día
```

---

### 4.4 Ejemplos de Código

**Título:**
```
Ejemplos de Integración
```

**Descripción:**
```
Ejemplos completos de código en diferentes lenguajes de programación.
```

---

#### JavaScript (Node.js con axios)

**Generar QR:**
```javascript
const axios = require('axios');

const API_URL = 'https://tu-dominio.com/v2';
const API_KEY = 'tu_api_key_de_128_caracteres';

async function generarQR() {
  try {
    const response = await axios.post(
      `${API_URL}/codi/qr`,
      {
        monto: 1500.00,
        concepto: 'Pago de factura #12345',
        institucion: '012',
        referencia: 'INV-2025-001234',
        telefono: '5512345678',
        nombre: 'Juan Pérez',
        email: 'juan@ejemplo.com'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        }
      }
    );

    console.log('QR generado exitosamente:');
    console.log('Folio:', response.data.data.folio);
    console.log('URL:', response.data.data.qrUrl);

    return response.data;
  } catch (error) {
    console.error('Error al generar QR:', error.response?.data || error.message);
    throw error;
  }
}

generarQR();
```

**Consultar Estado:**
```javascript
async function consultarPago(folio) {
  try {
    const response = await axios.post(
      `${API_URL}/codi/consulta`,
      { folio },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        }
      }
    );

    console.log('Estado del pago:');
    console.log('Estado:', response.data.data.estado);
    console.log('Monto:', response.data.data.monto);

    return response.data;
  } catch (error) {
    console.error('Error al consultar pago:', error.response?.data || error.message);
    throw error;
  }
}

consultarPago('ABC123XYZ789');
```

---

#### Python con requests

**Generar QR:**
```python
import requests
import json

API_URL = 'https://tu-dominio.com/v2'
API_KEY = 'tu_api_key_de_128_caracteres'

def generar_qr():
    headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    }

    payload = {
        'monto': 1500.00,
        'concepto': 'Pago de factura #12345',
        'institucion': '012',
        'referencia': 'INV-2025-001234',
        'telefono': '5512345678',
        'nombre': 'Juan Pérez',
        'email': 'juan@ejemplo.com'
    }

    try:
        response = requests.post(
            f'{API_URL}/codi/qr',
            headers=headers,
            json=payload
        )
        response.raise_for_status()

        data = response.json()
        print('QR generado exitosamente:')
        print(f"Folio: {data['data']['folio']}")
        print(f"URL: {data['data']['qrUrl']}")

        return data
    except requests.exceptions.RequestException as e:
        print(f'Error al generar QR: {e}')
        if hasattr(e, 'response') and e.response is not None:
            print(e.response.json())
        raise

if __name__ == '__main__':
    generar_qr()
```

**Consultar Estado:**
```python
def consultar_pago(folio):
    headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    }

    payload = {'folio': folio}

    try:
        response = requests.post(
            f'{API_URL}/codi/consulta',
            headers=headers,
            json=payload
        )
        response.raise_for_status()

        data = response.json()
        print('Estado del pago:')
        print(f"Estado: {data['data']['estado']}")
        print(f"Monto: ${data['data']['monto']}")

        return data
    except requests.exceptions.RequestException as e:
        print(f'Error al consultar pago: {e}')
        raise

if __name__ == '__main__':
    consultar_pago('ABC123XYZ789')
```

---

#### PHP con cURL

**Generar QR:**
```php
<?php

$apiUrl = 'https://tu-dominio.com/v2';
$apiKey = 'tu_api_key_de_128_caracteres';

function generarQR($apiUrl, $apiKey) {
    $payload = [
        'monto' => 1500.00,
        'concepto' => 'Pago de factura #12345',
        'institucion' => '012',
        'referencia' => 'INV-2025-001234',
        'telefono' => '5512345678',
        'nombre' => 'Juan Pérez',
        'email' => 'juan@ejemplo.com'
    ];

    $ch = curl_init($apiUrl . '/codi/qr');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'x-api-key: ' . $apiKey
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        throw new Exception('Error al generar QR: ' . $response);
    }

    $data = json_decode($response, true);
    echo "QR generado exitosamente:\n";
    echo "Folio: " . $data['data']['folio'] . "\n";
    echo "URL: " . $data['data']['qrUrl'] . "\n";

    return $data;
}

try {
    generarQR($apiUrl, $apiKey);
} catch (Exception $e) {
    echo $e->getMessage();
}
?>
```

---

#### cURL (Línea de comandos)

**Generar QR:**
```bash
curl -X POST https://tu-dominio.com/v2/codi/qr \
  -H "Content-Type: application/json" \
  -H "x-api-key: tu_api_key_de_128_caracteres" \
  -d '{
    "monto": 1500.00,
    "concepto": "Pago de factura #12345",
    "institucion": "012",
    "referencia": "INV-2025-001234",
    "telefono": "5512345678",
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com"
  }'
```

**Enviar Push:**
```bash
curl -X POST https://tu-dominio.com/v2/codi/push \
  -H "Content-Type: application/json" \
  -H "x-api-key: tu_api_key_de_128_caracteres" \
  -d '{
    "monto": 1500.00,
    "concepto": "Pago de factura #12345",
    "institucion": "012",
    "telefono": "5512345678",
    "referencia": "INV-2025-001234"
  }'
```

**Consultar Estado:**
```bash
curl -X POST https://tu-dominio.com/v2/codi/consulta \
  -H "Content-Type: application/json" \
  -H "x-api-key: tu_api_key_de_128_caracteres" \
  -d '{
    "folio": "ABC123XYZ789"
  }'
```

**Health Check:**
```bash
curl -X GET https://tu-dominio.com/v2/health
```

---

### 4.5 Guía de Seguridad

**Título:**
```
Seguridad y Mejores Prácticas
```

**Descripción:**
```
Recomendaciones de seguridad para proteger tu integración y datos de clientes.
```

---

**Sección: Protección de API Key**

**Título:**
```
🔐 Protección de tu API Key
```

**Nunca Hagas Esto:**
```
❌ Incluir tu API key en código del frontend
❌ Subir tu API key a repositorios públicos (GitHub, GitLab, etc.)
❌ Compartir tu API key por email o chat
❌ Hardcodear la API key en tu código fuente
```

**Mejores Prácticas:**
```
✅ Almacena tu API key en variables de entorno
✅ Usa gestores de secretos (AWS Secrets Manager, HashiCorp Vault, etc.)
✅ Rota tu API key periódicamente
✅ Limita el acceso a la API key solo al personal necesario
✅ Monitorea el uso de tu API key para detectar anomalías
```

**Ejemplo de variables de entorno:**
```bash
# .env
CODI_API_KEY=tu_api_key_de_128_caracteres
CODI_API_URL=https://tu-dominio.com/v2
```

```javascript
// En tu código
const apiKey = process.env.CODI_API_KEY;
```

**⚠️ Importante:**
```
Si crees que tu API key ha sido comprometida, contacta inmediatamente a Banxico
para revocarla y obtener una nueva.
```

---

**Sección: Validación de Webhooks**

**Título:**
```
🔒 Validación de Firmas en Webhooks
```

**Por qué es importante:**
```
Los webhooks pueden ser falsificados por atacantes. SIEMPRE verifica la firma digital
para confirmar que la notificación realmente proviene de Banxico.
```

**Proceso de validación:**
```
1. Recibe el payload del webhook
2. Extrae la firma digital del campo 'firma'
3. Reconstruye el mensaje original
4. Verifica la firma usando la clave pública de Banxico
5. Solo procesa el webhook si la firma es válida
```

**Ejemplo en Node.js:**
```javascript
const crypto = require('crypto');
const fs = require('fs');

function verificarFirmaWebhook(payload, firma) {
  // Cargar certificado público de Banxico
  const publicKey = fs.readFileSync('banxico-public.pem', 'utf8');

  // Crear verificador
  const verifier = crypto.createVerify('RSA-SHA256');

  // Agregar datos a verificar (sin la firma)
  const dataToVerify = JSON.stringify({
    folio: payload.folio,
    estado: payload.estado,
    monto: payload.monto,
    timestamp: payload.timestamp
  });

  verifier.update(dataToVerify);

  // Verificar firma
  const isValid = verifier.verify(publicKey, firma, 'base64');

  return isValid;
}

// Uso en tu endpoint de webhook
app.post('/webhook/codi', (req, res) => {
  const payload = req.body;
  const firma = payload.firma;

  // Verificar firma
  if (!verificarFirmaWebhook(payload, firma)) {
    console.error('⚠️ Firma inválida - posible intento de fraude');
    return res.status(401).json({ error: 'Firma inválida' });
  }

  // Firma válida - procesar pago
  console.log('✅ Webhook válido - procesando pago');
  procesarPago(payload);

  res.json({ success: true });
});
```

---

**Sección: HTTPS Obligatorio**

**Título:**
```
🔐 Usa SIEMPRE HTTPS
```

**Contenido:**
```
Todas las comunicaciones con la API CoDi DEBEN ser a través de HTTPS.
Nunca uses HTTP para transmitir datos sensibles.
```

**Requisitos:**
```
✅ Tu webhook debe ser HTTPS (no HTTP)
✅ Usa certificados SSL/TLS válidos (no auto-firmados en producción)
✅ Mantén tus certificados actualizados
✅ Usa TLS 1.2 o superior
```

**Verificación:**
```bash
# Verifica que tu webhook sea accesible vía HTTPS
curl -I https://tu-dominio.com/webhook/codi
```

---

**Sección: Manejo de Certificados**

**Título:**
```
📜 Gestión de Certificados Digitales
```

**Almacenamiento seguro:**
```
❌ No almacenes certificados en el código fuente
❌ No los incluyas en repositorios de Git
✅ Usa sistemas de gestión de secretos
✅ Protege los archivos con permisos restrictivos (chmod 600)
✅ Mantén respaldos encriptados de tus certificados
```

**Expiración:**
```
⚠️ Los certificados digitales expiran. Configura alertas para renovarlos antes
de que expiren y evitar interrupciones en el servicio.
```

**Rotación:**
```
Renueva tus certificados al menos cada 12 meses, aunque no hayan expirado.
```

---

**Sección: Validación de Datos**

**Título:**
```
✅ Validación y Sanitización
```

**Siempre valida:**
```
✅ Monto (número positivo, rango válido)
✅ Concepto (longitud, caracteres permitidos)
✅ Teléfono (formato, longitud)
✅ Email (formato válido)
✅ Referencia (caracteres alfanuméricos)
```

**Sanitización:**
```
✅ Elimina caracteres especiales peligrosos
✅ Previene inyección SQL/NoSQL
✅ Previene XSS en campos de texto
```

**Ejemplo:**
```javascript
const validator = require('validator');

function validarDatosPago(data) {
  // Validar monto
  if (!data.monto || data.monto <= 0 || data.monto > 8000) {
    throw new Error('Monto inválido');
  }

  // Validar concepto
  if (!data.concepto || data.concepto.length > 140) {
    throw new Error('Concepto inválido');
  }

  // Validar teléfono
  if (data.telefono && !validator.isMobilePhone(data.telefono, 'es-MX')) {
    throw new Error('Teléfono inválido');
  }

  // Validar email
  if (data.email && !validator.isEmail(data.email)) {
    throw new Error('Email inválido');
  }

  return true;
}
```

---

**Sección: Rate Limiting**

**Título:**
```
⏱️ Control de Límites de Peticiones
```

**Límites actuales:**
```
- 100 peticiones por minuto por API key
- 10,000 peticiones por día por API key
```

**Recomendaciones:**
```
✅ Implementa retry logic con backoff exponencial
✅ Cachea resultados cuando sea posible
✅ No hagas polling constante - usa webhooks
✅ Agrupa peticiones si es posible
```

**Ejemplo de retry con backoff:**
```javascript
async function llamarAPIConRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.response?.status === 429) {
        // Rate limit excedido - esperar antes de reintentar
        const waitTime = Math.pow(2, i) * 1000; // Backoff exponencial
        console.log(`Rate limit excedido. Esperando ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      } else {
        throw error;
      }
    }
  }
  throw new Error('Max retries alcanzado');
}
```

---

**Sección: Logging y Auditoría**

**Título:**
```
📝 Logging y Monitoreo
```

**Qué registrar:**
```
✅ Todas las peticiones a la API (timestamp, endpoint, resultado)
✅ Errores y excepciones
✅ Webhooks recibidos
✅ Intentos de acceso no autorizados
✅ Cambios en configuración
```

**Qué NO registrar:**
```
❌ API keys completas (solo últimos 8 caracteres)
❌ Certificados privados
❌ Datos sensibles de clientes (PII)
❌ Números de cuenta completos
```

**Retención:**
```
Mantén logs por al menos 90 días para auditoría y debugging.
```

---

**Sección: Entorno de Pruebas**

**Título:**
```
🧪 Usa Entorno de Pruebas
```

**Contenido:**
```
Antes de integrar en producción, prueba exhaustivamente en un entorno de desarrollo:

✅ Valida todos los flujos de pago
✅ Prueba casos de error
✅ Verifica la validación de webhooks
✅ Confirma el manejo de timeouts
✅ Simula cargas altas

❌ Nunca pruebes directamente en producción con datos reales
```

---

## 5. PÁGINAS DE SOPORTE

### FAQ (Preguntas Frecuentes)

**Título:**
```
Preguntas Frecuentes (FAQ)
```

---

**¿Qué es CoDi?**
```
CoDi (Cobro Digital) es el sistema de pagos digitales del Banco de México que permite
realizar transferencias electrónicas inmediatas usando códigos QR o notificaciones push.
```

---

**¿Necesito una cuenta en Banxico para usar esta API?**
```
No necesariamente. Tenemos dos opciones:

1. Plan Compartido/Dedicado: Nosotros manejamos la integración con Banxico.
   Solo necesitas obtener un API key nuestro.

2. Auto-hosting: Puedes certificarte directamente con Banxico y usar tu propia
   infraestructura. El código es 100% abierto.
```

---

**¿Cuánto cuesta usar esta API?**
```
Ofrecemos tres opciones:

💰 Servidor Compartido: GRATIS para siempre
   - API key gratuita
   - Servidor compartido
   - Sin límite de transacciones

💼 Servidor Dedicado: $500 MXN/mes
   - Servidor exclusivo
   - SLA 99.9% uptime
   - Soporte prioritario

🏢 Solución Empresarial: Cotización personalizada
   - Infraestructura a medida
   - Soporte 24/7
   - SLA hasta 99.99%

Todos los planes tienen código abierto y permiten auto-hosting.
```

---

**¿CoDi cobra comisiones por transacción?**
```
¡No! CoDi NO cobra comisiones por transacción. Es uno de los grandes beneficios
del sistema.

Tu cliente paga exactamente el monto que indiques, y tú recibes el 100% del dinero
en tu cuenta bancaria. Sin comisiones ocultas, sin descuentos por transacción.

Nota: Algunos bancos pueden cobrar una tarifa mensual por tener habilitado CoDi,
pero no hay comisión por cada pago.
```

---

**¿Cuánto tiempo tarda en llegar el dinero a mi cuenta?**
```
⚡ El dinero llega de forma INMEDIATA a tu cuenta bancaria.

No hay delays, no hay períodos de espera de días o semanas como con otros
métodos de pago. En cuanto el cliente confirma el pago, el dinero está disponible
en tu cuenta para usarse al instante.

Esto es una ventaja enorme de CoDi sobre tarjetas de crédito o PayPal.
```

---

**¿Cuál es el monto máximo por transacción?**
```
El monto máximo es de $8,000 MXN por transacción CoDi según las reglas de Banxico.
```

---

**¿Cuánto tiempo tarda en confirmarse un pago?**
```
Los pagos CoDi son instantáneos. Una vez que el cliente confirma el pago en su app
bancaria, recibirás la notificación en tu webhook en cuestión de segundos.
```

---

**¿Cuánto tiempo es válido un código QR?**
```
Los códigos QR generados son válidos por 24 horas desde su creación. Después de este
tiempo, expiran y no pueden ser utilizados.
```

---

**¿Puedo cancelar una solicitud de pago?**
```
Una vez generado un QR o enviado un push, no puede ser cancelado desde la API.
El pago simplemente no se completará si el cliente no lo confirma antes de que expire.
```

---

**¿Qué pasa si el cliente paga después de que el QR expiró?**
```
Los QR expirados no pueden ser pagados. El cliente recibirá un mensaje de error
en su app bancaria indicando que el código ya no es válido.
```

---

**¿Puedo reutilizar una referencia?**
```
No. Cada referencia debe ser única. Si intentas usar una referencia duplicada,
recibirás un error DUPLICATE_REFERENCE.
```

---

**¿Qué navegadores son compatibles con el playground?**
```
El playground es compatible con todos los navegadores modernos:
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
```

---

**¿Necesito un servidor para usar esta API?**
```
Sí. Necesitas un servidor backend para:
1. Almacenar tu API key de forma segura
2. Hacer las peticiones a la API CoDi
3. Recibir webhooks de confirmación de pago

No puedes llamar a la API directamente desde el navegador por seguridad.
```

---

**¿Cómo configuro mi webhook?**
```
1. Crea un endpoint HTTPS público en tu servidor (ej: https://tu-dominio.com/webhook/codi)
2. Implementa la lógica para recibir notificaciones POST
3. SIEMPRE verifica la firma digital antes de procesar
4. Responde con status 200 OK para confirmar recepción
5. Configura esta URL en tu panel de Banxico
```

---

**¿Qué hago si no recibo las notificaciones de webhook?**
```
Verifica:
1. ✅ Tu webhook es accesible públicamente vía HTTPS
2. ✅ Tu servidor responde con 200 OK
3. ✅ No hay firewall bloqueando las peticiones de Banxico
4. ✅ Tu certificado SSL es válido
5. ✅ Los logs de tu servidor para ver si las peticiones están llegando
```

---

**¿Puedo probar la API sin credenciales de Banxico?**
```
Puedes explorar la documentación y ver ejemplos de código, pero para hacer peticiones
reales necesitas credenciales válidas de Banxico. No ofrecemos un entorno sandbox público.
```

---

**¿Esta API funciona en otros países además de México?**
```
No. CoDi es específico del sistema bancario mexicano y solo funciona con instituciones
financieras registradas en Banxico.
```

---

**¿Cómo reporto un bug o solicito una nueva función?**
```
Puedes reportar bugs o solicitar funciones en nuestro repositorio de GitHub:
https://github.com/tu-usuario/codi-api/issues
```

---

**¿Cómo contribuyo al proyecto?**
```
¡Las contribuciones son bienvenidas! Lee nuestra guía de contribución:
https://github.com/tu-usuario/codi-api/blob/main/CONTRIBUTING.md
```

---

**¿Cómo reporto una vulnerabilidad de seguridad?**
```
Por favor NO reportes vulnerabilidades de seguridad públicamente.
Envía un reporte confidencial siguiendo nuestra política de seguridad:
https://github.com/tu-usuario/codi-api/blob/main/SECURITY.md
```

---

**¿Cuál es la diferencia entre el plan gratuito y el plan dedicado?**
```
Plan Gratuito (Servidor Compartido):
- Compartes recursos con otros usuarios
- No hay garantía de SLA
- Soporte comunitario
- Ideal para proyectos pequeños y testing

Plan Dedicado ($500 MXN/mes):
- Servidor exclusivo para ti
- SLA 99.9% uptime garantizado
- Soporte prioritario por email
- Monitoreo 24/7
- Ideal para negocios que dependen de alta disponibilidad

Ambos planes tienen acceso completo a todas las funcionalidades de la API.
```

---

**¿Puedo cambiar de plan después?**
```
Sí, puedes actualizar o bajar de plan en cualquier momento sin penalización.
Los cambios se aplican de forma inmediata.
```

---

**¿Qué es auto-hosting y cómo funciona?**
```
Auto-hosting significa que puedes descargar el código de esta API (es 100% código
abierto) e instalarlo en tus propios servidores.

Ventajas:
✅ Control total de tu infraestructura
✅ Sin costos mensuales de hosting
✅ Puedes personalizar el código según tus necesidades
✅ Tus datos permanecen en tu servidor

Requisitos:
- Certificarte directamente con Banxico (2-4 semanas)
- Servidor con Node.js, HTTPS y dominio público
- Conocimientos técnicos de DevOps
- Capacidad de mantener seguridad y actualizaciones

Consulta nuestra guía de auto-hosting para más detalles.
```

---

**¿Cómo me certifico directamente con Banxico?**
```
El proceso de certificación con Banxico incluye:

1. Registro en el portal de Banxico
2. Validación de identidad (KYC)
3. Solicitud de certificados digitales RSA
4. Configuración de webhook público (HTTPS)
5. Pruebas de integración supervisadas
6. Aprobación y emisión de API key de producción

Duración: 2-4 semanas aproximadamente

Puedes iniciar el proceso en: https://www.banxico.org.mx/codi/

💡 Tip: Si solo quieres probar CoDi rápidamente, usa nuestro plan gratuito.
La certificación directa es recomendable solo si necesitas control total.
```

---

**¿Por qué debería donar al proyecto?**
```
Este proyecto es 100% gratuito y de código abierto. No hay características
premium bloqueadas ni restricciones.

Las donaciones nos ayudan a:
- Mantener servidores y infraestructura
- Mejorar la documentación
- Desarrollar nuevas funcionalidades
- Proporcionar soporte a la comunidad
- Mantener el proyecto actualizado y seguro

Si esta API te ahorra tiempo o te genera valor, considera apoyarnos para que
podamos seguir manteniéndola gratuita para todos.
```

---

**¿Puedo usar esta API comercialmente?**
```
¡Sí! La licencia Apache 2.0 permite uso comercial sin restricciones.

Puedes:
✅ Usar la API en productos comerciales
✅ Cobrar a tus clientes por servicios que usen esta API
✅ Modificar el código para tus necesidades
✅ Redistribuir el código (manteniendo la licencia)

No necesitas pagar regalías ni pedir permiso. Solo debes mantener los avisos
de licencia en el código.
```

---

**¿Hay límite de transacciones en el plan gratuito?**
```
No. No hay límite de transacciones en ningún plan.

Sin embargo, el plan gratuito comparte recursos, por lo que si tienes
volúmenes muy altos (miles de transacciones por hora), te recomendamos
el plan dedicado para garantizar rendimiento constante.
```

---

**¿Qué pasa si mi servidor dedicado se cae?**
```
En el plan dedicado tenemos SLA 99.9% uptime, lo que significa:

- Monitoreo 24/7 automático
- Alertas inmediatas si hay problemas
- Failover automático en la mayoría de casos
- Soporte prioritario para resolución rápida

Si el downtime es causado por nosotros y excede el SLA, recibirás
crédito proporcional en tu factura mensual.

El plan empresarial ofrece SLA aún más alto (hasta 99.99%) con
redundancia multi-servidor.
```

---

### Estado del Sistema

**Título:**
```
Estado del Sistema
```

**Estado Actual:**
```
[Badge grande verde/amarillo/rojo]
🟢 Todos los Sistemas Operativos
```

**Última Actualización:**
```
20 de Octubre, 2025 - 14:30:00 GMT-6
```

---

**Componentes:**

| Componente | Estado | Tiempo de Respuesta |
|------------|--------|---------------------|
| API CoDi | 🟢 Operativo | 45ms |
| Banxico | 🟢 Operativo | 320ms |
| Base de Datos | 🟢 Operativo | 12ms |
| Webhooks | 🟢 Operativo | - |

---

**Uptime (Últimos 90 días):**
```
99.97% de disponibilidad
```

**Gráfica de barras:**
```
[Representación visual de uptime por día]
```

---

**Incidentes Recientes:**

**15 de Octubre, 2025**
```
🟡 Degradación del servicio
Duración: 23 minutos
Causa: Latencia elevada en Banxico
Estado: Resuelto
```

**3 de Octubre, 2025**
```
🔴 Interrupción del servicio
Duración: 1 hora 12 minutos
Causa: Mantenimiento programado de Banxico
Estado: Resuelto
```

---

**Mantenimientos Programados:**
```
No hay mantenimientos programados en este momento.
```

**Suscribirse a actualizaciones:**
```
[Campo de email]
[Botón: Suscribirse]
```

---

## 6. MENSAJES Y NOTIFICACIONES

### Notificaciones Toast

**Éxito:**
```
✅ Código QR generado exitosamente
✅ Notificación push enviada
✅ Código copiado al portapapeles
✅ API key guardada localmente
```

**Error:**
```
❌ Error al generar código QR
❌ API key inválida
❌ Error de conexión con el servidor
❌ No se pudo copiar al portapapeles
```

**Advertencia:**
```
⚠️ Tu API key está por expirar
⚠️ Has alcanzado el 80% de tu límite diario
⚠️ Este folio expirará en 2 horas
```

**Información:**
```
ℹ️ Procesando solicitud...
ℹ️ Conectando con Banxico...
ℹ️ Generando código QR...
```

---

### Mensajes de Confirmación

**Antes de copiar API key:**
```
Estás a punto de copiar tu API key al portapapeles.

⚠️ Advertencia: No compartas tu API key con nadie ni la pegues en lugares públicos.

¿Deseas continuar?
[Cancelar] [Copiar API Key]
```

---

### Mensajes de Validación en Tiempo Real

**Campo Monto:**
```
❌ El monto debe ser mayor a $0.00
❌ El monto no puede exceder $8,000.00
❌ Usa formato decimal (ejemplo: 1500.00)
```

**Campo Teléfono:**
```
❌ Debe ser un número de 10 dígitos
❌ Solo números, sin espacios ni guiones
```

**Campo Email:**
```
❌ Formato de email inválido
```

**Campo Concepto:**
```
❌ El concepto es requerido
❌ Máximo 140 caracteres (quedan 25)
```

---

## 7. TEXTOS DE NAVEGACIÓN

### Menú Principal

```
- Inicio
- Playground
- Documentación
  - Guía de Inicio
  - Referencia API
  - Ejemplos de Código
  - Seguridad
  - Casos de Uso
- Planes
  - Servidor Compartido (Gratis)
  - Servidor Dedicado ($500/mes)
  - Solución Empresarial
  - Comparar Planes
- Herramientas
  - Instituciones
  - Generador de Código
- Desarrolladores
  - Certificación con Banxico
  - Auto-hosting
  - Guía Técnica
- Soporte
  - FAQ
  - Estado del Sistema
  - GitHub
- Apoyar ❤️
```

---

### Breadcrumbs

```
Inicio > Documentación > Referencia API > Generar QR
Inicio > Playground > Generar Código QR
Inicio > Herramientas > Instituciones Bancarias
```

---

## 8. CALL TO ACTIONS (CTAs)

### Botones Primarios
```
Comenzar Ahora
Generar Código QR
Enviar Notificación
Consultar Estado
Probar API
```

### Botones Secundarios
```
Ver Documentación
Más Información
Ir a GitHub
Copiar Código
Descargar QR
```

### Links
```
Leer más →
Ver ejemplo →
Consultar tabla →
Ir a documentación →
```

---

## 9. METADATA Y SEO

### Página de Inicio
```
Título: CoDi API - API de Pagos Digitales para México
Descripción: API RESTful de código abierto para generar códigos QR y notificaciones push de CoDi integrado con Banxico. Simple, segura y documentada.
Keywords: codi, api, pagos digitales, mexico, banxico, qr, código abierto, open source
```

### Playground
```
Título: API Playground - Prueba CoDi API en Vivo
Descripción: Prueba la API CoDi en tiempo real. Genera códigos QR, envía notificaciones push y consulta pagos sin escribir código.
```

### Documentación
```
Título: Documentación - CoDi API
Descripción: Documentación completa de la API CoDi. Guías de inicio, referencia de endpoints, ejemplos de código y mejores prácticas.
```

---

## 10. MICROCOPY

### Tooltips
```
[Hover sobre API Key]: "Guarda tu API key de forma segura. Nunca la compartas públicamente."
[Hover sobre Monto]: "Monto en pesos mexicanos (MXN). Máximo $8,000 por transacción."
[Hover sobre ícono de info]: "Haz clic para más información"
[Hover sobre botón copiar]: "Copiar al portapapeles"
```

### Placeholders
```
Buscar institución...
Ingresa tu API key...
Ejemplo: 5512345678
Ej: Pago de factura #12345
```

### Labels de Formulario
```
* Campo requerido
(opcional)
Máx. 140 caracteres
Solo números
Formato: email@ejemplo.com
```

---

## 11. PÁGINAS DE ERROR

### 404 - Página No Encontrada
```
Título: Página No Encontrada

Oops! Esta página no existe.

La página que buscas no se encuentra disponible.
Puede que haya sido movida o eliminada.

[Botón: Volver al Inicio]
[Link: Ver Documentación]
```

### 500 - Error del Servidor
```
Título: Error del Servidor

Algo salió mal de nuestro lado.

Estamos trabajando para resolver el problema.
Por favor intenta nuevamente en unos momentos.

[Botón: Reintentar]
[Link: Ver Estado del Sistema]
```

### Mantenimiento
```
Título: Mantenimiento Programado

El sitio está en mantenimiento.

Volveremos pronto. Estamos actualizando el sistema para mejorar tu experiencia.

Tiempo estimado: 30 minutos

[Link: Ver Estado del Sistema]
```

---

## NOTAS FINALES

### Tono y Voz

**Características:**
- **Profesional pero accesible**: No uses jerga excesiva
- **Claro y directo**: Ve al punto rápidamente
- **Orientado a desarrolladores**: Asume conocimiento técnico básico
- **Útil y educativo**: Explica el "por qué", no solo el "cómo"
- **Honesto**: No ocultes limitaciones o requisitos

**Evita:**
- Lenguaje muy formal o corporativo
- Exceso de emojis (usa con moderación)
- Términos ambiguos como "pronto", "fácil", "rápido"
- Promesas que no puedas cumplir

---

### Adaptaciones por Contexto

**Mensajes de error:**
- Sé específico sobre qué salió mal
- Proporciona pasos claros para resolver
- Incluye links a documentación relevante

**Documentación técnica:**
- Usa ejemplos de código reales
- Incluye casos de uso comunes
- Anticipa preguntas frecuentes

**Marketing/Homepage:**
- Enfoca en beneficios, no solo características
- Usa casos de uso reales
- Demuestra valor rápidamente

---

## 📝 Changelog y Actualizaciones

### Versión 2.0 - Modelo Open Core y Énfasis en Beneficios Clave

**Fecha:** Octubre 2025

**Cambios Principales:**

#### ✨ Nuevas Secciones Agregadas:

1. **Sección de Planes y Precios** (Homepage)
   - Plan Gratuito: Servidor compartido $0/mes
   - Plan Dedicado: Servidor dedicado $500 MXN/mes
   - Plan Empresarial: Soluciones personalizadas
   - Tabla comparativa de características
   - Énfasis en modelo "Open Core"

2. **Sección de Certificación con Banxico** (Homepage + Documentación)
   - Guía para certificarse directamente
   - Proceso paso a paso (2-4 semanas)
   - Links a portal de Banxico
   - Información sobre auto-hosting
   - Recursos para desarrolladores

3. **Sección de Donaciones y Sponsors** (Homepage)
   - Donaciones únicas ($50-$1000+ MXN)
   - Programa de sponsors mensuales ($100-$2500+ MXN)
   - Beneficios por nivel de sponsor
   - Formas de contribuir sin costo
   - Sección de transparencia de uso de fondos
   - Reconocimiento a sponsors

#### 🎯 Énfasis en Beneficios Clave:

**Agregado destacado en Hero Section:**
- ✅ 100% Código Abierto
- 💰 Sin Comisiones por Transacción
- ⚡ Dinero Disponible al Instante

**Nueva sección "Por Qué Elegir CoDi":**
- Explicación detallada de beneficio sin comisiones
- Énfasis en transferencias instantáneas
- Destacar transparencia de código abierto

#### 📚 Actualizaciones en FAQ:

**Nuevas preguntas agregadas:**
- ¿CoDi cobra comisiones por transacción? (Respuesta: NO)
- ¿Cuánto tiempo tarda en llegar el dinero? (Respuesta: INMEDIATO)
- ¿Cuál es la diferencia entre planes?
- ¿Puedo cambiar de plan después?
- ¿Qué es auto-hosting y cómo funciona?
- ¿Cómo me certifico directamente con Banxico?
- ¿Por qué debería donar al proyecto?
- ¿Puedo usar esta API comercialmente? (Respuesta: SÍ)
- ¿Hay límite de transacciones en el plan gratuito? (Respuesta: NO)
- ¿Qué pasa si mi servidor dedicado se cae? (SLA 99.9%)

**Preguntas actualizadas:**
- ¿Necesito una cuenta en Banxico? (ahora incluye opciones de planes)
- ¿Cuánto cuesta usar CoDi? (ahora incluye 3 planes detallados)

#### 🎨 Nuevas Imágenes Necesarias (15 adicionales):

**Íconos de Planes:**
- icon-free.svg - Plan gratuito
- icon-dedicated.svg - Plan dedicado
- icon-enterprise.svg - Plan empresarial

**Íconos de Beneficios:**
- icon-no-fees.svg - Sin comisiones
- icon-instant.svg - Dinero instantáneo
- icon-open-source.svg - Código abierto

**Diagramas:**
- banxico-certification-flow.svg - Proceso de certificación
- self-hosting-diagram.svg - Arquitectura auto-hosting
- transparency-chart.svg - Gráfica de uso de donaciones

**Íconos de Donaciones:**
- icon-donate.svg - Donaciones
- icon-sponsor.svg - Sponsors

**Badges:**
- badge-apache-license.svg
- badge-open-source.svg
- badge-no-fees.svg
- badge-instant.svg

#### 🧭 Actualizaciones en Navegación:

**Menú Principal actualizado:**
- Nueva sección "Planes" con 3 subsecciones
- Nueva sección "Desarrolladores" (Certificación, Auto-hosting, Guía Técnica)
- Nuevo item "Apoyar ❤️"

**Footer actualizado:**
- Agregado "Planes y Precios" en Producto
- Agregado "Certificación Banxico" en Recursos
- Agregado "Apoyar el Proyecto" en Comunidad

#### 💬 Nuevos CTAs:

**Planes:**
- "Comenzar Gratis"
- "Contratar Ahora"
- "Contactar Ventas"

**Certificación:**
- "Ir al Portal de Banxico"
- "Ver Guía de Certificación"
- "Documentación de Auto-hosting"

**Donaciones:**
- "Donar Ahora"
- "Ser Sponsor Mensual"
- "Ver Reporte de Transparencia"

#### 📊 Estadísticas del Documento:

- **Total de páginas/secciones:** 11 principales
- **Total de imágenes necesarias:** 33 (de las cuales 11 son prioridad alta)
- **Idioma:** 100% español
- **Palabras aproximadas:** ~15,000
- **Ejemplos de código:** 8 lenguajes/herramientas
- **Preguntas en FAQ:** 25+

---

## 🎯 Mensajes Clave para el Frontend

**Lo que DEBE quedar muy claro al usuario:**

1. **Código 100% Abierto:** Apache 2.0, sin restricciones, auditable
2. **Sin Comisiones:** CoDi no cobra comisión por transacción (0%)
3. **Dinero Inmediato:** Sin delays, disponible al instante
4. **Plan Gratuito Real:** Gratis para siempre, sin trampas
5. **Control Total:** Opción de auto-hosting si quieren
6. **Comercialmente Viable:** Pueden usarlo para hacer negocio

**Diferenciadores vs. Competencia:**
- Stripe/PayPal: Cobran 3-4% comisión → CoDi 0%
- PayPal: Dinero disponible en 2-3 días → CoDi instantáneo
- APIs propietarias: Código cerrado → CoDi abierto
- Servicios de pago: Lock-in del proveedor → CoDi permite auto-hosting

---

¡Este documento contiene todo el contenido necesario para construir el frontend de CoDi API!
