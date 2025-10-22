# CoDi API - Request/Response Examples

This document contains real request and response examples extracted from the Swagger documentation for use as context in the frontend development.

---

## Table of Contents

1. [Health Check](#1-health-check)
2. [Generate QR Payment](#2-generate-qr-payment)
3. [Send Push Payment](#3-send-push-payment)
4. [Query Payment Status (Consulta)](#4-query-payment-status-consulta)
5. [Webhook - Payment Result](#5-webhook---payment-result)

---

## 1. Health Check

### Endpoint
```
GET /v2/health
```

### Description
Checks the health of the API system including server status and database connectivity.

### Headers
None required (public endpoint)

### Request
```http
GET /v2/health HTTP/1.1
Host: localhost:3131
```

### Response 200 (Success - All Systems Healthy)

```json
{
  "status": "healthy",
  "timestamp": "2023-07-24T15:30:45Z",
  "services": {
    "server": {
      "status": "healthy"
    },
    "database": {
      "status": "healthy",
      "responseTime": 45
    }
  }
}
```

### Response 503 (Service Unavailable - Database Issue)

```json
{
  "status": "unhealthy",
  "timestamp": "2023-07-24T15:30:45Z",
  "services": {
    "server": {
      "status": "healthy"
    },
    "database": {
      "status": "unhealthy",
      "error": "Database connection failed"
    }
  }
}
```

---

## 2. Generate QR Payment

### Endpoint
```
POST /v2/codi/qr
```

### Description
Creates a QR code representing a CoDi payment request. This QR code can be scanned by a payer's mobile banking app to initiate the payment.

### Headers
```http
Content-Type: application/json
x-api-key: <128-character hexadecimal API key>
```

### Request Body

```json
{
  "monto": 99.03,
  "referenciaNumerica": "1234567",
  "concepto": "Boleto de evento mensual",
  "vigencia": "0"
}
```

#### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `monto` | number/float | ✅ Yes | Payment amount. Range: 0.01 to 999,999,999,999.99. Use 0 if user determines amount. Current bank limits: 0.01 - 12,000 |
| `referenciaNumerica` | string | ✅ Yes | Transaction ID (1-7 digits). Use "0" if no value assigned |
| `concepto` | string | ✅ Yes | Payment description (1-40 ASCII characters) |
| `vigencia` | string | ✅ Yes | Expiration timestamp in Unix milliseconds. Use "0" for no expiration (max 15 characters) |

### Response 200 (Success)

```json
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "data": {
    "cadenaMC": "{\"TYP\":20,\"v\":{\"DEV\":\"29442719514356328128/0\"},\"ic\":{\"IDC\":\"32af20f42e\",\"SER\":43511855,\"ENC\":\"dbRCrzAln/1VhCh7o6MqwJjYtC2ouu7e8oP2Qx6P0LnPx1DDZp8CHuODHYg8YeWPM0OuFXdnaxW+QpvdzzMvsmKQdui7ItgfsLZEU3FbYDVoEKIjEZVZXlzRZc6eiEAKgoz+bQjmSMKcww/i8GP1XEy9rNtuAAPpscp6bomNhHzzGRi/JWmMpbKHwpYnnz+Rju7tDdtL3rhKccejAGwdJAsdyAVE0Xy3fG4xIIVCAoEQ0MbffiFb7fIs877i1+YtHqxSfP8/EgZ2CHesLdx0p51VQxmriQtWXNhts24e4Rp6f4xaOn/ayA4Xs4c24azCp+rnM4t7rY2oo24fDTUo/w==\"},\"CRY\":\"xHmsNgksCo5t4wDtnUwj9eIplwEdjEkTaGdnEvFyEz8=\"}",
    "crtBdeM": "00000100000100015975",
    "selloDigital": "HWjD3bPwJ+rfDnDYc8UJt2fmJvFAl9LPpyNMUrowSzDCjxewGSeLN+u4M2cZ7jszbQofaIrsTiVu/VHBdewX1GkoChQ5sUUB6lk3dlT2iXmvuwOdM9ex1DIXRJYyGz9nwJMz1e6Fxx6eKfgEbSuMDbpk55cRKvyuyPeQmRxJi9G5sHISZcgHrK+n/DKAl/1ng4n7xCQnbsApT/+FcUAD46X43z0CZSaxrVtWdAM9u06iPOXiaW0yJBbM6PaxGpM+evYBD2IopYXmdjgl24Bcme5RGkNFHl28OPsRbSPBSy4ORjCA7sOh8bab6/iaDI1XHG2nKs37LZDCDK7AcGibunEciFuvio9WEJ2qoQPfZ5B6miCzRM0dI+4UjFy8GdVl9eAu5jnMgc9alIRamDpJkA==",
    "epoch": 1743120460060,
    "edoPet": 0
  }
}
```

#### Response Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `qrCode` | string | Base64 encoded PNG image. Use directly in `<img src="...">` |
| `cadenaMC` | string | Encrypted payment information string |
| `crtBdeM` | string | Banxico public certificate identifier |
| `selloDigital` | string | Digital signature from Banxico |
| `epoch` | integer | Timestamp in milliseconds (Unix epoch) |
| `edoPet` | integer | Request status: 0=Success, -1=Missing info, -2=Processing error, -3=Invalid params, -4=Invalid signature |

### Response 400 (Validation Error - Missing Monto)

```json
{
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "monto",
      "message": "Monto cannot be empty."
    }
  ]
}
```

### Response 400 (Validation Error - Invalid Concepto)

```json
{
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "concepto",
      "message": "Concepto contains invalid characters."
    }
  ]
}
```

### Response 401 (Unauthorized - Missing API Key)

```json
{
  "error": "API Key missing"
}
```

### Response 401 (Unauthorized - Invalid API Key)

```json
{
  "error": "Invalid API Key"
}
```

### Response 500 (Internal Server Error)

```json
{
  "success": false,
  "error": "Error processing QR request"
}
```

---

## 3. Send Push Payment

### Endpoint
```
POST /v2/codi/push
```

### Description
Sends a payment request notification directly to a payer's mobile phone number. The payer must approve the request in their banking application.

### Headers
```http
Content-Type: application/json
x-api-key: <128-character hexadecimal API key>
```

### Request Body

```json
{
  "monto": 99.03,
  "referenciaNumerica": "1234567",
  "concepto": "Boleto de evento mensual",
  "vigencia": "0",
  "celularCliente": "5510799160"
}
```

#### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `monto` | number/float | ✅ Yes | Payment amount. Range: 0.01 to 999,999,999,999.99. Current bank limits: 0.01 - 12,000 |
| `referenciaNumerica` | string | ✅ Yes | Transaction ID (1-7 digits). Use "0" if no value assigned |
| `concepto` | string | ✅ Yes | Payment description (1-40 ASCII characters) |
| `vigencia` | string | ✅ Yes | Expiration timestamp in Unix milliseconds. Use "0" for no expiration |
| `celularCliente` | string | ✅ Yes | **REQUIRED** Payer's 10-digit mobile phone number |

### Response 200 (Success)

```json
{
  "success": true,
  "data": {
    "folioCodi": "321e210838321e210838",
    "crtBdeM": "00000100000999915974",
    "selloDigital": "l+GUL9tAK3U9NSRuyiqPEHmEM9PMfz8XEZqnCGZzaxtZQd8xMBatzODxcmZxKUKhs5lzOGeNzzJ/zTeqnfPvPh7GhSXVfBo4mo3W3aOMVmz8cuYR9qHBWTCWk9GRt6rTcFPQhEACuaSYNvj/Q9kobznlDfV2a8iZ6NSQ1yVUonKDPe0anIeKM3457QX7X2gPA51FpIZ0d+3nzN+O7YiPwB8Ad14zHYbEbotRvL3/apVuCCfcB+zKWoKYhdGgzjw38z78E/mHXf59k+JyB7r8ZHzDPGCheUypFnrga6WJtTX/qhy6RXcl4nFOfpla549W6C7lng2Ypp1YZ8zKXmL6iY8+DMIvfCCoRtMu4tzrOZtC9dzM2K+XFRWBygksR/iqUMBVd7DM7gXWPbEvLRKXDQ==",
    "epoch": 1743120496612,
    "edoPet": 0
  }
}
```

#### Response Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `folioCodi` | string | Unique CoDi operation folio (exactly 20 characters) |
| `crtBdeM` | string | Banxico public certificate identifier |
| `selloDigital` | string | Digital signature from Banxico |
| `epoch` | integer | Timestamp in milliseconds (Unix epoch) |
| `edoPet` | integer | Request status: 0=Success, -1=Missing info, -2=Processing error, -3=Invalid params, -4=Invalid signature |

**Note:** Success response indicates the push request was sent, NOT that payment is complete. Check payment status via `/v2/codi/consulta` or wait for webhook.

### Response 400 (Validation Error - Invalid Phone)

```json
{
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "celularCliente",
      "message": "CelularCliente must contain exactly 10 numeric digits."
    }
  ]
}
```

### Response 400 (Validation Error - Invalid Monto)

```json
{
  "message": "Validation Error: Invalid input data.",
  "errors": [
    {
      "field": "monto",
      "message": "Monto must be a number between 0 and 999,999,999,999.99 with at most two decimal places."
    }
  ]
}
```

### Response 401 (Unauthorized)

```json
{
  "error": "Invalid API Key"
}
```

### Response 500 (Internal Server Error)

```json
{
  "success": false,
  "error": "Error processing Push request"
}
```

---

## 4. Query Payment Status (Consulta)

### Endpoint
```
POST /v2/codi/consulta
```

### Description
Retrieves the current status and details of a previously initiated CoDi operation (QR or Push) using its unique operation ID.

### Headers
```http
Content-Type: application/json
x-api-key: <128-character hexadecimal API key>
```

### Request Body

```json
{
  "folioCodi": "321e210838321e210838",
  "tpg": 10,
  "npg": 1,
  "fechaInicial": "20250319",
  "fechaFinal": "0"
}
```

#### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `folioCodi` | string | ✅ Yes | Unique CoDi reference number (10 or 20 characters) |
| `tpg` | number/string | ✅ Yes | Operations per page (1-100) |
| `npg` | number/string | ✅ Yes | Page number (1 to 2,147,483,647) |
| `fechaInicial` | number/string | ✅ Yes | Start date in YYYYMMDD format. Use "0" for all dates |
| `fechaFinal` | number/string | ✅ Yes | End date in YYYYMMDD format. Use "0" for entire history |

### Response 200 (Success)

```json
{
  "success": true,
  "data": {
    "resultado": {
      "v": {
        "tipoCta": 40,
        "ctaBancaria": "997***********4710",
        "cveInstit": 40997,
        "nombre": "S*************** S* D* C*"
      },
      "lstDetalleMC": [
        {
          "folioCodi": "321e210838321e210838",
          "concepto": "Boleto: de  evento mensual",
          "monto": "499.0",
          "refNum": 1000009,
          "tProc": 0,
          "tSolicitud": 1743120493234,
          "edoMC": -1,
          "c": {
            "tipoCta": 0,
            "cveInstit": 0
          }
        }
      ]
    },
    "ultPag": true,
    "crtBdeM": "00000100000100015974",
    "selloDigital": "qtSVpfEUgp2TuLUJvppubqkStMSOX7qCukId72xUcagH5ozaX1z+T1coNdOQv6M1TGU8n4jF6imWAwxpdGmMF2XU1sowu8ox8MiLTcT03yHoDGGFTwOqF4Ic1NiPqzw/gFaqIcbTheIf47oECmvz6e1cXPDt1HVZem6y8W3nmwVHUMJKWD/xgBLbDFjDe+ETbKjJtqUnQM9Uy4HOlExzW0YlT/0S+CQ1uylnPyhkDzv5isSNaeN6/XjicjmlvpsHjXj5fvbaFmCfZaFLEukFyWGL9COgPwdKEfUmnkbfmTgUKifFqxbWvRhZ5J8OxzaH/I046ofqNHde+3BovOWiKVVBRe94At3GrBMYUnHz/hhJ5aO0e7qWQ5MzfrgeXFEFnvrF2V+rTZ8lXB08FButuQ==",
    "epoch": 1743222437146,
    "edoPet": 0
  }
}
```

#### Response Field Descriptions

| Field | Description |
|-------|-------------|
| `resultado.v.tipoCta` | Account type code |
| `resultado.v.ctaBancaria` | Masked bank account number |
| `resultado.v.cveInstit` | Institution code |
| `resultado.v.nombre` | Masked account holder name |
| `lstDetalleMC` | Array of transaction details |
| `lstDetalleMC[].folioCodi` | CoDi operation folio |
| `lstDetalleMC[].concepto` | Payment concept/description |
| `lstDetalleMC[].monto` | Transaction amount |
| `lstDetalleMC[].refNum` | Numeric reference |
| `lstDetalleMC[].tSolicitud` | Request timestamp (Unix milliseconds) |
| `lstDetalleMC[].edoMC` | Transaction status |
| `ultPag` | Boolean: Is this the last page? |
| `edoPet` | Request status: 0=Success |

### Response 400 (Bad Request)

```json
{
  "message": "Validation Error: 'operationId' is required.",
  "errors": [
    {
      "field": "operationId",
      "message": "'operationId' is required"
    }
  ]
}
```

### Response 401 (Unauthorized)

```json
{
  "message": "Invalid API Key",
  "code": "UNAUTHORIZED"
}
```

### Response 404 (Not Found)

```json
{
  "message": "Operation not found",
  "code": "OPERATION_NOT_FOUND"
}
```

### Response 500 (Internal Server Error)

```json
{
  "message": "Failed to retrieve operation status due to an internal error",
  "code": "INTERNAL_SERVER_ERROR"
}
```

---

## 5. Webhook - Payment Result

### Endpoint
```
POST /v2/resultadoOperaciones
```

### Description
**IMPORTANT:** This endpoint receives asynchronous notifications (webhooks) FROM Banxico about payment completion. It should NOT be called by API consumers, but configured as a callback URL in your Banxico settings.

### Headers
```http
Content-Type: application/json
```

**Note:** No API key authentication. Webhook authenticity should be verified via signature validation in the controller.

### Request Body (Received from Banxico)

#### Example 1: Operation Completed

```json
{
  "operationId": "QR-OP-a1b2c3d4e5f6",
  "status": "COMPLETED",
  "timestamp": "2023-10-26T10:05:30Z",
  "details": {
    "confirmationId": "SP-XYZ-789"
  }
}
```

#### Example 2: Operation Rejected

```json
{
  "operationId": "PUSH-OP-f6e5d4c3b2a1",
  "status": "REJECTED",
  "timestamp": "2023-10-26T11:15:00Z",
  "details": {
    "rejectionCode": "05",
    "rejectionReason": "Insufficient funds"
  }
}
```

#### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `operationId` | string | ✅ Yes | Unique ID of the operation |
| `status` | string | ✅ Yes | Final status: COMPLETED, REJECTED, or CANCELLED |
| `timestamp` | string (ISO 8601) | ✅ Yes | When the status update occurred |
| `details` | object | ❌ No | Additional info (confirmation ID, rejection reason, etc.) |

### Response 200 (Callback Acknowledged)

```json
{
  "success": true,
  "message": "Callback received."
}
```

### Response 400 (Bad Request - Invalid Payload)

```json
{
  "message": "Invalid callback payload",
  "code": "INVALID_CALLBACK"
}
```

### Response 500 (Internal Server Error)

```json
{
  "message": "Error processing operation result",
  "code": "CALLBACK_PROCESSING_ERROR"
}
```

---

## Common Error Codes Reference

### HTTP Status Codes

| Code | Meaning | Common Causes |
|------|---------|---------------|
| `200` | OK | Request successful |
| `400` | Bad Request | Invalid parameters, validation errors |
| `401` | Unauthorized | Missing or invalid API key |
| `404` | Not Found | Operation/resource not found |
| `500` | Internal Server Error | Server-side processing error |
| `503` | Service Unavailable | Database or Banxico service down |

### CoDi `edoPet` Status Codes

| Code | Meaning |
|------|---------|
| `0` | Success |
| `-1` | Error: Missing information |
| `-2` | Error: Processing issue |
| `-3` | Error: Invalid input parameters |
| `-4` | Error: Invalid digital signature |

---

## Testing Tips

### Using cURL

**Health Check:**
```bash
curl -X GET http://localhost:3131/v2/health
```

**Generate QR:**
```bash
curl -X POST http://localhost:3131/v2/codi/qr \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_128_CHAR_API_KEY" \
  -d '{
    "monto": 99.03,
    "referenciaNumerica": "1234567",
    "concepto": "Boleto de evento mensual",
    "vigencia": "0"
  }'
```

**Send Push:**
```bash
curl -X POST http://localhost:3131/v2/codi/push \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_128_CHAR_API_KEY" \
  -d '{
    "monto": 99.03,
    "referenciaNumerica": "1234567",
    "concepto": "Boleto de evento mensual",
    "vigencia": "0",
    "celularCliente": "5510799160"
  }'
```

**Query Status:**
```bash
curl -X POST http://localhost:3131/v2/codi/consulta \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_128_CHAR_API_KEY" \
  -d '{
    "folioCodi": "321e210838321e210838",
    "tpg": 10,
    "npg": 1,
    "fechaInicial": "20250319",
    "fechaFinal": "0"
  }'
```

---

## Notes for Frontend Developers

1. **API Key Storage:** Never hardcode API keys in frontend code. Always pass them from backend.

2. **QR Code Display:** The `qrCode` field in QR responses is base64-encoded PNG. Use directly:
   ```html
   <img src="data:image/png;base64,iVBORw0KGg..." alt="QR Code" />
   ```

3. **Validation:** Always validate input on frontend before sending to backend to provide better UX.

4. **Error Handling:** Display user-friendly error messages. The API provides detailed field-level errors.

5. **Phone Numbers:** Format as 10 digits without spaces, dashes, or country code.

6. **Amounts:** Support both integer and decimal values (up to 2 decimal places).

7. **Timestamps:**
   - `epoch` fields are Unix timestamps in milliseconds
   - `timestamp` fields are ISO 8601 strings
   - Convert appropriately for display

8. **Status Polling:** For QR/Push payments, either:
   - Poll `/v2/codi/consulta` periodically
   - Implement webhook handler for real-time updates

9. **Webhook Testing:** Use tools like ngrok to expose local webhook endpoint for testing.

10. **Success States:**
    - QR/Push 200 response = Request sent successfully
    - Doesn't mean payment completed - check via consulta or webhook

---

**Last Updated:** January 2025
**API Version:** 2.0.0
**Source:** Extracted from Swagger documentation in `/routes/home.js`
