# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

**Development server:**
```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # TypeScript compilation + production build
npm run preview      # Preview production build locally
```

**Code Quality:**
```bash
npm run lint         # Run ESLint on all files
```

## Project Overview

This is the **frontend application** for the CoDi API project - a web interface for testing and documenting a Mexican payment API that integrates with Banxico (Mexican Central Bank).

**Backend Repository:** The actual CoDi API (backend) is in a separate repository. Reference files from the backend are stored in `/context/` for understanding the API architecture and endpoints.

**Tech Stack:**
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 4 + clsx + tailwind-merge
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation
- **Data Fetching:** TanStack Query (React Query) + Axios
- **QR Codes:** qrcode.react
- **Code Display:** react-syntax-highlighter
- **Date Handling:** date-fns

## Project Architecture

**Project Purpose:**
Provide a developer-friendly web interface for:
1. **API Playground** - Interactive testing of CoDi API endpoints (QR generation, push notifications, payment status queries)
2. **Documentation** - Getting started guides, API reference, integration examples
3. **Developer Tools** - Institution lookup, code generators, request/response inspector
4. **Analytics Dashboard** - Usage statistics and request history (future)

**Development Phases:**
The project follows a multi-stage roadmap (see `/docs/FRONTEND_ROADMAP.md`):
- **Stage 1** (Current): Foundation & MVP - Homepage, playground forms, basic documentation
- **Stage 2**: Enhanced developer experience - live API tester, integration examples
- **Stage 3**: User management & analytics
- **Stage 4**: Production support - system status, security tools
- **Stage 5**: Community features

**Key API Endpoints:**

*CoDi Payment API* (`VITE_API_URL`):
- `/v2/codi/qr` - Generate QR payment codes
- `/v2/codi/push` - Send push payment notifications to mobile
- `/v2/codi/consulta` - Query payment status by folio/reference
- `/v2/health` - Backend health check

*Enrollment Backend API* (`VITE_BACKEND_URL` - Development: `http://0.0.0.0:3000` | Production: `https://codi-enrollment-backend.up.railway.app`):
- `POST /api/enrollment` - Submit enrollment form + upload documents
- `POST /api/contact` - Send contact form messages

**Institution Data:**
Financial institution codes are available in `/public/data/` for frontend use:
- `institutions.json` - Full institution data (code, name, type)
- `institutions-map.json` - Code-to-name lookup map
The original source file is in `/context/institutions.js`

**Backend Context Files** (in `/context/` - read-only reference):
- `backend-CLAUDE.md` - Backend architecture overview
- `backend-README.md` - Backend documentation
- `institutions.js` - Original financial institution codes (already converted to JSON)
- `database/schema.sql` - Database schema reference
- `API_EXAMPLES.md` - Example API requests/responses

**Additional Documentation:**
- `CODE_OF_CONDUCT.md` / `CODE_OF_CONDUCT.es.md` - Community guidelines
- `CONTRIBUTING.md` / `CONTRIBUTING.es.md` - Contribution guide
- `SECURITY.md` / `SECURITY.es.md` - Security policy
- `LICENSE` / `LICENSE.es.md` - MIT License
- `README.md` - Project overview and setup instructions

## Project Structure

