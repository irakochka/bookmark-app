<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import { onMounted, ref } from 'vue'
import { API_ROUTES } from '@/api.ts'
import type { Profile } from '@/interfaces/profile.ts'

const profile = ref<Profile>()

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  profile.value = (await data.json()) as Profile;
}

onMounted(() => {
  fetchProfile();
})
</script>

<template>
 <div class="app">
   <nav class="nav">
     <ProfileAvatar v-if="profile" :name="profile.name"/>
   </nav>
   <main>Контент</main>
 </div>
</template>

<style scoped>
.app {
  max-width: 1450px;
  width: 100%;
  margin: 140px auto 0;
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
}
.nav {
  min-width: 400px;
}
</style>
