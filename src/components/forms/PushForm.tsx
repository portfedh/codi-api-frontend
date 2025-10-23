import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { pushFormSchema, type PushFormData } from '../../utils/validation';
import { codiApi, getErrorMessage } from '../../services/api';
import { useApiKey } from '../../hooks/useApiKey';
import type { PushResponse } from '../../types/api';
import JSONDisplay from '../common/JSONDisplay';

export default function PushForm() {
  const { apiKey, saveApiKey, clearApiKey } = useApiKey();
  const [response, setResponse] = useState<PushResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PushFormData>({
    resolver: zodResolver(pushFormSchema),
    defaultValues: {
      apiKey: apiKey || '',
      monto: 0,
      concepto: '',
      referenciaNumerica: '0',
      vigencia: '0',
      celularCliente: '',
    },
  });

  // Update form when apiKey changes from hook
  useEffect(() => {
    if (apiKey) {
      setValue('apiKey', apiKey);
    }
  }, [apiKey, setValue]);

  const mutation = useMutation({
    mutationFn: async (data: PushFormData) => {
      saveApiKey(data.apiKey);

      return codiApi.sendPush({
        monto: data.monto,
        concepto: data.concepto,
        referenciaNumerica: data.referenciaNumerica,
        vigencia: data.vigencia,
        celularCliente: data.celularCliente,
      }, data.apiKey);
    },
    onSuccess: (data) => {
      setResponse(data);
    },
  });

  const onSubmit = (data: PushFormData) => {
    setResponse(null);
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

        {/* Celular Cliente */}
        <div>
          <label htmlFor="celularCliente" className="block text-sm font-medium text-gray-700 mb-1">
            Número de Celular <span className="text-red-500">*</span>
          </label>
          <input
            {...register('celularCliente')}
            type="tel"
            id="celularCliente"
            maxLength={10}
            className="input-field"
            placeholder="5512345678 (10 dígitos)"
          />
          {errors.celularCliente && (
            <p className="mt-1 text-sm text-red-600">{errors.celularCliente.message}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">El número debe estar registrado en el banco del cliente</p>
        </div>

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
          <p className="mt-1 text-xs text-gray-500">Máximo: 999,999,999,999.99. Máximo 2 decimales</p>
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
              placeholder="1234567"
            />
            {errors.referenciaNumerica && (
              <p className="mt-1 text-sm text-red-600">{errors.referenciaNumerica.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Opcional. Usa "0" si no aplica. 7 números máximo</p>
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
              placeholder="0"
            />
            {errors.vigencia && (
              <p className="mt-1 text-sm text-red-600">{errors.vigencia.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Opcional. Usa "0" para sin expiración o el tiempo de expiración (Unix epoch)</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? 'Enviando...' : 'Enviar Push Notification'}
          </button>

          {mutation.isPending && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Enviando notificación...</span>
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
      {response && mutation.isSuccess && (
        <div className="mt-8 space-y-6">
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resultado</h3>

            {/* Success Message */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-green-900 mb-1">Push Notification Enviada</h4>
                  <p className="text-sm text-green-800">
                    La solicitud de pago se envió exitosamente al celular del cliente.
                    El cliente recibirá una notificación en su app bancaria.
                  </p>
                  {response.data?.folioCodi && (
                    <p className="text-sm text-green-800 mt-2">
                      <strong>Folio CoDi:</strong> <code className="bg-green-100 px-2 py-1 rounded">{response.data.folioCodi}</code>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* JSON Response */}
            <JSONDisplay data={response} title="Respuesta Completa" />
          </div>
        </div>
      )}
    </div>
  );
}
