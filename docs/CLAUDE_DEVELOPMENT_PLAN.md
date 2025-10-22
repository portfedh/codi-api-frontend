# Claude's Development Plan - CoDi API Frontend

**Created:** October 21, 2025
**Status:** Ready to Start
**Approach:** Incremental development with review/commit after each stage

---

## Important Instructions

**🛑 STOP AND REVIEW AFTER EACH STAGE**

This plan is designed for incremental development:
1. Complete one stage at a time
2. Stop and present results to user for review
3. User reviews changes and commits to git
4. Only proceed to next stage after user approval

**DO NOT rush ahead to multiple stages without review.**

---

## Project Context

**What We're Building:**
A Spanish-language frontend for the CoDi API - an interactive web interface for testing and documenting a Mexican payment API that integrates with Banxico.

**Current Status:**
- ✅ Vite + React + TypeScript initialized
- ✅ All core dependencies installed
- ✅ Documentation migrated to `/docs/` and `/context/`
- ✅ Backend reference materials available
- ⏳ No actual frontend code written yet (just Vite template)

**Backend API:** `http://localhost:3000` (separate repository)
**Tech Stack:** React 19 + TypeScript + Vite 7 + Tailwind 4 + React Router 7 + TanStack Query + React Hook Form + Zod

---

## Stage 1: Foundation Setup ⏳

**Goal:** Set up the basic project infrastructure, configuration, and data files.

**Estimated Time:** 1-2 hours

### Tasks

- [ ] **1.1 Configure Tailwind CSS**
  - Create `tailwind.config.js` with proper content paths
  - Update `src/index.css` with Tailwind directives
  - Test that Tailwind works

- [ ] **1.2 Convert Institution Data**
  - Read `context/institutions.js`
  - Create `public/data/` directory
  - Convert to `public/data/institutions.json` (array format for dropdowns)
  - Create `public/data/institutions-map.json` (object format for lookups)

- [ ] **1.3 Set Up Environment Variables**
  - Create `.env` file with necessary variables
  - Update `.env.example` for documentation

- [ ] **1.4 Create Project Folder Structure**
  - Create `src/components/layout/`
  - Create `src/components/forms/`
  - Create `src/components/ui/`
  - Create `src/components/common/`
  - Create `src/pages/`
  - Create `src/services/`
  - Create `src/hooks/`
  - Create `src/utils/`
  - Create `src/types/`
  - Create `src/config/`

**Deliverables:**
- Working Tailwind CSS configuration
- Institutions data in JSON format (2 files)
- Environment variables configured
- Clean folder structure
- Updated `.gitignore` if needed

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 2: Core Infrastructure ⏳

**Goal:** Create the foundational code that all other features will use.

**Estimated Time:** 2-3 hours

### Tasks

- [ ] **2.1 TypeScript Types**
  - Create `src/types/api.ts` - API request/response types from API_EXAMPLES.md
  - Create `src/types/institution.ts` - Institution types
  - Create `src/types/form.ts` - Form data types

- [ ] **2.2 API Client Setup**
  - Create `src/services/api.ts` - Axios client configuration
  - Configure base URL from environment variable
  - Add API key header management function
  - Create typed methods: `generateQR()`, `sendPush()`, `checkStatus()`, `healthCheck()`
  - Add request/response interceptors for logging (optional)

- [ ] **2.3 React Router Configuration**
  - Update `src/main.tsx` with BrowserRouter
  - Create `src/App.tsx` with route configuration
  - Define routes: `/`, `/playground`, `/docs`, `/tools`, `*` (404)
  - Create placeholder page components in `src/pages/`

- [ ] **2.4 Layout Components**
  - Create `src/components/layout/Header.tsx` - Navigation bar
  - Create `src/components/layout/Footer.tsx` - Footer with links
  - Create `src/components/layout/Container.tsx` - Content wrapper
  - Create `src/components/layout/Layout.tsx` - Main layout wrapper
  - Make all layouts responsive (mobile-first)

**Deliverables:**
- TypeScript types for all API interactions
- Working API client with all methods
- React Router configured with all routes
- Basic layout components that work on all screen sizes
- Navigation between pages works

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 3: Homepage ⏳

