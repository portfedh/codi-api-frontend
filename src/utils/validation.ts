import { z } from 'zod';

/**
 * Validation schema for QR code generation form
 */
export const qrFormSchema = z.object({
  apiKey: z
    .string()
    .min(1, 'API Key es requerida')
    .length(128, 'API Key debe tener exactamente 128 caracteres'),

  monto: z
    .number({ message: 'Monto debe ser un número' })
    .positive('Monto debe ser mayor a 0')
    .max(999999999999.99, 'Monto máximo excedido')
    .multipleOf(0.01, 'Monto debe tener máximo 2 decimales'),

  concepto: z
    .string()
    .min(1, 'Concepto es requerido')
    .max(40, 'Concepto debe tener máximo 40 caracteres')
    .regex(/^[\x20-\x7E]*$/, 'Concepto debe contener solo caracteres ASCII'),

  referenciaNumerica: z
    .string()
    .regex(/^\d{1,7}$/, 'Referencia debe ser un número de 1-7 dígitos'),

  vigencia: z
    .string(),
});

/**
 * Validation schema for Push notification form
 */
export const pushFormSchema = qrFormSchema.extend({
  celularCliente: z
    .string()
    .regex(/^\d{10}$/, 'Número de celular debe tener exactamente 10 dígitos'),
});

/**
 * Validation schema for Payment status query form
 */
export const consultaFormSchema = z.object({
  apiKey: z
    .string()
    .min(1, 'API Key es requerida')
    .length(128, 'API Key debe tener exactamente 128 caracteres'),

  folioCodi: z
    .string()
    .min(10, 'Folio debe tener al menos 10 caracteres')
    .max(20, 'Folio debe tener máximo 20 caracteres'),

  tpg: z
    .number({ message: 'Debe ser un número' })
    .int('Debe ser un número entero')
    .min(1, 'Mínimo 1')
    .max(100, 'Máximo 100'),

  npg: z
    .number({ message: 'Debe ser un número' })
    .int('Debe ser un número entero')
    .min(1, 'Mínimo 1'),

  fechaInicial: z
    .string()
    .regex(/^(\d{8}|0)$/, 'Formato debe ser YYYYMMDD o 0'),

  fechaFinal: z
    .string()
    .regex(/^(\d{8}|0)$/, 'Formato debe ser YYYYMMDD o 0'),
});

// Export TypeScript types inferred from schemas
export type QRFormData = z.infer<typeof qrFormSchema>;
export type PushFormData = z.infer<typeof pushFormSchema>;
export type ConsultaFormData = z.infer<typeof consultaFormSchema>;
