<script setup lang="ts">
import { ref } from 'vue';
import ButtonIconBig from '@/components/ButtonIconBig.vue';
import IconNew from '@/components/IconNew.vue';
import InputString from '@/components/InputString.vue';
import ButtonCommon from '@/components/ButtonCommon.vue';
import IconOk from '@/components/IconOk.vue';
import { useBookmarkStore } from '@/stors/bookmark.store.ts'

const isEdited = ref<boolean>();
const newUrl = ref<string>();
const {category_id} = defineProps<{ category_id: never }>();
const bookmarkStore = useBookmarkStore();

function toggle() {
  isEdited.value = !isEdited.value
}
function addBookmark() {
  if (!newUrl.value) return;
  bookmarkStore.addBookmark(category_id, newUrl.value);
  newUrl.value = '';
  toggle();
}
</script>

<template>
  <div class="bookmark-add">
    <ButtonIconBig v-if="!isEdited" @click="toggle">
      <IconNew />
    </ButtonIconBig>
    <div class="bookmark-add__form" v-else>
      <InputString v-model="newUrl" is-focused />
      <ButtonCommon @click="addBookmark">
        <IconOk />
      </ButtonCommon>
    </div>
  </div>
</template>

<style scoped>
.bookmark-add {
  padding: 20px;
  max-width: 400px;
  width: 100%;
  min-height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--color-fg);
  border-radius: 30px;
}
.bookmark-add__form {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
