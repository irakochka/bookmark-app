<script setup lang="ts">
</script>

<template>
 <RouterView/>
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
