<script setup lang="ts">

import CategoryList from '@/components/CategoryList.vue'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar/>
      <CategoryList/>
    </nav>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 1450px;
  width: 100%;
  margin: 140px auto 0;
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 20px;
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 280px;
}
.main {
  width: 100%;
}
</style>
