import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'
import type { LoginResponse } from '@/interfaces/auth.interface.ts'

const TOKEN_STORE_KEY = 'token-key';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();
  const initialTokenValue = localStorage.getItem(TOKEN_STORE_KEY)

  if (initialTokenValue) {
    token.value = initialTokenValue;
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  const getToken = computed(() => token.value)

  async function login(email: string, password: string) {
    const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
      email,
      password
    });
    setToken(data.token)
  }

  return { getToken, login, setToken, clearToken };
});
