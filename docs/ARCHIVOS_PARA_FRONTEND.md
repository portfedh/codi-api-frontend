# 📋 Archivos a Copiar al Repositorio del Frontend

Este documento lista todos los archivos del proyecto backend que debes copiar al nuevo repositorio del frontend, con instrucciones sobre dónde colocarlos y si necesitan adaptación.

---

## ✅ Checklist de Archivos a Copiar

### 📄 Documentos de Planificación Frontend (Prioridad: CRÍTICA)

**Origen:** `/` (raíz del proyecto backend)
**Destino:** `/docs/` (en el nuevo repo frontend)

- [ ] `FRONTEND_ROADMAP.md` → `/docs/FRONTEND_ROADMAP.md`

  - Plan completo de desarrollo por etapas
  - Copiar tal cual ✓

- [ ] `NEXT_STEPS.md` → `/docs/NEXT_STEPS.md`

  - Decisiones tomadas y setup técnico
  - Copiar tal cual ✓

- [ ] `FRONTEND_CONTENT.md` → `/docs/FRONTEND_CONTENT.md`
  - Todo el contenido en español + lista de imágenes
  - Copiar tal cual ✓

---

### ⚙️ Configuración y Datos (Prioridad: ALTA)

**Origen:** `/config/`
**Destino:** `/context/` o `/public/data/` (en el nuevo repo)

- [ ] `config/institutions.js` → `/context/institutions.js`
  - Lista de instituciones bancarias con códigos
  - Necesario para dropdown en playground
  - IMPORTANTE: Considerar convertir a JSON para facilitar uso en frontend
  - Acción: Copiar + crear versión JSON en `/public/data/institutions.json`

---

### 📚 Documentación del Backend (Prioridad: ALTA)

**Origen:** `/` (raíz del proyecto backend)
**Destino:** `/context/` (en el nuevo repo)

- [ ] `CLAUDE.md` → `/context/backend-CLAUDE.md`

  - Información sobre arquitectura del backend
  - Comandos útiles
  - Cómo funciona la API
  - Copiar tal cual, renombrar para evitar confusión ✓

- [ ] `README.md` → `/context/backend-README.md`
  - Documentación completa del backend
  - Entender el proyecto completo
  - Copiar y renombrar ✓
  - NOTA: Crear un README.md NUEVO para el frontend

---

### ⚖️ Licencias y Legal (Prioridad: ALTA)

**Origen:** `/` (raíz del proyecto backend)
**Destino:** `/` (raíz del nuevo repo)

- [ ] `LICENSE` → `/LICENSE`

  - Apache License 2.0 (inglés)
  - Copiar tal cual ✓
  - Mantener la misma licencia

- [ ] `LICENSE.es.md` → `/LICENSE.es.md`

  - Apache License 2.0 (español)
  - Copiar tal cual ✓

- [ ] `licenses/THIRD-PARTY-LICENSES.md` → `/context/backend-THIRD-PARTY-LICENSES.md`

  - Licencias de dependencias del backend
  - Copiar para referencia
  - NOTA: El frontend tendrá sus propias dependencias, crear archivo nuevo

- [ ] `licenses/.licensecheckrc.json` → `/licenses/.licensecheckrc.json`
  - Configuración de verificación de licencias
  - Copiar y adaptar para dependencias del frontend
  - Cambiar allowedLicenses si es necesario

---

### 🤝 Guías de Comunidad (Prioridad: ALTA)

**Origen:** `/` (raíz del proyecto backend)
**Destino:** `/` (raíz del nuevo repo)

- [ ] `CODE_OF_CONDUCT.md` → `/CODE_OF_CONDUCT.md`

  - Código de conducta (inglés)
  - Copiar tal cual ✓

- [ ] `CODE_OF_CONDUCT.es.md` → `/CODE_OF_CONDUCT.es.md`

  - Código de conducta (español)
  - Copiar tal cual ✓

- [ ] `CONTRIBUTING.md` → `/CONTRIBUTING.md`

  - Guía de contribución (inglés)
  - Copiar y ADAPTAR para frontend
  - Cambiar tests de Jest por tests del frontend (Vitest/Jest)
  - Actualizar comandos (npm run dev, npm run build, etc.)

- [ ] `CONTRIBUTING.es.md` → `/CONTRIBUTING.es.md`

  - Guía de contribución (español)
  - Copiar y ADAPTAR para frontend
  - Aplicar mismos cambios que versión inglesa

- [ ] `SECURITY.md` → `/SECURITY.md`

  - Política de seguridad (inglés)
  - Copiar tal cual o adaptar levemente ✓
  - Asegurar que email de contacto sea el mismo

- [ ] `SECURITY.es.md` → `/SECURITY.es.md`
  - Política de seguridad (español)
  - Copiar tal cual o adaptar levemente ✓

