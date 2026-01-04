<script setup lang="ts">

</script>

<template>
  <div class="index">
    <h2 class="index__header">Добро пожаловать в Bookmarkly!</h2>
    <p class="index__description">Чтобы начать пользоваться, выберите категорию закладок или создайте новую.</p>
  </div>
</template>

<style scoped>
  .index {
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .index__header {
    font-size: 30px;
    font-weight: bold;
  }
  .index__description {
    font-size: 16px;
  }
</style>
