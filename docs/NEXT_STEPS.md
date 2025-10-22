# Frontend Development: Next Steps

This document outlines the immediate action items to begin frontend development for the CoDi API project.

---

## Decision Points (Choose Before Starting)

### 1. Frontend Framework

**Recommendation: React + Vite**

**Why?**

- Fastest development setup
- Largest ecosystem for developer tools
- Best for interactive forms and real-time updates
- Excellent TypeScript support
- Easy to find contributors

**Alternative:** Next.js (if SEO is critical)

**Your choice:** Lets go with React + Vite

### 2. Styling Approach

**Recommendation: Tailwind CSS + shadcn/ui**

**Why?**

- Rapid development with utility classes
- shadcn/ui provides beautiful, accessible components
- Easy to customize and maintain
- Great documentation and examples

**Your choice:** Ok, lets do Tailwind CSS + shadcn/ui

### 3. Project Location

**Option A:** Separate repository (e.g., `codi-api-frontend`)

- ✅ Cleaner separation of concerns
- ✅ Independent deployment
- ✅ Different tech stack won't conflict
- ⚠️ Requires CORS configuration

**Option B:** Subdirectory in current repo (e.g., `/frontend`)

- ✅ Everything in one place
- ✅ Easier to keep in sync
- ⚠️ Larger repository

**Recommendation:** Separate repository for production apps, subdirectory for quick prototyping

**Your choice:** Lets do this in a separate repository. I will create the files, move these documents there and create a new vite project and install core dependencies so you can start later.

---

## Immediate Action Items

### Step 1: Environment Setup

```bash
# If separate repo:
mkdir codi-api-frontend && cd codi-api-frontend
npm create vite@latest . -- --template react-ts

# If subdirectory:
npm create vite@latest frontend -- --template react-ts
cd frontend
```

### Step 2: Install Core Dependencies

```bash
# UI & Styling
npm install tailwindcss postcss autoprefixer
npm install -D @tailwindcss/forms @tailwindcss/typography
npx tailwindcss init -p

# Routing
npm install react-router-dom

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Data Fetching
npm install @tanstack/react-query axios

# UI Components (shadcn/ui approach)
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# QR Code Generation
npm install qrcode.react

# Code Highlighting
npm install react-syntax-highlighter
npm install -D @types/react-syntax-highlighter

# Utilities
npm install date-fns
```

### Step 3: Project Structure Setup

Create the following folder structure:

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Header, Footer, Layout
│   │   ├── forms/            # QR, Push, Consulta forms
│   │   └── common/           # Reusable components
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Playground.tsx
│   │   ├── Docs.tsx
│   │   └── NotFound.tsx
│   ├── services/
│   │   └── api.ts            # API client configuration
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Helper functions
│   ├── types/                # TypeScript types
│   ├── config/               # App configuration
│   └── App.tsx
├── public/
└── package.json
```

### Step 4: Configure API Connection

Create `src/services/api.ts`:

```typescript
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add API key to requests
export const setApiKey = (apiKey: string) => {
  apiClient.defaults.headers.common["x-api-key"] = apiKey;
};

// API methods
export const codiApi = {
  generateQR: (data: any) => apiClient.post("/v2/codi/qr", data),
  sendPush: (data: any) => apiClient.post("/v2/codi/push", data),
  checkStatus: (folio: string) =>
    apiClient.post("/v2/codi/consulta", { folio }),
  healthCheck: () => apiClient.get("/v2/health"),
};
```

### Step 5: Create `.env` File

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=CoDi API
VITE_APP_VERSION=1.0.0
```

---

## Stage 1 Development Checklist

### Phase 1.1: Basic Setup (Day 1)

- [ ] Initialize project with chosen framework
- [ ] Install and configure Tailwind CSS
- [ ] Set up React Router with basic routes
- [ ] Create layout components (Header, Footer, Container)
- [ ] Configure API client
- [ ] Test connection to backend `/v2/health` endpoint

### Phase 1.2: Homepage (Day 1-2)

- [ ] Hero section with CoDi API explanation
- [ ] Feature highlights
- [ ] Quick start CTA buttons
- [ ] Live status indicator (using `/v2/health`)
- [ ] Responsive design verification

### Phase 1.3: API Playground - QR Form (Day 2-3)

- [ ] Create QR form component with validation
  - [ ] API key input (persists to localStorage)
  - [ ] Amount (numeric, required)
  - [ ] Concept (string, required)
  - [ ] Reference (string, optional)
  - [ ] Institution selection (dropdown from institutions.js)
