import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { consultaFormSchema, type ConsultaFormData } from '../../utils/validation';
import { codiApi, getErrorMessage } from '../../services/api';
import { useApiKey } from '../../hooks/useApiKey';
import type { ConsultaResponse } from '../../types/api';
import PaymentStatusDisplay from '../common/PaymentStatusDisplay';
import JSONDisplay from '../common/JSONDisplay';

export default function ConsultaForm() {
  const { apiKey, saveApiKey, clearApiKey } = useApiKey();
  const [response, setResponse] = useState<ConsultaResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ConsultaFormData>({
    resolver: zodResolver(consultaFormSchema),
    defaultValues: {
      apiKey: apiKey || '',
      folioCodi: '',
      tpg: 10,
      npg: 1,
      fechaInicial: '0',
      fechaFinal: '0',
    },
  });

  // Update form when apiKey changes from hook
  useEffect(() => {
    if (apiKey) {
      setValue('apiKey', apiKey);
    }
  }, [apiKey, setValue]);

  const mutation = useMutation({
    mutationFn: async (data: ConsultaFormData) => {
      saveApiKey(data.apiKey);

      return codiApi.checkStatus({
        folioCodi: data.folioCodi,
        tpg: data.tpg,
        npg: data.npg,
        fechaInicial: data.fechaInicial,
        fechaFinal: data.fechaFinal,
      }, data.apiKey);
    },
    onSuccess: (data) => {
      setResponse(data);
    },
  });

  const onSubmit = (data: ConsultaFormData) => {
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

        {/* Folio CoDi */}
        <div>
          <label htmlFor="folioCodi" className="block text-sm font-medium text-gray-700 mb-1">
            Folio CoDi <span className="text-red-500">*</span>
          </label>
          <input
            {...register('folioCodi')}
            type="text"
            id="folioCodi"
            className="input-field font-mono"
            placeholder="321e210838321e210838 (10-20 caracteres)"
          />
          {errors.folioCodi && (
            <p className="mt-1 text-sm text-red-600">{errors.folioCodi.message}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            El folio CoDi se obtiene de la respuesta del endpoint Push
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Items per Page */}
          <div>
            <label htmlFor="tpg" className="block text-sm font-medium text-gray-700 mb-1">
              Operaciones por Página
            </label>
            <input
              {...register('tpg', { valueAsNumber: true })}
              type="number"
              id="tpg"
              min="1"
              max="100"
              className="input-field"
              placeholder="10"
            />
            {errors.tpg && (
              <p className="mt-1 text-sm text-red-600">{errors.tpg.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Mínimo: 1, Máximo: 100</p>
          </div>

          {/* Page Number */}
          <div>
            <label htmlFor="npg" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Página
            </label>
            <input
              {...register('npg', { valueAsNumber: true })}
              type="number"
              id="npg"
              min="1"
              className="input-field"
              placeholder="1"
            />
            {errors.npg && (
              <p className="mt-1 text-sm text-red-600">{errors.npg.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Comienza en 1</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label htmlFor="fechaInicial" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Inicial
            </label>
            <input
              {...register('fechaInicial')}
              type="text"
              id="fechaInicial"
              className="input-field"
              placeholder="20250321 o 0 para todas"
            />
            {errors.fechaInicial && (
              <p className="mt-1 text-sm text-red-600">{errors.fechaInicial.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Formato: YYYYMMDD o "0" para todas las fechas</p>
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="fechaFinal" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Final
            </label>
            <input
              {...register('fechaFinal')}
              type="text"
              id="fechaFinal"
              className="input-field"
              placeholder="20250331 o 0 para todas"
            />
            {errors.fechaFinal && (
              <p className="mt-1 text-sm text-red-600">{errors.fechaFinal.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Formato: YYYYMMDD o "0" para todo el historial</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? 'Consultando...' : 'Consultar Estado'}
          </button>

          {mutation.isPending && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Consultando Banxico...</span>
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
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resultado de la Consulta</h3>

            {/* Payment Status Display */}
            <PaymentStatusDisplay data={response} />

            {/* JSON Response */}
            <JSONDisplay data={response} title="Respuesta Completa" />
          </div>
        </div>
      )}
    </div>
  );
}
