<script setup lang="ts">
const data = defineModel<string>()
</script>

<template>
  <input class="input-string" v-model="data" type="text">
</template>

<style scoped>
.input-string {
  min-width: 274px;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid var(--color-fg);
}
.input-string:focus {
  outline: none;
  border-color: var(--color-accent);
}
.input-string::placeholder {
  color: var(--color-inactive);
}
</style>