- [ ] Form submission to `/v2/codi/qr`
- [ ] Display QR code on success
- [ ] Show response data (JSON formatted)
- [ ] Error handling and display
- [ ] Copy response button

### Phase 1.4: API Playground - Push Form (Day 3-4)

- [ ] Create Push notification form
  - [ ] Phone number input with validation
  - [ ] Amount and concept fields
  - [ ] Institution selection
- [ ] Form submission to `/v2/codi/push`
- [ ] Success/error messaging
- [ ] Response display

### Phase 1.5: API Playground - Consulta Form (Day 4)

- [ ] Create status query form
  - [ ] Folio/reference input
- [ ] Submit to `/v2/codi/consulta`
- [ ] Display payment status clearly
- [ ] Status badge (pending/completed/failed)

### Phase 1.6: Institution Lookup (Day 5)

- [ ] Fetch institutions data
- [ ] Create searchable/filterable table
- [ ] Copy institution code button
- [ ] Mobile-responsive table

### Phase 1.7: Basic Documentation (Day 5-6)

- [ ] Getting Started page
  - [ ] Prerequisites
  - [ ] API key enrollment explanation
  - [ ] First API call tutorial
- [ ] API Reference page
  - [ ] Endpoint cards for QR, Push, Consulta
  - [ ] Request/response schemas
  - [ ] Parameter descriptions
- [ ] Error codes reference page

### Phase 1.8: Code Examples Generator (Day 6-7)

- [ ] Create code example component
- [ ] cURL example generator
- [ ] JavaScript (fetch/axios) examples
- [ ] Python (requests) examples
- [ ] Syntax highlighting
- [ ] Copy to clipboard functionality
- [ ] Auto-fill with user's API key

### Phase 1.9: Polish & Testing (Day 7)

- [ ] Mobile responsiveness check
- [ ] Accessibility audit (keyboard navigation, ARIA labels)
- [ ] Error boundary implementation
- [ ] Loading states for all forms
- [ ] Toast notifications for success/error
- [ ] Cross-browser testing
- [ ] Performance optimization

---

## Quick Start Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## Development Tips

### API Key Management

Store the API key in localStorage for convenience during testing:

```typescript
// Save
localStorage.setItem("codi_api_key", apiKey);

// Retrieve
const savedKey = localStorage.getItem("codi_api_key");
```

### Form Validation Best Practices

Use Zod schemas for type-safe validation:

```typescript
import { z } from "zod";

const qrFormSchema = z.object({
  apiKey: z.string().length(128, "API key must be 128 characters"),
  amount: z.number().positive("Amount must be positive"),
  concept: z.string().min(1, "Concept is required"),
  institution: z.string().min(1, "Institution is required"),
});
```

### Environment Variables

Always prefix with `VITE_` to expose to frontend:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Resources

### Documentation

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query)

### Design Inspiration

- [Stripe Docs](https://stripe.com/docs) - Excellent developer documentation
- [Twilio Docs](https://www.twilio.com/docs) - Great API playground
- [Plaid](https://plaid.com/docs/) - Clean, developer-focused design

---

## Estimated Timeline

**Stage 1 (MVP): 7-10 days** for a solo developer working part-time

- Can be accelerated with more developers or full-time focus
- Quality should not be rushed - good UX is critical for adoption

**Stage 2: 7-14 days** (enhanced developer experience)

**Stage 3: 5-10 days** (analytics dashboard)

**Stages 4-5: As needed** (operational features and community)

---

## Questions to Answer Before Starting

1. **Will you handle API key enrollment in the frontend?**

   - Or just provide instructions for users to contact you/Banxico?

2. **Do you need authentication for the frontend?**

   - Or is it a public tool where anyone can use their API key?

3. **Will you host this separately from the API?**

   - Static hosting (Vercel, Netlify) vs same server

4. **Do you want a dark mode?**

   - Adds ~1 day of development but popular with developers

5. **What's your target launch date for Stage 1?**

---

## Ready to Start?

**Recommended Next Action:**

1. Make decisions on framework and structure (above)
2. Run the project initialization commands
3. Set up the basic project structure
4. Build the homepage as a proof of concept
5. Tackle the QR form (most important feature)

Let me know when you're ready, and I can help you:

- Initialize the project
- Set up the configuration files
- Build the first components
- Create the layout structure
- Or anything else you need!
