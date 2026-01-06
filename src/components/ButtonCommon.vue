<script setup lang="ts">

</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 5px;
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