**Goal:** Build a complete, polished homepage using Spanish content from FRONTEND_CONTENT.md.

**Estimated Time:** 3-4 hours

### Tasks

- [ ] **3.1 Hero Section**
  - Title: "API CoDi para Pagos Digitales en México"
  - Subtitle with value proposition
  - 3 value badges: código abierto, sin comisiones, dinero al instante
  - CTA buttons: "Comenzar Ahora", "Ver Documentación", "Probar API"
  - Status indicator (green dot + "Sistema Operativo")

- [ ] **3.2 What is CoDi Section**
  - Explanation of CoDi system
  - Why choose CoDi (3 benefits with icons)
  - Clean, readable layout

- [ ] **3.3 Main Features Section**
  - 4 feature cards: QR, Push, API, Security
  - Icons/graphics for each (can use emoji temporarily)
  - Descriptions from FRONTEND_CONTENT.md

- [ ] **3.4 How It Works Section**
  - 3-step process with numbered steps
  - Clear descriptions for each step

- [ ] **3.5 Use Cases Section**
  - 4 use case cards: E-commerce, POS, Services, Marketplaces
  - Brief descriptions

- [ ] **3.6 Open Source Section**
  - Badge/mention of Apache 2.0 license
  - Link to GitHub (placeholder or real if available)

- [ ] **3.7 Live Status Indicator**
  - Create `src/hooks/useHealthCheck.ts` - Custom hook using TanStack Query
  - Call `/v2/health` endpoint
  - Display real status in header/hero

**Deliverables:**
- Complete homepage with all sections
- Spanish content from FRONTEND_CONTENT.md
- Responsive design (mobile, tablet, desktop)
- Live health check integration
- Professional appearance with Tailwind styling

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 4: API Playground - QR Form ⏳

**Goal:** Create the most important feature - interactive QR code generation form.

**Estimated Time:** 3-4 hours

### Tasks

- [ ] **4.1 Playground Page Layout**
  - Create `src/pages/Playground.tsx` with tab/section structure
  - Create navigation between QR, Push, Consulta forms

- [ ] **4.2 QR Form Component**
  - Create `src/components/forms/QRForm.tsx`
  - Set up React Hook Form with Zod schema validation
  - Fields:
    - API Key (text input, 128 chars)
    - Amount (number input with 2 decimal validation)
    - Concept (text input, 1-40 ASCII chars)
    - Reference (text input, 1-7 digits, optional)
    - Institution (dropdown from institutions.json)
    - Expiration (text input or date picker)

- [ ] **4.3 Form Validation**
  - Create `src/utils/validation.ts` with Zod schemas
  - Validate all fields according to API requirements
  - Display field-level error messages

- [ ] **4.4 API Integration**
  - Submit form data to `/v2/codi/qr` using API client
  - Handle loading states
  - Handle success/error responses

- [ ] **4.5 QR Code Display**
  - Create `src/components/common/QRCodeDisplay.tsx`
  - Display base64 QR code image on success
  - Show formatted JSON response (syntax highlighted)
  - Add "Copy Response" button
  - Add "Download QR" button (optional)

- [ ] **4.6 API Key Persistence**
  - Create `src/hooks/useApiKey.ts` - localStorage hook
  - Auto-save API key to localStorage
  - Auto-load on component mount
  - Add "Clear API Key" button

- [ ] **4.7 Error Handling**
  - Display user-friendly error messages
  - Show validation errors from backend
  - Network error handling

**Deliverables:**
- Working QR generation form with full validation
- Real integration with backend `/v2/codi/qr`
- QR code displays correctly
- Response JSON shown with syntax highlighting
- API key persists across page refreshes
- Professional error handling and UX

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 5: API Playground - Push & Consulta Forms ⏳

**Goal:** Complete the API playground with the remaining two forms.

**Estimated Time:** 3-4 hours

### Tasks

- [ ] **5.1 Push Notification Form**
  - Create `src/components/forms/PushForm.tsx`
  - Similar structure to QR form
  - Additional field: Phone number (10 digits, validated)
  - Submit to `/v2/codi/push`
  - Display success response with folioCodi
  - Show formatted JSON response
  - Reuse API key from localStorage

