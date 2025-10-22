import { useQuery } from '@tanstack/react-query';
import { codiApi } from '../services/api';
import type { HealthCheckResponse } from '../types/api';

/**
 * Custom hook to check API health status
 * Polls every 30 seconds to keep status updated
 */
export function useHealthCheck() {
  return useQuery<HealthCheckResponse>({
    queryKey: ['health'],
    queryFn: () => codiApi.healthCheck(),
    refetchInterval: 30000, // Refetch every 30 seconds
    retry: 2,
  });
}
