import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'
import type { Category } from '@/interfaces/category.interface.ts'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await client().get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }


  function getCategoryByAlias(alias: string | string[]): Category | undefined {
    if (typeof alias === 'string') {
      return categories.value.find(c => c.alias === alias)
    }
    return;
  }

  return { categories, fetchCategories, getCategoryByAlias };
});
