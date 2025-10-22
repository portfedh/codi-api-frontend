# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

**Development server:**
```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript compilation + production build
npm run preview  # Preview production build locally
```

**Code Quality:**
```bash
npm run lint     # Run ESLint on all files
```

## Project Overview

This is the **frontend application** for the CoDi API project - a web interface for testing and documenting a Mexican payment API that integrates with Banxico (Mexican Central Bank).

**Backend Repository:** The actual CoDi API (backend) is in a separate repository. Reference files from the backend are stored in `/context/` for understanding the API architecture and endpoints.

**Tech Stack:**
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 4
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

**Key API Endpoints** (Backend at `http://localhost:3000`):
- `/v2/codi/qr` - Generate QR payment codes
- `/v2/codi/push` - Send push payment notifications to mobile
- `/v2/codi/consulta` - Query payment status by folio/reference
- `/v2/health` - Backend health check

**Institution Data:**
The file `/context/institutions.js` contains production bank/institution codes used in payment routing. This data should be converted to JSON and exposed in `/public/data/institutions.json` for frontend dropdown menus and lookup tools.

**Backend Context Files** (in `/context/`):
- `backend-CLAUDE.md` - Backend architecture overview
- `backend-README.md` - Backend documentation
- `institutions.js` - Financial institution codes (needs JSON conversion)
- `database/schema.sql` - Database schema reference
- `API_EXAMPLES.md` - Example API requests/responses

## Project Structure

```
/
├── src/                    # Application source code
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── components/        # React components (to be created)
│   ├── pages/             # Page components (to be created)
│   ├── services/          # API client & services (to be created)
│   ├── hooks/             # Custom React hooks (to be created)
│   ├── utils/             # Helper functions (to be created)
│   └── types/             # TypeScript types (to be created)
├── public/                # Static assets
├── docs/                  # Planning & roadmap documents
│   ├── FRONTEND_ROADMAP.md    # Complete development roadmap
│   ├── NEXT_STEPS.md          # Immediate action items & tech decisions
│   ├── FRONTEND_CONTENT.md    # Spanish content + image requirements
│   └── ARCHIVOS_PARA_FRONTEND.md  # File migration checklist
├── context/               # Backend reference files (read-only)
│   ├── backend-CLAUDE.md  # Backend architecture
│   ├── institutions.js    # Institution codes (convert to JSON)
│   └── database/          # Database schema reference
└── package.json           # Dependencies & scripts
```

## Development Workflow

**Adding New Dependencies:**
1. Install with npm: `npm install <package>`
2. Verify in package.json
3. Test that dev server still works

**API Integration Pattern:**
All API calls should go through a centralized API client (to be created in `src/services/api.ts`) using Axios with:
- Base URL from environment variable `VITE_API_URL`
- API key header management (`x-api-key`)
- Request/response interceptors for logging
- Error handling with proper types

**Form Validation:**
Use Zod schemas with React Hook Form for type-safe validation:
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

**Environment Variables:**
All environment variables must be prefixed with `VITE_` to be accessible in the frontend:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

**TypeScript Configuration:**
- Strict mode enabled
- No unused locals/parameters allowed
- Target: ES2022
- Module: ESNext with bundler resolution
- JSX: react-jsx (React 19 automatic runtime)

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

**Completed:**
- Project initialization with Vite + React + TypeScript
- Core dependencies installed (Tailwind, React Router, React Hook Form, TanStack Query, etc.)
- Basic project structure created
- Documentation files migrated from backend

**Next Steps:**
See `/docs/NEXT_STEPS.md` for the complete Stage 1 development checklist. Priority tasks:
1. Create basic layout components (Header, Footer, Container)
2. Set up React Router with routes for Home, Playground, Docs
3. Configure API client in `src/services/api.ts`
4. Build homepage with hero section and quick start CTAs
5. Create QR form in playground (highest priority)
6. Add Push notification form
7. Add payment status query form

## Design Principles

1. **Developer-First**: Every feature should make API integration easier
2. **Self-Service**: Users should find answers without contacting support
3. **Transparent**: Show errors, status, and data clearly
4. **Accessible**: WCAG 2.1 AA compliance minimum
5. **Performance**: Fast loading, responsive interactions
6. **Progressive**: Start simple, reveal complexity as needed

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
