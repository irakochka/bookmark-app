<script setup lang="ts">
import { useProfileStore } from '@/stors/profile.store.ts'
import { onMounted } from 'vue'

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div class="profile-avatar" v-if="store.profile">
    <img src="/public/avatar.png" alt="" class="profile-avatar__img">
    <div class="profile-avatar__name">Привет, <span>{{ store.profile.name }}</span>!</div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.profile-avatar__img {
  max-width: 80px;
  width: 80px;
  height: 80px;
}

.profile-avatar__name {
  font-size: 14px;

  span {
    font-weight: bold;
  }
}
</style>
