// Cliente genérico para requisições HTTP à API

const API_BASE_URL = 'http://localhost:8080'; // ajuste conforme necessário

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    console.log(`Fetching from API: ${API_BASE_URL}${endpoint}`);
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    },
    ...options
  });
  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }
  return response.json();
}
