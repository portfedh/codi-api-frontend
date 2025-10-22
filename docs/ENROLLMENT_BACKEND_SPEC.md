# Enrollment Backend API Specification

## Overview

This document specifies the backend API endpoint required to handle enrollment form submissions from the frontend. The endpoint should receive form data with file attachments and send an email notification with the documents attached.

## Endpoint Details

### POST `/v2/enrollment`

**Purpose:** Receive enrollment applications from individuals or companies and send email notifications with attached documents.

**Content-Type:** `multipart/form-data`

**Authentication:** None required (public endpoint)

---

## Request Parameters

### Form Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `userType` | string | Yes | Type of user: `"fisica"` (individual) or `"moral"` (company) |
| `email` | string | Yes | Applicant's email address |
| `celular` | string | Yes | Phone number (10 digits) |
| `nombre` | string | Conditional | Full name (required if `userType === "fisica"`) |
| `razonSocial` | string | Conditional | Company name (required if `userType === "moral"`) |
| `rfc` | string | Conditional | Tax ID (RFC) (required if `userType === "moral"`) |
| `representanteLegal` | string | Conditional | Legal representative name (required if `userType === "moral"`) |

### File Uploads

All files should be uploaded as multipart form data. The following file fields may be present:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ine` | File | Optional | Government-issued ID (INE/IFE) |
| `constanciaFiscal` | File | Optional | Tax registration document (Constancia de Situación Fiscal) |
| `comprobanteDomicilio` | File | Optional | Proof of address (utility bill, bank statement, etc.) |
| `caratulaBancaria` | File | Optional | Bank account details (Carátula Bancaria) |

**Accepted File Types:** PDF, JPG, JPEG, PNG
**Max File Size:** 5MB per file
**Max Total Size:** 20MB

---

## Email Configuration

### Environment Variables

The backend should use the following environment variables for email configuration:

```bash
# Email service credentials (example using Gmail/SendGrid/etc)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@domain.com
EMAIL_PASSWORD=your-app-password

# Recipient email for enrollment notifications
ENROLLMENT_RECIPIENT_EMAIL=registros@your-domain.com

# Sender information
EMAIL_FROM_NAME=CoDi API Registration
EMAIL_FROM_ADDRESS=noreply@your-domain.com
```

### Email Template

#### Subject
```
Nueva solicitud de registro CoDi API - [Persona Física/Moral]
```

#### Body (Spanish)

```
Nueva Solicitud de Registro CoDi API
=====================================

Tipo de Usuario: [Persona Física / Persona Moral]

[IF userType === "fisica"]
Datos del Solicitante:
- Nombre Completo: {nombre}
- Correo Electrónico: {email}
- Teléfono Celular: {celular}

[IF userType === "moral"]
Datos de la Empresa:
- Razón Social: {razonSocial}
- RFC: {rfc}
- Representante Legal: {representanteLegal}
- Correo Electrónico: {email}
- Teléfono Celular: {celular}

Documentos Adjuntos:
[List attached documents]
- INE/IFE: [✓ Adjunto / ✗ No proporcionado]
- Constancia Fiscal: [✓ Adjunto / ✗ No proporcionado]
- Comprobante de Domicilio: [✓ Adjunto / ✗ No proporcionado]
- Carátula Bancaria: [✓ Adjunto / ✗ No proporcionado]

---
Fecha de Solicitud: {timestamp}
ID de Solicitud: {enrollmentId} [optional]

Este correo fue generado automáticamente por el sistema de registro de CoDi API.
```

### Email Attachments

All uploaded files should be attached to the email with their original filenames. Use descriptive filenames if possible:
- `ine_{nombre/razonSocial}.{ext}`
- `constancia_fiscal_{nombre/razonSocial}.{ext}`
- `comprobante_domicilio_{nombre/razonSocial}.{ext}`
- `caratula_bancaria_{nombre/razonSocial}.{ext}`

---

## Response Format

### Success Response

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Solicitud de registro recibida exitosamente. En breve recibirá un correo de confirmación.",
  "enrollmentId": "ENR-20250122-ABC123",
  "estimatedProcessingDays": 7
}
```

### Error Responses

#### Validation Error

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Error de validación en los datos enviados",
  "errors": [
    {
      "field": "email",
      "message": "Email inválido"
    },
    {
      "field": "celular",
      "message": "El número celular debe tener 10 dígitos"
    }
  ]
}
```

#### File Upload Error

**Status Code:** `413 Payload Too Large`

```json
{
  "success": false,
  "message": "Los archivos exceden el tamaño máximo permitido (20MB total)"
}
```

#### Server Error

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error al procesar la solicitud. Por favor intente de nuevo más tarde."
}
```

---

## Implementation Checklist

### Required Packages (Node.js/Express Example)

```bash
npm install multer nodemailer
```

- **multer**: For handling multipart/form-data file uploads
- **nodemailer**: For sending emails with attachments

### Implementation Steps

1. **Set up multer middleware** for file upload handling
   - Configure file size limits (5MB per file, 20MB total)
   - Validate file types (PDF, JPG, JPEG, PNG)
   - Store files temporarily in memory or disk

