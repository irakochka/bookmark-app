<script setup lang="ts">

</script>

<template>
  <button class="button-icon-big">
    <slot/>
  </button>
</template>

<style scoped>
.button-icon-big {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid var(--color-bg);
}
.button-icon-big:hover {

}
</style>