```
/
├── src/                        # Application source code
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles + Tailwind directives
│   ├── components/             # React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Main navigation header
│   │   │   ├── Footer.tsx      # Footer with links
│   │   │   ├── Layout.tsx      # Page layout wrapper
│   │   │   └── Container.tsx   # Content container
│   │   ├── home/               # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhatIsCodiSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── OpenSourceSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── forms/              # API playground forms
│   │   │   ├── QRForm.tsx      # QR code generation form
│   │   │   ├── PushForm.tsx    # Push notification form
│   │   │   └── ConsultaForm.tsx # Payment status query form
│   │   ├── docs/               # Documentation components
│   │   │   ├── GettingStarted.tsx
│   │   │   ├── ApiReference.tsx
│   │   │   ├── ErrorCodes.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── ParamTable.tsx
│   │   │   └── DocSection.tsx
│   │   ├── tools/              # Developer tools
│   │   │   ├── InstitutionLookup.tsx
│   │   │   └── CodeGenerator.tsx
│   │   ├── enrollment/         # Enrollment flow components
│   │   │   ├── UserTypeSelector.tsx
│   │   │   ├── PersonalInfoForm.tsx
│   │   │   ├── CompanyInfoForm.tsx
│   │   │   └── DocumentUploadForm.tsx
│   │   └── common/             # Reusable components
│   │       ├── QRCodeDisplay.tsx
│   │       ├── JSONDisplay.tsx
│   │       ├── PaymentStatusDisplay.tsx
│   │       ├── StatusIndicator.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── Toast.tsx
│   │       └── ErrorBoundary.tsx
│   ├── pages/                  # Page components
│   │   ├── Home.tsx            # Homepage
│   │   ├── Playground.tsx      # API testing playground
│   │   ├── Docs.tsx            # Documentation page
│   │   ├── Tools.tsx           # Developer tools page
│   │   ├── Enrollment.tsx      # Multi-step enrollment form
│   │   └── NotFound.tsx        # 404 page
│   ├── services/               # API clients
│   │   └── api.ts              # Axios client + API methods
│   ├── hooks/                  # Custom React hooks
│   │   ├── useApiKey.ts        # API key management
│   │   ├── useHealthCheck.ts   # Backend health monitoring
│   │   └── useToast.tsx        # Toast notifications
│   ├── utils/                  # Helper functions
│   │   ├── validation.ts       # Zod schemas + validators
│   │   ├── clipboard.ts        # Copy to clipboard utility
│   │   └── codeTemplates.ts    # Code generation templates
│   ├── types/                  # TypeScript types
│   │   ├── api.ts              # API request/response types
│   │   ├── form.ts             # Form data types
│   │   └── institution.ts      # Institution data types
│   ├── config/                 # Configuration (empty, reserved)
│   └── assets/                 # Static assets (images, etc.)
├── public/                     # Static assets served by Vite
│   ├── data/                   # JSON data files
│   │   ├── institutions.json   # Institution list
│   │   └── institutions-map.json # Code lookup map
│   └── favicon/                # Favicon files
├── docs/                       # Planning & roadmap documents
│   ├── FRONTEND_ROADMAP.md     # Complete development roadmap
│   ├── NEXT_STEPS.md           # Immediate action items
│   ├── FRONTEND_CONTENT.md     # Spanish content
│   ├── ARCHIVOS_PARA_FRONTEND.md # File migration checklist
│   ├── CLAUDE_DEVELOPMENT_PLAN.md # Development plan
│   └── ENROLLMENT_BACKEND_SPEC.md # Enrollment backend spec
├── context/                    # Backend reference files (read-only)
│   ├── backend-CLAUDE.md       # Backend architecture
│   ├── backend-README.md       # Backend documentation
│   ├── institutions.js         # Original institution codes
│   ├── API_EXAMPLES.md         # Example requests/responses
│   └── database/               # Database schema reference
├── .env.example                # Environment variable template
└── package.json                # Dependencies & scripts
```

## Development Workflow

**Adding New Dependencies:**
1. Install with npm: `npm install <package>`
2. Verify in package.json
3. Test that dev server still works

**API Integration Pattern:**
All API calls go through a centralized API client using Axios (`src/services/api.ts`):

*CoDi Payment API Client:*
- Base URL from `VITE_API_URL` environment variable
- API key header management (`x-api-key`)
- Request/response interceptors for logging
- Typed error handling
- Methods: `generateQR()`, `sendPush()`, `checkStatus()`, `healthCheck()`

*Enrollment Backend Client:*
- Base URL from `VITE_BACKEND_URL` environment variable
- FormData handling for file uploads
- Methods: `submitEnrollment()`, `sendContact()`

**Form Validation:**
Use Zod schemas with React Hook Form for type-safe validation (see `src/utils/validation.ts`):
```typescript
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  apiKey: z.string().length(128),
  amount: z.number().positive(),
  // ... more fields
});
```

**Common Utility Functions:**
- `src/utils/clipboard.ts` - Copy text to clipboard with toast notification
- `src/utils/codeTemplates.ts` - Generate code examples in multiple languages
- `src/utils/validation.ts` - Zod schemas for all forms (QR, Push, Consulta, Enrollment)

**Custom Hooks:**
- `useApiKey()` - Manages API key in localStorage with validation
- `useHealthCheck()` - Monitors backend health status with polling
- `useToast()` - Toast notification system with auto-dismiss

**Styling Patterns:**
The project uses Tailwind CSS 4 with utility-first approach:
- Use `clsx` for conditional class names
- Use `tailwind-merge` (via `twMerge`) to merge conflicting Tailwind classes
- Common pattern: `className={clsx('base-classes', condition && 'conditional-classes')}`
- Global styles in `src/index.css`
- Icons from `lucide-react` package

**Environment Variables:**
All frontend environment variables must be prefixed with `VITE_` to be accessible in the client:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const backendUrl = import.meta.env.VITE_BACKEND_URL;
```

Available environment variables (see `.env.example`):
```bash
# CoDi Payment API (QR, Push, Consulta endpoints)
VITE_API_URL=http://localhost:3000

# Enrollment & Contact Backend
# Development: http://0.0.0.0:3000
# Production: https://codi-enrollment-backend.up.railway.app
VITE_BACKEND_URL=http://0.0.0.0:3000

