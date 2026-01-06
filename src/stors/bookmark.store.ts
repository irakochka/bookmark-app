import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'
import type { Bookmark } from '@/interfaces/bookmark.interface.ts'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort
      }
    });
    bookmarks.value = data;
  }

  async function addBookmark(category_id: number, url: string) {
    await client().post<Bookmark>(API_ROUTES.bookmarks.create(), {
      url,
      category_id
    });
    await fetchBookmarks(category_id, activeSort.value);
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await client().delete(API_ROUTES.bookmarks.delete(id));
    await fetchBookmarks(categoryId, activeSort.value);
  }

  return { bookmarks, activeSort, fetchBookmarks, deleteBookmark, addBookmark };
});
