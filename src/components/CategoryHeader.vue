<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface.ts';
import IconEdit from '@/components/IconEdit.vue';
import { ref } from 'vue'
import IconOk from '@/components/IconOk.vue'
import InputString from '@/components/InputString.vue'
import ButtonCommon from '@/components/ButtonCommon.vue'
import IconTrash from '@/components/IconTrash.vue'
import { useCategoryStore } from '@/stors/category.store.ts'
import { useRouter } from 'vue-router'

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoryStore();
const router = useRouter();

function toggleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) return;
  categoryStore.updateCategory(category.id, newCategoryName.value, category.alias)
  toggleEdit();
}

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  router.push({name: 'main'});
}
</script>

<template>
  <div class="category-header">
    <div v-if="!isEdited" class="category-header__wrapper">
      <h2>{{ category.name }}</h2>
      <ButtonCommon @click="toggleEdit">
        <IconEdit />
      </ButtonCommon>
    </div>
    <div v-if="isEdited" class="category-header__wrapper">
      <InputString v-model="newCategoryName" class="category-header__input" is-focused/>
      <ButtonCommon @click="updateCategory()">
        <IconOk />
      </ButtonCommon>
    </div>
    <ButtonCommon @click="deleteCategory()">
      <IconTrash/>
    </ButtonCommon>
  </div>
</template>

<style scoped>
.category-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}
.category-header__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.category-header__input {
  width: 100%;
}
</style>
