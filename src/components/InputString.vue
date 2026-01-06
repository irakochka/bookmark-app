<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

const data = defineModel<string>();
const input = useTemplateRef<HTMLInputElement>('input');

const { isFocused = false } = defineProps<{ isFocused: boolean }>();

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus();
  }
})

</script>

<template>
  <input class="input-string" v-model="data" type="text" ref="input">
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
