# Express Server

This Express server handles backend functionality for the CoDi API Frontend, specifically email sending for enrollment forms.

## Purpose

In production, this server:

1. Serves the built React app (from `/dist`)
2. Handles enrollment email submissions via `/api/enrollment`
3. Integrates with Resend for email delivery

## Development

```bash
# Run server only
npm run dev:server

# Run both frontend and backend
npm run dev
```

Server runs on port 3001 by default (configurable via `PORT` env variable).

## API Endpoints

### `GET /api/health`

Health check endpoint.

**Response:**

```json
{
  "status": "ok",
  "service": "codi-api-frontend-server"
}
```

### `POST /api/enrollment`

Handles enrollment form submissions with file uploads.

**Content-Type:** `multipart/form-data`

**Form Fields:**

- `userType` - "fisica" or "moral"
- `nombre` - Name (persona física)
- `razonSocial` - Company name (persona moral)
- `rfc` - Tax ID
- `representanteLegal` - Legal representative
- `email` - Contact email
- `celular` - Phone number
- `webhookUrl` - Optional webhook URL

**File Fields:**

- `ine` - ID document
- `constanciaFiscal` - Tax document
- `comprobanteDomicilio` - Proof of address
- `caratulaBancaria` - Bank statement

**Response:**

```json
{
  "success": true,
  "message": "Registro enviado exitosamente...",
  "emailId": "abc123"
}
```

## Environment Variables

Required:

- `RESEND_API_KEY` - Resend API key for sending emails
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)

## File Upload Limits

- Maximum file size: 10MB per file
- Supported fields: 4 files (ine, constanciaFiscal, comprobanteDomicilio, caratulaBancaria)

## Production Deployment

On Railway:

1. Build command: `npm install && npm run build`
2. Start command: `npm start`
3. Server serves static files from `/dist` and handles API routes

## Email Configuration

Emails are sent to: **pablo.cruz@bite-size.mx**

Subject: **"Registro de CoDi API - Nueva Solicitud"**

Sender: **onboarding@resend.dev** (Resend free tier)

To customize, edit `server/index.js` around line 133.

## Static File Serving

In production (`NODE_ENV=production`):

- Serves static files from `/dist`
- All non-API routes serve `index.html` for SPA routing

## CORS

CORS is enabled for all origins in development. In production, frontend and backend are served from the same domain (no CORS issues).

## Logging

Server logs:

- Server startup info (port, environment, email config)
- Successful email sends
- Error details for failed operations

## Error Handling

API errors return:

```json
{
  "error": "Error description",
  "message": "Detailed error message"
}
```

Status codes:

- 200: Success
- 405: Method not allowed
- 500: Server error

## Resources

- [Express Documentation](https://expressjs.com/)
- [Multer (File Uploads)](https://github.com/expressjs/multer)
- [Resend SDK](https://resend.com/docs)