---

### 📊 Base de Datos (Prioridad: MEDIA)

**Origen:** `/database/`
**Destino:** `/context/database/` (en el nuevo repo)

- [ ] `database/schema.sql` → `/context/database/schema.sql`

  - Schema de Supabase
  - Útil para entender estructura de datos
  - Copiar para referencia ✓

- [ ] `database/database_schema.png` → `/context/database/database_schema.png`
  - Diagrama visual del schema
  - Útil para documentación
  - Copiar para referencia ✓

---

### 🧪 Ejemplos y Tests (Prioridad: MEDIA)

**Origen:** `/tests/` o `/examples/` (si existen)
**Destino:** `/context/api-examples/` (en el nuevo repo)

- [ ] Ejemplos de requests/responses (si existen)

  - Buscar en `/tests/` o documentación
  - Copiar para saber qué esperar de la API
  - Útil para crear mocks en desarrollo

- [ ] Postman collection (si existe)
  - Archivo `.json` de Postman
  - Útil para probar API durante desarrollo

---

### 🔧 Configuración (Prioridad: BAJA - Solo Referencia)

**Origen:** `/` (raíz del proyecto backend)
**Destino:** `/context/` (en el nuevo repo)

- [ ] `package.json` → `/context/backend-package.json`

  - Solo para referencia
  - Ver versiones de Node.js
  - Información del proyecto
  - NO usar para frontend (crear uno nuevo)

- [ ] `.env.example` (si existe) → `/context/backend-env.example`

  - Variables de entorno del backend
  - Solo para referencia
  - Crear `.env.example` NUEVO para frontend

- [ ] `.gitignore` → NO copiar directamente
  - Usar como referencia
  - Crear `.gitignore` NUEVO específico para frontend (React/Vite)

---

## 📁 Estructura del Nuevo Repositorio Frontend

Así debería verse después de copiar todo:

```
codi-api-frontend/
│
├── docs/                                   # Planificación del frontend
│   ├── FRONTEND_ROADMAP.md               ← Copiar. Done
│   ├── NEXT_STEPS.md                     ← Copiar. Done
│   └── FRONTEND_CONTENT.md               ← Copiar. Done
│
├── context/                               # Archivos del backend para referencia
│   ├── backend-CLAUDE.md                 ← Copiar y renombrar. Done
│   ├── backend-README.md                 ← Copiar y renombrar. Done
│   ├── backend-package.json              ← Copiar y renombrar. Done
│   ├── backend-env.example               ← Copiar y renombrar. Done
│   ├── backend-THIRD-PARTY-LICENSES.md   ← Copiar y renombrar. Done
│   ├── institutions.js                   ← Copiar. Done
│   ├── database/
│   │   ├── schema.sql                    ← Copiar. Done
│   │   └── database_schema.png           ← Copiar. Done
│   └── api-examples/                     ← Copiar. Done
│       └── ...
│
├── public/
│   └── data/
│       └── institutions.json             ← CREAR (convertir de institutions.js)
│
├── licenses/                              # Compliance de licencias
│   └── .licensecheckrc.json              ← Copiar y adaptar
│
├── src/                                   # Código del frontend (crear después)
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── ...
│
├── LICENSE                                ← Copiar. Done
├── LICENSE.es.md                          ← Copiar. Done
├── CODE_OF_CONDUCT.md                     ← Copiar. Done
├── CODE_OF_CONDUCT.es.md                  ← Copiar. Done
├── CONTRIBUTING.md                        ← Copiar y adaptar. Copiado sin adaptar
├── CONTRIBUTING.es.md                     ← Copiar y adaptar. Copiado sin adaptar
├── SECURITY.md                            ← Copiar. Done
├── SECURITY.es.md                         ← Copiar. Done
├── README.md                              ← CREAR nuevo
├── .gitignore                             ← CREAR nuevo
├── .env.example                           ← CREAR nuevo
└── package.json                           ← CREAR con Vite
```

---

## 🆕 Archivos Nuevos a Crear en el Frontend

Estos NO existen en el backend, debes crearlos desde cero:

### Alta Prioridad

- [ ] `README.md` - Nuevo para el frontend

  - Descripción del proyecto frontend
  - Instrucciones de instalación
  - Comandos de desarrollo
  - Tecnologías usadas
  - Link al backend

- [ ] `.gitignore` - Específico para frontend

  ```
  # Dependencias
  node_modules/

  # Producción
  dist/
  build/

  # Variables de entorno
  .env
  .env.local
  .env.production.local

  # IDEs
  .vscode/
  .idea/

  # OS
  .DS_Store

  # Logs
  *.log
  npm-debug.log*

  # Testing
  coverage/
  ```

