<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({name: 'main'})
}
</script>

<template>
  <div class="not-found">
    <div class="not-found__form">
      <h2 class="not-found__title">404</h2>
      <button class="btn" @click="redirectToMain">На главную</button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  height: 100vh;
  display: grid;
  place-items: center;
}
.not-found__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.not-found__title {
  font-size: 150px;
  font-weight: bold;
}
.btn {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: var(--color-bg);
  background-color: var(--color-fg);
  border-radius: 20px;
  border: none;
  cursor: pointer;
}
</style>
