import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'
import type { Category } from '@/interfaces/category.interface.ts'
import { v4 as uuidv4 } from 'uuid';

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await client().get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await client().post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4()
    });
    categories.value.push(data);
  }

  async function updateCategory(id: number, name: string, alias: string) {
    await client().put<Category>(API_ROUTES.categories + '/' + id, {
      name,
      alias
    });
    await fetchCategories();
  }

  async function deleteCategory(id: number) {
    await client().delete(API_ROUTES.categories + '/' + id);
    await fetchCategories();
  }

  function getCategoryByAlias(alias: string | string[]): Category | undefined {
    if (typeof alias === 'string') {
      return categories.value.find(c => c.alias === alias)
    }
    return;
  }

  return { categories, fetchCategories, getCategoryByAlias, createCategory, updateCategory, deleteCategory };
});
