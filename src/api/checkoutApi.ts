// Exemplo de função para consumir uma rota da API
import { apiFetch } from './apiClient';

// Exemplo: buscar dados de /api/exemplo
export async function createCheckoutSession() {
  // Ajuste o endpoint conforme o backend espera, por exemplo '/api/create-checkout-session' se o backend usar esse prefixo
  return apiFetch<any>('/api/create-checkout-session', {
    method: 'GET',
  });
}

// Você pode criar outras funções para outros endpoints aqui.
