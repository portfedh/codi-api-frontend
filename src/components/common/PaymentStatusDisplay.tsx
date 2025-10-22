import type { ConsultaResponse } from '../../types/api';

interface PaymentStatusDisplayProps {
  data: ConsultaResponse;
}

export default function PaymentStatusDisplay({ data }: PaymentStatusDisplayProps) {
  const getStatusInfo = (edoMC: number) => {
    // Transaction status codes
    const statuses: Record<number, { label: string; color: string; bgColor: string }> = {
      0: { label: 'Completado', color: 'text-green-800', bgColor: 'bg-green-100' },
      [-1]: { label: 'Pendiente', color: 'text-yellow-800', bgColor: 'bg-yellow-100' },
      [-2]: { label: 'Error', color: 'text-red-800', bgColor: 'bg-red-100' },
      [-3]: { label: 'Rechazado', color: 'text-red-800', bgColor: 'bg-red-100' },
    };
    return statuses[edoMC] || { label: 'Desconocido', color: 'text-gray-800', bgColor: 'bg-gray-100' };
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Account Information */}
      {data.data.resultado.v && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-3">Información de la Cuenta</h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <dt className="text-xs text-blue-700 mb-1">Cuenta Bancaria</dt>
              <dd className="font-mono text-sm text-blue-900">{data.data.resultado.v.ctaBancaria}</dd>
            </div>
            <div>
              <dt className="text-xs text-blue-700 mb-1">Institución</dt>
              <dd className="font-mono text-sm text-blue-900">{data.data.resultado.v.cveInstit}</dd>
            </div>
            <div>
              <dt className="text-xs text-blue-700 mb-1">Titular</dt>
              <dd className="font-mono text-sm text-blue-900">{data.data.resultado.v.nombre}</dd>
            </div>
            <div>
              <dt className="text-xs text-blue-700 mb-1">Tipo de Cuenta</dt>
              <dd className="font-mono text-sm text-blue-900">{data.data.resultado.v.tipoCta}</dd>
            </div>
          </dl>
        </div>
      )}

      {/* Transactions List */}
      {data.data.resultado.lstDetalleMC && data.data.resultado.lstDetalleMC.length > 0 ? (
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            Transacciones ({data.data.resultado.lstDetalleMC.length})
          </h4>
          <div className="space-y-3">
            {data.data.resultado.lstDetalleMC.map((transaction, index) => {
              const status = getStatusInfo(transaction.edoMC);
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${status.bgColor} ${status.color}`}>
                      {status.label}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(transaction.tSolicitud)}
                    </span>
                  </div>

                  {/* Transaction Details */}
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <dt className="text-xs text-gray-600 mb-1">Folio CoDi</dt>
                      <dd className="font-mono text-sm text-gray-900">{transaction.folioCodi}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-600 mb-1">Monto</dt>
                      <dd className="font-semibold text-lg text-gray-900">
                        ${parseFloat(transaction.monto).toFixed(2)} MXN
                      </dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-xs text-gray-600 mb-1">Concepto</dt>
                      <dd className="text-sm text-gray-900">{transaction.concepto}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-600 mb-1">Referencia Numérica</dt>
                      <dd className="font-mono text-sm text-gray-900">{transaction.refNum}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-600 mb-1">Tipo de Proceso</dt>
                      <dd className="text-sm text-gray-900">{transaction.tProc}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>

          {/* Pagination Info */}
          {data.data.ultPag !== undefined && (
            <p className="mt-4 text-sm text-gray-600">
              {data.data.ultPag ? (
                <span className="text-green-600">✓ Esta es la última página</span>
              ) : (
                <span className="text-blue-600">Hay más páginas disponibles</span>
              )}
            </p>
          )}
        </div>
      ) : (
        <div className="p-8 text-center bg-gray-50 border border-gray-200 rounded-lg">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-600 font-medium">No se encontraron transacciones</p>
          <p className="text-sm text-gray-500 mt-1">
            Verifica el folio o ajusta los parámetros de búsqueda
          </p>
        </div>
      )}
    </div>
  );
}
