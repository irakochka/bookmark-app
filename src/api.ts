import axios from 'axios'
import { useAuthStore } from '@/stors/auth.store.ts'

export const API_ROUTES = {
  auth: {
    login: "auth/login",
    profile: "auth/profile",
  },
  profile: "profile",
  categories: "categories",
  bookmarks: {
    get: (id: number) => `categories/${id}/bookmarks`,
    delete: (id: number) => `bookmarks/${id}`,
    create: () => 'bookmarks',
  }
}

// export const http = axios.create({
//   baseURL: "http://localhost:3000/api",
//   timeout: 10000
// })

export function client() {
  const authStore = useAuthStore();
  return axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`
    }
  })
}
