<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
 <div class="app">
   <nav class="nav">
     <ProfileAvatar/>
     <CategoryList/>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 280px;
}
</style>
