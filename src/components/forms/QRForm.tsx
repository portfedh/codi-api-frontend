import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { qrFormSchema, type QRFormData } from '../../utils/validation';
import { codiApi, getErrorMessage } from '../../services/api';
import { useApiKey } from '../../hooks/useApiKey';
import type { QRResponse } from '../../types/api';
import QRCodeDisplay from '../common/QRCodeDisplay';
import JSONDisplay from '../common/JSONDisplay';

export default function QRForm() {
  const { apiKey, saveApiKey, clearApiKey } = useApiKey();
  const [response, setResponse] = useState<QRResponse | null>(null);
  const [institutions, setInstitutions] = useState<Array<{ code: number; name: string }>>([]);

  // Load institutions data
  useEffect(() => {
    fetch('/data/institutions.json')
      .then((res) => res.json())
      .then((data) => setInstitutions(data.production))
      .catch((err) => console.error('Error loading institutions:', err));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<QRFormData>({
    resolver: zodResolver(qrFormSchema),
    defaultValues: {
      apiKey: apiKey || '',
      monto: 0,
      concepto: '',
      referenciaNumerica: '0',
      institucion: '',
      vigencia: '0',
    },
  });

  // Update form when apiKey changes from hook
  useEffect(() => {
    if (apiKey) {
      setValue('apiKey', apiKey);
    }
  }, [apiKey, setValue]);

  const mutation = useMutation({
    mutationFn: async (data: QRFormData) => {
      // Save API key for future use
      saveApiKey(data.apiKey);

      // Call API
      return codiApi.generateQR({
        monto: data.monto,
        concepto: data.concepto,
        referenciaNumerica: data.referenciaNumerica,
        vigencia: data.vigencia,
      }, data.apiKey);
    },
    onSuccess: (data) => {
      setResponse(data);
    },
  });

  const onSubmit = (data: QRFormData) => {
    setResponse(null); // Clear previous response
    mutation.mutate(data);
  };

  const handleClearApiKey = () => {
    clearApiKey();
    setValue('apiKey', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* API Key */}
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
            API Key <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <input
              {...register('apiKey')}
              type="password"
              id="apiKey"
              className="input-field flex-1"
              placeholder="128 caracteres hexadecimales"
            />
            {apiKey && (
              <button
                type="button"
                onClick={handleClearApiKey}
                className="px-3 py-2 text-sm text-red-600 hover:text-red-700 border border-red-300 rounded-lg hover:bg-red-50"
              >
                Limpiar
              </button>
            )}
          </div>
          {errors.apiKey && (
            <p className="mt-1 text-sm text-red-600">{errors.apiKey.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Monto */}
          <div>
            <label htmlFor="monto" className="block text-sm font-medium text-gray-700 mb-1">
              Monto <span className="text-red-500">*</span>
            </label>
            <input
              {...register('monto', { valueAsNumber: true })}
              type="number"
              id="monto"
              step="0.01"
              className="input-field"
              placeholder="99.99"
            />
            {errors.monto && (
              <p className="mt-1 text-sm text-red-600">{errors.monto.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Máximo: 999,999,999,999.99</p>
          </div>

          {/* Institución */}
          <div>
            <label htmlFor="institucion" className="block text-sm font-medium text-gray-700 mb-1">
              Institución <span className="text-red-500">*</span>
            </label>
            <select
              {...register('institucion')}
              id="institucion"
              className="input-field"
            >
              <option value="">Selecciona una institución</option>
              {institutions.map((inst) => (
                <option key={inst.code} value={inst.code}>
                  {inst.code} - {inst.name}
                </option>
              ))}
            </select>
            {errors.institucion && (
              <p className="mt-1 text-sm text-red-600">{errors.institucion.message}</p>
            )}
          </div>
        </div>

        {/* Concepto */}
        <div>
          <label htmlFor="concepto" className="block text-sm font-medium text-gray-700 mb-1">
            Concepto <span className="text-red-500">*</span>
          </label>
          <input
            {...register('concepto')}
            type="text"
            id="concepto"
            maxLength={40}
            className="input-field"
            placeholder="Descripción del pago (máx. 40 caracteres ASCII)"
          />
          {errors.concepto && (
            <p className="mt-1 text-sm text-red-600">{errors.concepto.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Referencia Numérica */}
          <div>
            <label htmlFor="referenciaNumerica" className="block text-sm font-medium text-gray-700 mb-1">
              Referencia Numérica
            </label>
            <input
              {...register('referenciaNumerica')}
              type="text"
              id="referenciaNumerica"
              maxLength={7}
              className="input-field"
              placeholder="1234567 (1-7 dígitos)"
            />
            {errors.referenciaNumerica && (
              <p className="mt-1 text-sm text-red-600">{errors.referenciaNumerica.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Opcional. Usa "0" si no aplica.</p>
          </div>

          {/* Vigencia */}
          <div>
            <label htmlFor="vigencia" className="block text-sm font-medium text-gray-700 mb-1">
              Vigencia
            </label>
            <input
              {...register('vigencia')}
              type="text"
              id="vigencia"
              className="input-field"
              placeholder="Unix timestamp en milisegundos"
            />
            {errors.vigencia && (
              <p className="mt-1 text-sm text-red-600">{errors.vigencia.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Opcional. Usa "0" para sin expiración.</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? 'Generando...' : 'Generar Código QR'}
          </button>

          {mutation.isPending && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Conectando con Banxico...</span>
            </div>
          )}
        </div>

        {/* Error Display */}
        {mutation.isError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>Error:</strong> {getErrorMessage(mutation.error)}
            </p>
          </div>
        )}
      </form>

      {/* Response Display */}
      {response && (
        <div className="mt-8 space-y-6">
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resultado</h3>

            {/* QR Code */}
            <QRCodeDisplay qrCode={response.qrCode} />

            {/* JSON Response */}
            <JSONDisplay data={response} title="Respuesta Completa" />
          </div>
        </div>
      )}
    </div>
  );
}
