<script setup lang="ts">
import { useCategoryStore } from '@/stors/category.store.ts';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import type { Category } from '@/interfaces/category.interface.ts';
import { useBookmarkStore } from '@/stors/bookmark.store.ts'

const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();

const loadByAlias = async (alias: string) => {
  if (categoryStore.categories.length === 0) {
    await categoryStore.fetchCategories();
  }

  const found = categoryStore.getCategoryByAlias(alias);

  if (!found) {
    await router.replace({ name: 'NotFound' });
    return;
  }

  category.value = found;
  await bookmarkStore.fetchBookmarks(found.id);
};

watch(
  () => String(route.params.alias ?? ''),
  (alias) => loadByAlias(alias),
  { immediate: true }
);

onBeforeRouteUpdate((to) => {
  loadByAlias(String(to.params.alias ?? ''));
});
</script>

<template>Category {{ category?.name }}</template>

<style scoped></style>
