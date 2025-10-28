import { ActiveFlight, CompletedFlight, UserStats, ApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

// Helper para hacer fetch
async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: 'no-store', // Deshabilitar cache para datos en tiempo real
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  const data: ApiResponse<T> = await response.json();
  
  if (!data.success) {
    throw new Error(data.error || 'Error desconocido');
  }

  return data.data as T;
}

// Obtener vuelo activo
export async function getActiveFlight(): Promise<ActiveFlight | null> {
  try {
    return await fetchApi<ActiveFlight>('/flight/active');
  } catch (error) {
    console.error('Error obteniendo vuelo activo:', error);
    return null;
  }
}

// Obtener ranking global
export async function getRanking(limit: number = 10): Promise<CompletedFlight[]> {
  try {
    return await fetchApi<CompletedFlight[]>(`/ranking?limit=${limit}`);
  } catch (error) {
    console.error('Error obteniendo ranking:', error);
    return [];
  }
}

// Obtener vuelos de un usuario
export async function getUserFlights(userId: string, limit: number = 20): Promise<CompletedFlight[]> {
  try {
    return await fetchApi<CompletedFlight[]>(`/ranking/user/${userId}?limit=${limit}`);
  } catch (error) {
    console.error('Error obteniendo vuelos del usuario:', error);
    return [];
  }
}

// Obtener estadísticas de un usuario
export async function getUserStats(userId: string): Promise<UserStats | null> {
  try {
    return await fetchApi<UserStats>(`/ranking/stats/${userId}`);
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return null;
  }
}

// Health check
export async function checkHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    return false;
  }
}