- [ ] **5.2 Payment Status Query Form**
  - Create `src/components/forms/ConsultaForm.tsx`
  - Fields:
    - FolioCodi (10 or 20 chars)
    - Items per page (1-100)
    - Page number
    - Start date (YYYYMMDD or "0")
    - End date (YYYYMMDD or "0")
  - Submit to `/v2/codi/consulta`

- [ ] **5.3 Payment Status Display**
  - Create `src/components/common/PaymentStatusDisplay.tsx`
  - Parse and display payment status clearly
  - Show status badge (pending/completed/failed with colors)
  - Format transaction details
  - Display account information (masked)

- [ ] **5.4 Shared Components**
  - Create `src/components/ui/Button.tsx` - Reusable button
  - Create `src/components/ui/Input.tsx` - Form input wrapper
  - Create `src/components/ui/Select.tsx` - Dropdown wrapper
  - Create `src/components/ui/StatusBadge.tsx` - Status indicator
  - Refactor forms to use shared components

**Deliverables:**
- Working Push notification form
- Working payment status query form
- Clear display of payment status information
- Reusable UI components
- Consistent styling across all three forms
- All playground features fully functional

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 6: Developer Tools ⏳

**Goal:** Build helpful tools for developers using the API.

**Estimated Time:** 2-3 hours

### Tasks

- [ ] **6.1 Institution Lookup Tool**
  - Create `src/pages/Tools.tsx` with tabs
  - Create `src/components/tools/InstitutionLookup.tsx`
  - Load institutions from JSON
  - Implement search/filter functionality
  - Display in a table (code, name, type)
  - Add "Copy Code" button for each row
  - Filter toggle: Production / Beta / All

- [ ] **6.2 Code Examples Generator**
  - Create `src/components/tools/CodeGenerator.tsx`
  - Endpoint selector: QR / Push / Consulta
  - Language tabs: cURL / JavaScript / Python
  - Generate example code with user's API key pre-filled
  - Use react-syntax-highlighter for display
  - "Copy to Clipboard" button for each example
  - Pull API key from localStorage

- [ ] **6.3 Utility Functions**
  - Create `src/utils/clipboard.ts` - Copy to clipboard helper
  - Create `src/utils/codeTemplates.ts` - Code example templates
  - Add success toast notifications on copy

**Deliverables:**
- Searchable institution lookup table
- Code generator with 3 languages
- Copy to clipboard functionality
- Clean, developer-friendly UI
- Tools page fully functional

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 7: Documentation Pages ⏳

**Goal:** Create essential documentation for developers.

**Estimated Time:** 3-4 hours

### Tasks

- [ ] **7.1 Docs Page Structure**
  - Create `src/pages/Docs.tsx` with sidebar navigation
  - Section links: Getting Started, API Reference, Integration Guides, Error Codes

- [ ] **7.2 Getting Started Guide**
  - Create `src/components/docs/GettingStarted.tsx`
  - Content: Prerequisites, API key enrollment, first API call, response handling
  - Use Spanish content from FRONTEND_CONTENT.md (if available)
  - Link to playground for testing

- [ ] **7.3 API Reference**
  - Create `src/components/docs/APIReference.tsx`
  - Endpoint cards for: `/v2/codi/qr`, `/v2/codi/push`, `/v2/codi/consulta`, `/v2/health`
  - For each endpoint:
    - Description
    - HTTP method and path
    - Request parameters (with types and requirements)
    - Request example
    - Response example
    - Error codes
  - Use data from `context/API_EXAMPLES.md`

- [ ] **7.4 Error Codes Reference**
  - Create `src/components/docs/ErrorCodes.tsx`
  - Table of HTTP status codes
  - Table of CoDi `edoPet` codes
  - Common error scenarios and solutions

- [ ] **7.5 Documentation Components**
  - Create `src/components/ui/CodeBlock.tsx` - Syntax highlighted code
  - Create `src/components/ui/ParamTable.tsx` - Parameter documentation table
  - Make docs mobile-responsive

