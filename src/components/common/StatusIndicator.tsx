import { useHealthCheck } from '../../hooks/useHealthCheck';

export default function StatusIndicator() {
  const { data, isLoading, isError } = useHealthCheck();

  const getStatus = () => {
    if (isLoading) {
      return { color: 'bg-gray-400', text: 'Verificando...', pulse: false };
    }
    if (isError || data?.status === 'unhealthy') {
      return { color: 'bg-red-500', text: 'Sistema Fuera de Línea', pulse: false };
    }
    return { color: 'bg-green-500', text: 'Sistema Operativo', pulse: true };
  };

  const status = getStatus();

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
      <span className="relative flex h-3 w-3">
        {status.pulse && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.color} opacity-75`}></span>
        )}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${status.color}`}></span>
      </span>
      <span className="text-sm font-medium text-gray-700">{status.text}</span>
    </div>
  );
}
