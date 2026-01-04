<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({name: 'main'})
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <h2 class="main-title">Bookmarkly</h2>
      <button class="btn" @click="redirectToMain">Вход</button>
    </div>
  </div>
</template>

<style scoped>
.auth {
  height: 100vh;
  display: grid;
  place-items: center;
}
.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.main-title {
  font-size: 50px;
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
