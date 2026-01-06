<script setup lang="ts">
const { option } = defineProps<{ option: string }>();

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' },
];

const emit = defineEmits<{ (e: 'sort', option: string): void }>();
</script>

<template>
  <div class="bookmark-sort">
    <button
      class="sort-item"
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      :class="option === item.option ? 'active' : ''"
      @click="emit('sort', item.option)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>
.bookmark-sort {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort-item {
  font-size: 16px;
  color: var(--color-inactive);
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  cursor: pointer;
}

.sort-item.active {
  color: var(--color-fg);
  border-color: var(--color-fg);
}
</style>