**Deliverables:**
- Complete documentation site
- All API endpoints documented
- Clear getting started guide
- Error code reference
- Professional, readable layout

**🛑 STOP HERE - Wait for review and commit**

---

## Stage 8: Polish & Testing ⏳

**Goal:** Final touches, testing, and quality assurance.

**Estimated Time:** 2-3 hours

### Tasks

- [ ] **8.1 Responsive Design Review**
  - Test all pages on mobile (375px width)
  - Test on tablet (768px width)
  - Test on desktop (1280px+ width)
  - Fix any layout issues

- [ ] **8.2 Loading States**
  - Add loading spinners to all API calls
  - Skeleton loaders for data (optional)
  - Disable form submissions during loading

- [ ] **8.3 Error Boundaries**
  - Create `src/components/common/ErrorBoundary.tsx`
  - Wrap app in error boundary
  - User-friendly error page

- [ ] **8.4 Accessibility**
  - Test keyboard navigation (Tab, Enter, Esc)
  - Add ARIA labels where needed
  - Check form field labels and associations
  - Test with screen reader (basic check)

- [ ] **8.5 Toast Notifications**
  - Implement toast system (or use library)
  - Success toasts for form submissions
  - Error toasts for failures
  - Info toasts for copied text

- [ ] **8.6 Performance**
  - Check bundle size
  - Lazy load routes if needed
  - Optimize images (if any)
  - Remove console.logs

- [ ] **8.7 Testing with Backend**
  - Start backend at `http://localhost:3000`
  - Test all three API endpoints with real data
  - Verify QR codes generate correctly
  - Verify push notifications send
  - Verify status queries work
  - Test error scenarios (invalid API key, bad data)

- [ ] **8.8 Final Review**
  - Check all links work
  - Verify Spanish content is correct
  - Check for typos
  - Ensure consistent styling
  - Review console for errors

**Deliverables:**
- Fully responsive application
- Loading states everywhere
- Error boundary protection
- Accessible navigation
- Toast notifications working
- Optimized performance
- All features tested with real backend
- Production-ready Stage 1 MVP

**🛑 STOP HERE - Wait for review and commit**

---

## Post-Stage 1: Future Roadmap

After completing Stage 1, refer to `FRONTEND_ROADMAP.md` for:
- **Stage 2:** Enhanced Developer Experience (interactive docs, webhook tools, integration examples)
- **Stage 3:** User Management & Analytics (dashboard, usage stats, request history)
- **Stage 4:** Production Support (status page, security docs, certificate tools)
- **Stage 5:** Community Features (advanced tools, sandbox, SDKs)

---

## Notes & Decisions

### Decisions Made
- ✅ Framework: React + Vite
- ✅ Styling: Tailwind CSS
- ✅ Forms: React Hook Form + Zod
- ✅ Routing: React Router DOM 7
- ✅ Data Fetching: TanStack Query + Axios
- ✅ Language: Spanish (primary audience in Mexico)

### Decisions Needed
- ⏳ Dark mode support? (Adds ~1 day)
- ⏳ API key enrollment in frontend? (Or just instructions?)
- ⏳ Frontend authentication? (Or public with user API keys?)
- ⏳ Target launch date for Stage 1?

### Images Needed for Production
- Logo and favicon (highest priority)
- Hero illustration
- Feature icons (4)
- Technical diagrams (can wait for Stage 2)

---

## How to Use This Plan

1. **Start with Stage 1** - Claude will work through all tasks
2. **Review Results** - User reviews code changes
3. **Commit Changes** - User commits to git with meaningful message
4. **Approve Next Stage** - User gives approval to proceed
5. **Repeat** - Continue through all 8 stages

**Communication Pattern:**
```
Claude: "I've completed Stage X. Here's what I built: [summary]. Ready for review."
User: Reviews code, tests functionality, commits changes
User: "Approved! Proceed to Stage Y"
Claude: Starts next stage
```

---

**Last Updated:** October 21, 2025
**Plan Status:** Ready to Execute
**Current Stage:** Stage 1 (Foundation Setup)
