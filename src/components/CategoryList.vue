<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stors/category.store.ts'

const store = useCategoryStore();

onMounted(() => {
  store.fetchCategories();
});
</script>

<template>
  <ul class="category-list">
    <li v-for="category in store.categories" :key="category.id">
      <RouterLink active-class="active" class="category-list__item" :to="`/main/${category.alias}`">{{ category.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
  .category-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .category-list__item {
    color: var(--color-fg);

    &:hover {
      color: var(--color-accent);
    }
  }
  .category-list__item.active {
    color: var(--color-accent);
  }
</style>
