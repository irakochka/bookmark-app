<script setup lang="ts">
import { useCategoryStore } from '@/stors/category.store.ts';
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import { useBookmarkStore } from '@/stors/bookmark.store.ts'
import CategoryHeader from '@/components/CategoryHeader.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'
import BookmarkSort from '@/components/BookmarkSort.vue'
import BookmarkAdd from '@/components/BookmarkAdd.vue'

const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();

const alias = computed(() => String(route.params.alias ?? ''));

const category = computed(() => categoryStore.getCategoryByAlias(alias.value));

watch(alias, async () => {
  if (categoryStore.categories.length === 0) {
    await categoryStore.fetchCategories();
  }
  const found = category.value;
  if (!found) {
    await router.replace({ name: 'NotFound' });
    return;
  }
  await bookmarkStore.fetchBookmarks(found.id, bookmarkStore.activeSort);
}, { immediate: true });

async function sortBookmarks(sort: string) {
  bookmarkStore.activeSort = sort;
  if (category.value) {
    await bookmarkStore.fetchBookmarks(category.value?.id, bookmarkStore.activeSort);
  }
}
</script>

<template>
  <CategoryHeader v-if="category" :category="category"/>
  <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks"/>
  <div class="category-list">
    <BookmarkCard v-for="bookmark in bookmarkStore.bookmarks" :key="bookmark.id" v-bind="bookmark"/>
    <BookmarkAdd v-if="category" :category_id="category.id"/>
  </div>
</template>

<style scoped>
.category-list {
  margin-top: 30px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
