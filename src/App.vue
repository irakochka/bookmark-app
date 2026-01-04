<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
</script>

<template>
 <div class="app">
   <nav class="nav">
     <ProfileAvatar/>
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
