<script setup lang="ts">
import { useRouter } from 'vue-router';
import InputString from '@/components/InputString.vue';
import { ref, watch } from 'vue';
import { useAuthStore } from '@/stors/auth.store.ts';

const router = useRouter();
const form = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({name: 'main'});
    }
  },
);

function onSubmit(event: Event) {
  event.preventDefault();
  if (!form.value.email || !form.value.password) return;
  authStore.login(form.value.email, form.value.password);
  form.value = {};
}
</script>

<template>
  <div class="auth">
    <div class="auth__wrapper">
      <h2 class="main-title">Bookmarkly</h2>
      <form class="auth__form" @submit="onSubmit">
        <input-string v-model="form.email" placeholder="email" />
        <input-string v-model="form.password" placeholder="password" type="password" />

        <button class="btn" type="submit">Вход</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth {
  height: 100vh;
  display: grid;
  place-items: center;
}

.auth__wrapper,
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
