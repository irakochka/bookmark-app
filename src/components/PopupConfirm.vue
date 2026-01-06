<script setup lang="ts">
import ButtonCommon from '@/components/ButtonCommon.vue';

const { isOpened, text } = defineProps<{ isOpened: boolean; text: string }>();
const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="cover" v-if="isOpened">
        <div class="popup">
          <div class="popup__content">
            {{ text }}
          </div>
          <div class="popup__actions">
            <ButtonCommon @click="emit('ok')">Удалить</ButtonCommon>
            <ButtonCommon @click="emit('cancel')">Отмена</ButtonCommon>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped>
.cover {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--color-inactive);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  padding: 30px;
  border-radius: 20px;
  background-color: var(--color-bg);
  min-width: 300px;
}

.popup__content {
  font-size: 16px;
  color: var(--color-fg);
}

.popup__actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