- [ ] `.env.example` - Variables de entorno del frontend

  ```env
  # Backend API URL
  VITE_API_URL=http://localhost:3000

  # App Info
  VITE_APP_NAME=CoDi API
  VITE_APP_VERSION=1.0.0

  # GitHub (opcional)
  VITE_GITHUB_REPO=https://github.com/usuario/codi-api-frontend
  ```

### Media Prioridad

- [ ] `SETUP.md` - Guía de setup para desarrolladores

  - Prerrequisitos
  - Instalación paso a paso
  - Configuración del backend
  - Primer run
  - Troubleshooting

- [ ] `CHANGELOG.md` - Historial de versiones

  - Empezar con v1.0.0

- [ ] `licenses/THIRD-PARTY-LICENSES.md` - Nuevo para dependencias del frontend
  - Se generará con `npm run license-check`

---

## 🔄 Archivos que Necesitan Adaptación

### `CONTRIBUTING.md` / `CONTRIBUTING.es.md`

**Cambios necesarios:**

```diff
- npm test       # Run Jest test suite with coverage
+ npm test       # Run Vitest test suite with coverage

- npm run dev    # Start with nodemon for development
+ npm run dev    # Start Vite dev server

+ npm run build  # Build for production
+ npm run preview # Preview production build

- npm run license-check       # Show summary of all dependency licenses
+ npm run license-check       # Show summary of all dependency licenses
```

**Secciones a actualizar:**

- Comandos de desarrollo
- Testing (Jest → Vitest o lo que uses)
- Build process
- Estructura de carpetas (src/components vs controllers/utils)

---

### `licenses/.licensecheckrc.json`

**Posibles cambios:**

```json
{
  "allow": [
    "MIT",
    "Apache-2.0",
    "BSD-2-Clause",
    "BSD-3-Clause",
    "ISC",
    "0BSD",
    "CC0-1.0"
  ],
  "ignore": ["@types/*", "vite", "tailwindcss"]
}
```

**Nota:** Algunas dependencias de frontend pueden tener licencias diferentes a las del backend. Verifica y ajusta según sea necesario.

---

## 📝 Conversión: institutions.js → institutions.json

**Archivo original:** `config/institutions.js`

```javascript
module.exports = {
  "002": { name: "Banamex", type: "Banco" },
  "012": { name: "BBVA Bancomer", type: "Banco" },
  // ...
};
```

**Archivo convertido:** `public/data/institutions.json`

```json
{
  "002": { "code": "002", "name": "Banamex", "type": "Banco" },
  "012": { "code": "012", "name": "BBVA Bancomer", "type": "Banco" }
}
```

**O como array (más fácil para dropdowns):**

```json
[
  { "code": "002", "name": "Banamex", "type": "Banco" },
  { "code": "012", "name": "BBVA Bancomer", "type": "Banco" }
]
```

**Puedo hacer esta conversión cuando me lo pidas.**

---

## ✅ Checklist de Acciones Post-Copia

Después de copiar todos los archivos:

- [ ] Verificar que todos los archivos se copiaron correctamente
- [ ] Revisar archivos adaptados (CONTRIBUTING, .licensecheckrc.json)
- [ ] Crear archivos nuevos (README, .gitignore, .env.example)
- [ ] Convertir institutions.js a JSON
- [ ] Inicializar Git en el nuevo repo
- [ ] Crear primer commit
- [ ] Configurar remote de GitHub (si aplica)
- [ ] Verificar que .gitignore funciona (no subir .env, node_modules)

---

## 🚀 Siguiente Paso

Una vez copiados todos los archivos:

1. Inicializar proyecto Vite:

   ```bash
   cd codi-api-frontend
   npm create vite@latest . -- --template react-ts
   ```

2. Instalar dependencias base:

   ```bash
   npm install
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Instalar dependencias del proyecto:

   ```bash
   # Routing
   npm install react-router-dom

   # Forms & Validation
   npm install react-hook-form zod @hookform/resolvers

   # Data Fetching
   npm install @tanstack/react-query axios

   # QR Code
   npm install qrcode.react

   # Code Highlighting
   npm install react-syntax-highlighter
   npm install -D @types/react-syntax-highlighter

   # Utilities
   npm install clsx tailwind-merge date-fns
   ```

4. Configurar proyecto según `NEXT_STEPS.md`

---

## 📞 Necesitas Ayuda

Si cuando copies los archivos al nuevo repo necesitas ayuda con:

- Conversión de institutions.js a JSON
- Adaptación de CONTRIBUTING.md
- Creación de README.md para frontend
- Cualquier otra cosa

Solo pídemelo y te ayudo! 🚀

---

**Fecha de creación:** Octubre 2025
**Última actualización:** Octubre 2025
