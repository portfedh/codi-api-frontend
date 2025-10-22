// API Request and Response Types based on context/API_EXAMPLES.md

// ============================================================================
// Health Check Types
// ============================================================================

export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  services: {
    server: {
      status: 'healthy' | 'unhealthy';
    };
    database: {
      status: 'healthy' | 'unhealthy';
      responseTime?: number;
      error?: string;
    };
  };
}

// ============================================================================
// QR Code Generation Types
// ============================================================================

export interface QRRequest {
  monto: number;
  referenciaNumerica: string;
  concepto: string;
  vigencia: string;
}

export interface QRResponse {
  qrCode: string; // Base64 encoded PNG image
  data: {
    cadenaMC: string;
    crtBdeM: string;
    selloDigital: string;
    epoch: number;
    edoPet: number; // 0=Success, -1=Missing info, -2=Processing error, -3=Invalid params, -4=Invalid signature
  };
}

// ============================================================================
// Push Notification Types
// ============================================================================

export interface PushRequest {
  monto: number;
  referenciaNumerica: string;
  concepto: string;
  vigencia: string;
  celularCliente: string; // 10 digit phone number
}

export interface PushResponse {
  success: boolean;
  data: {
    folioCodi: string; // 20 character unique operation ID
    crtBdeM: string;
    selloDigital: string;
    epoch: number;
    edoPet: number;
  };
}

// ============================================================================
// Payment Status Query (Consulta) Types
// ============================================================================

export interface ConsultaRequest {
  folioCodi: string; // 10 or 20 characters
  tpg: number | string; // Operations per page (1-100)
  npg: number | string; // Page number
  fechaInicial: string; // YYYYMMDD or "0"
  fechaFinal: string; // YYYYMMDD or "0"
}

export interface ConsultaResponse {
  success: boolean;
  data: {
    resultado: {
      v: {
        tipoCta: number;
        ctaBancaria: string; // Masked account number
        cveInstit: number;
        nombre: string; // Masked name
      };
      lstDetalleMC: Array<{
        folioCodi: string;
        concepto: string;
        monto: string;
        refNum: number;
        tProc: number;
        tSolicitud: number; // Unix timestamp in milliseconds
        edoMC: number; // Transaction status
        c: {
          tipoCta: number;
          cveInstit: number;
        };
      }>;
    };
    ultPag: boolean; // Is this the last page?
    crtBdeM: string;
    selloDigital: string;
    epoch: number;
    edoPet: number;
  };
}

// ============================================================================
// Webhook Types
// ============================================================================

export interface WebhookPayload {
  operationId: string;
  status: 'COMPLETED' | 'REJECTED' | 'CANCELLED';
  timestamp: string; // ISO 8601
  details?: {
    confirmationId?: string;
    rejectionCode?: string;
    rejectionReason?: string;
  };
}

// ============================================================================
// Error Types
// ============================================================================

export interface ValidationError {
  field: string;
  message: string;
}

export interface ErrorResponse {
  message: string;
  errors?: ValidationError[];
  error?: string;
  code?: string;
}

// ============================================================================
// Common Types
// ============================================================================

export type EdoPetStatus = 0 | -1 | -2 | -3 | -4;

export interface ApiError {
  message: string;
  status?: number;
  errors?: ValidationError[];
}