# Application Information
VITE_APP_NAME=CoDi API
VITE_APP_VERSION=1.0.0
VITE_GITHUB_REPO=https://github.com/...
VITE_ENV=development
```

**TypeScript Configuration:**
- Strict mode enabled
- No unused locals/parameters allowed
- Target: ES2022
- Module: ESNext with bundler resolution
- JSX: react-jsx (React 19 automatic runtime)

## Common Development Tasks

**Starting the Application:**
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

**Testing Forms:**
1. Ensure the backend API is running (Development: `http://0.0.0.0:3000` | Production: `https://codi-enrollment-backend.up.railway.app`)
2. Start this frontend with `npm run dev`
3. Navigate to `/enrollment` to test the enrollment form
4. Navigate to the contact section on the homepage to test the contact form

**Working with Institution Data:**
- Institution data is loaded from `/public/data/institutions.json`
- Used in dropdowns for institution selection
- Institution lookup tool available at `/tools`

**Debugging Tips:**
- Check browser console for client-side errors
- Use React DevTools for component inspection
- Network tab shows API requests/responses
- Toast notifications show user-facing errors
- Check backend logs for API errors (separate backend repository)

## Important Context

**Spanish Content:**
The primary audience is Spanish-speaking developers in Mexico. UI text and documentation should be in Spanish. See `/docs/FRONTEND_CONTENT.md` for approved content and messaging.

**CoDi System:**
CoDi is Mexico's instant payment system operated by Banxico. This API provides:
- QR codes for point-of-sale payments
- Push notifications for mobile payment requests
- Payment status queries
- Webhook callbacks for payment confirmations

**Security Considerations:**
- API keys are 128-character hex strings managed by the backend
- Users provide their own API key (obtained from Banxico enrollment)
- API keys should be stored in localStorage for development convenience
- Never commit .env files with real credentials
- CORS is handled by the backend

## Current Development Status

**Stage 1 - Foundation & MVP (COMPLETE):**
- ✅ Project initialization with Vite + React + TypeScript
- ✅ All core dependencies installed and configured
- ✅ Complete project structure with organized directories
- ✅ Layout system (Header, Footer, Layout, Container)
- ✅ React Router setup with all main routes
- ✅ Homepage with all sections (Hero, Features, How It Works, Use Cases, etc.)
- ✅ All three playground forms (QR, Push, Consulta)
- ✅ API client with Axios (`src/services/api.ts`)
- ✅ Documentation pages (Getting Started, API Reference, Error Codes)
- ✅ Developer tools (Institution Lookup, Code Generator)
- ✅ Multi-step enrollment flow with document upload
- ✅ Backend API integration (separate repository)
- ✅ Custom hooks (useApiKey, useHealthCheck, useToast)
- ✅ Common components (QRCodeDisplay, JSONDisplay, Toast, etc.)
- ✅ Form validation with Zod schemas
- ✅ TypeScript types for API and forms
- ✅ Institution data converted to JSON in `/public/data/`

**Current Stage: Stage 2 - Enhanced Developer Experience**

**Next Priority Tasks:**
See `/docs/FRONTEND_ROADMAP.md` for complete Stage 2 features:
1. Advanced API playground features (request history, saved templates)
2. Interactive integration examples
3. Webhook testing tools
4. Enhanced error handling and debugging tools
5. Performance optimizations
6. Accessibility improvements (WCAG 2.1 AA compliance)

## Design Principles

1. **Developer-First**: Every feature should make API integration easier
2. **Self-Service**: Users should find answers without contacting support
3. **Transparent**: Show errors, status, and data clearly
4. **Accessible**: WCAG 2.1 AA compliance minimum
5. **Performance**: Fast loading, responsive interactions
6. **Progressive**: Start simple, reveal complexity as needed

## Deployment

**Static Site Deployment:**
This is a static frontend application that can be deployed to any static hosting service (Vercel, Netlify, Railway, etc.):
- Build command: `npm run build`
- Output directory: `dist`
- Build produces optimized static assets (HTML, CSS, JS)

**Required Environment Variables for Production:**
- `VITE_API_URL` - CoDi Payment API URL
- `VITE_BACKEND_URL` - Enrollment Backend URL (Production: `https://codi-enrollment-backend.up.railway.app`)
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version
- `VITE_GITHUB_REPO` - GitHub repository URL
- `VITE_ENV` - Environment (production)

**Build Output:**
- Vite builds to `/dist` directory
- Includes all static assets optimized for production
- Client-side routing requires SPA fallback configuration (serve `index.html` for all routes)

## Resources

**Planning Documents:**
- `/docs/FRONTEND_ROADMAP.md` - Complete multi-stage development plan
- `/docs/NEXT_STEPS.md` - Immediate action items and tech stack decisions
- `/docs/FRONTEND_CONTENT.md` - Spanish UI content and messaging

**Backend Reference:**
- `/context/backend-CLAUDE.md` - Backend API architecture
- `/context/backend-README.md` - Backend documentation

**External Documentation:**
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query)