2. **Validate form data**
   - Check required fields based on `userType`
   - Validate email format
   - Validate phone number format (10 digits)
   - Validate RFC format (if applicable)

3. **Configure Nodemailer transport**
   - Use environment variables for email credentials
   - Support SMTP configuration
   - Enable TLS/SSL for secure connections

4. **Compose email**
   - Generate HTML email body with form data
   - List all provided documents
   - Format data cleanly for readability

5. **Attach files to email**
   - Attach all uploaded files
   - Use descriptive filenames
   - Handle missing files gracefully

6. **Send email**
   - Send to `ENROLLMENT_RECIPIENT_EMAIL`
   - Handle email sending errors
   - Log successful submissions

7. **Optional: Store in database**
   - Save enrollment record for tracking
   - Store file paths or metadata
   - Generate unique enrollment ID

8. **Return response**
   - Send success confirmation to frontend
   - Include enrollment ID if generated
   - Provide estimated processing time

---

## Security Considerations

1. **File Upload Security**
   - Validate file types (whitelist: PDF, JPG, JPEG, PNG)
   - Scan files for malware (optional but recommended)
   - Limit file sizes to prevent DoS attacks
   - Use unique filenames to prevent overwrites

2. **Input Validation**
   - Sanitize all text inputs to prevent XSS
   - Validate email and phone formats
   - Prevent SQL injection if storing in database

3. **Rate Limiting**
   - Implement rate limiting to prevent abuse
   - Limit submissions per IP address (e.g., 3 per hour)

4. **Email Security**
   - Use app-specific passwords for email accounts
   - Enable 2FA on email service accounts
   - Store credentials in environment variables, never in code
   - Use secure SMTP connections (TLS/SSL)

5. **Data Privacy**
   - Handle sensitive documents securely
   - Delete temporary files after email is sent
   - Comply with data protection regulations (GDPR, Mexican data protection law)

---

## Example Implementation (Node.js/Express)

```javascript
// routes/enrollment.js
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
    files: 4,
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no permitido'));
    }
  },
});

// Configure email transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// POST /v2/enrollment
router.post('/enrollment', upload.fields([
  { name: 'ine', maxCount: 1 },
  { name: 'constanciaFiscal', maxCount: 1 },
  { name: 'comprobanteDomicilio', maxCount: 1 },
  { name: 'caratulaBancaria', maxCount: 1 },
]), async (req, res) => {
  try {
    const { userType, email, celular, nombre, razonSocial, rfc, representanteLegal } = req.body;

    // Validate required fields
    if (!userType || !email || !celular) {
      return res.status(400).json({
        success: false,
        message: 'Campos obligatorios faltantes',
      });
    }

    // Prepare email attachments
    const attachments = [];
    if (req.files) {
      Object.keys(req.files).forEach(fieldName => {
        const file = req.files[fieldName][0];
        attachments.push({
          filename: file.originalname,
          content: file.buffer,
        });
      });
    }

    // Compose email body
    const emailBody = generateEmailBody(req.body, req.files);

    // Send email
    await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.ENROLLMENT_RECIPIENT_EMAIL,
      subject: `Nueva solicitud de registro CoDi API - ${userType === 'fisica' ? 'Persona Física' : 'Persona Moral'}`,
      html: emailBody,
      attachments,
    });

    // Generate enrollment ID (optional)
    const enrollmentId = `ENR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    res.json({
      success: true,
      message: 'Solicitud de registro recibida exitosamente. En breve recibirá un correo de confirmación.',
      enrollmentId,
      estimatedProcessingDays: 7,
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al procesar la solicitud. Por favor intente de nuevo más tarde.',
    });
  }
});

function generateEmailBody(data, files) {
  // Generate HTML email body with form data
  // Implementation details...
}

module.exports = router;
```

---

## Testing

### Manual Testing with cURL

```bash
curl -X POST http://localhost:3000/v2/enrollment \
  -F "userType=fisica" \
  -F "nombre=Juan Pérez García" \
  -F "email=juan.perez@example.com" \
  -F "celular=5512345678" \
  -F "ine=@/path/to/ine.pdf" \
  -F "constanciaFiscal=@/path/to/constancia.pdf" \
  -F "comprobanteDomicilio=@/path/to/comprobante.pdf" \
  -F "caratulaBancaria=@/path/to/caratula.pdf"
```

### Test Cases

1. **Valid submission (Persona Física)**
   - All required fields provided
   - All documents attached
   - Expect: 200 OK

2. **Valid submission (Persona Moral)**
   - All required company fields
   - All documents attached
   - Expect: 200 OK

3. **Missing required field**
   - Missing email or celular
   - Expect: 400 Bad Request

4. **Invalid file type**
   - Upload .exe or .zip file
   - Expect: 400 Bad Request

5. **File too large**
   - Upload 10MB file
   - Expect: 413 Payload Too Large

6. **Email service failure**
   - Mock email service error
   - Expect: 500 Internal Server Error

---

## Questions?

For questions or clarifications about this specification, please contact the development team or create an issue in the project repository.
