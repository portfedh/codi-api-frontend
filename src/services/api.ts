import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type {
  HealthCheckResponse,
  QRRequest,
  QRResponse,
  PushRequest,
  PushResponse,
  ConsultaRequest,
  ConsultaResponse,
  ErrorResponse,
  EnrollmentSubmission,
  EnrollmentResponse,
} from '../types/api';

// Get API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Create Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

// Request interceptor for logging (development only)
if (import.meta.env.DEV) {
  apiClient.interceptors.request.use(
    (config) => {
      console.log('API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
      });
      return config;
    },
    (error) => {
      console.error('API Request Error:', error);
      return Promise.reject(error);
    }
  );
}

// Response interceptor for logging (development only)
if (import.meta.env.DEV) {
  apiClient.interceptors.response.use(
    (response) => {
      console.log('API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
      return response;
    },
    (error) => {
      console.error('API Response Error:', error);
      return Promise.reject(error);
    }
  );
}

// ============================================================================
// API Key Management
// ============================================================================

/**
 * Set the API key for all subsequent requests
 * @param apiKey - 128 character hexadecimal API key
 */
export const setApiKey = (apiKey: string): void => {
  if (apiKey) {
    apiClient.defaults.headers.common['x-api-key'] = apiKey;
  } else {
    delete apiClient.defaults.headers.common['x-api-key'];
  }
};

/**
 * Remove the API key from headers
 */
export const clearApiKey = (): void => {
  delete apiClient.defaults.headers.common['x-api-key'];
};

// ============================================================================
// Error Handling Helper
// ============================================================================

/**
 * Extract error message from API error response
 */
export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ErrorResponse>;

    // Check if response has error data
    if (axiosError.response?.data) {
      const errorData = axiosError.response.data;

      // Return error message or concatenate validation errors
      if (errorData.message) {
        return errorData.message;
      }

      if (errorData.error) {
        return errorData.error;
      }

      if (errorData.errors && errorData.errors.length > 0) {
        return errorData.errors.map(e => `${e.field}: ${e.message}`).join(', ');
      }
    }

    // Return axios error message
    return axiosError.message;
  }

  // Return generic error
  return 'An unexpected error occurred';
};

// ============================================================================
// API Methods
// ============================================================================

export const codiApi = {
  /**
   * Health check endpoint
   * @returns System health status
   */
  healthCheck: async (): Promise<HealthCheckResponse> => {
    const response = await apiClient.get<HealthCheckResponse>('/v2/health');
    return response.data;
  },

  /**
   * Generate QR code for payment
   * @param data - QR request data
   * @param apiKey - Optional API key (if not set globally)
   * @returns QR code and payment data
   */
  generateQR: async (data: QRRequest, apiKey?: string): Promise<QRResponse> => {
    const headers = apiKey ? { 'x-api-key': apiKey } : {};
    const response = await apiClient.post<QRResponse>('/v2/codi/qr', data, { headers });
    return response.data;
  },

  /**
   * Send push payment notification
   * @param data - Push request data
   * @param apiKey - Optional API key (if not set globally)
   * @returns Push notification result with folioCodi
   */
  sendPush: async (data: PushRequest, apiKey?: string): Promise<PushResponse> => {
    const headers = apiKey ? { 'x-api-key': apiKey } : {};
    const response = await apiClient.post<PushResponse>('/v2/codi/push', data, { headers });
    return response.data;
  },

  /**
   * Query payment status
   * @param data - Consulta request data
   * @param apiKey - Optional API key (if not set globally)
   * @returns Payment status and transaction details
   */
  checkStatus: async (data: ConsultaRequest, apiKey?: string): Promise<ConsultaResponse> => {
    const headers = apiKey ? { 'x-api-key': apiKey } : {};
    const response = await apiClient.post<ConsultaResponse>('/v2/codi/consulta', data, { headers });
    return response.data;
  },

  /**
   * Submit enrollment application with documents
   * @param data - Enrollment form data with files
   * @returns Enrollment confirmation response
   */
  submitEnrollment: async (data: EnrollmentSubmission): Promise<EnrollmentResponse> => {
    const formData = new FormData();

    // Add user type
    formData.append('userType', data.userType);

    // Add common fields
    formData.append('email', data.email);
    formData.append('celular', data.celular);

    // Add type-specific fields
    if (data.userType === 'fisica') {
      formData.append('nombre', data.nombre || '');
    } else {
      formData.append('razonSocial', data.razonSocial || '');
      formData.append('rfc', data.rfc || '');
      formData.append('representanteLegal', data.representanteLegal || '');
    }

    // Add document files
    if (data.documents.ine) {
      formData.append('ine', data.documents.ine);
    }
    if (data.documents.constanciaFiscal) {
      formData.append('constanciaFiscal', data.documents.constanciaFiscal);
    }
    if (data.documents.comprobanteDomicilio) {
      formData.append('comprobanteDomicilio', data.documents.comprobanteDomicilio);
    }
    if (data.documents.caratulaBancaria) {
      formData.append('caratulaBancaria', data.documents.caratulaBancaria);
    }

    const response = await apiClient.post<EnrollmentResponse>(
      '/v2/enrollment',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },
};

// Export the axios instance for advanced usage
export { apiClient };
export default codiApi;
