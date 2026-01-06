<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stors/category.store.ts'
import { useAuthStore } from '@/stors/auth.store.ts'
import { useRouter } from 'vue-router'
import ButtonCommon from '@/components/ButtonCommon.vue'
import IconNew from '@/components/IconNew.vue'

const router = useRouter();
const store = useCategoryStore();
const authStore = useAuthStore();

onMounted(() => {
  store.fetchCategories();
});

function logout() {
  authStore.clearToken();
  router.push({name: 'auth'});
}
</script>

<template>
  <ul class="category-list">
    <li v-for="category in store.categories" :key="category.id">
      <RouterLink active-class="active" class="category-list__item" :to="`/main/${category.alias}`">{{ category.name }}</RouterLink>
    </li>
    <li>
      <a href="#" class="category-list__item" @click="store.createCategory()">
        <ButtonCommon>
          <IconNew/>
        </ButtonCommon>
      </a>
    </li>
    <li>
      <a href="#" class="category-list__item" @click="logout">Выйти</a>
    </li>
  </ul>
</template>

<style scoped>
  .category-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
