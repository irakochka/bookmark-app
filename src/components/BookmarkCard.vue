<script setup lang="ts">
  import type { Bookmark } from '@/interfaces/bookmark.interface.ts'
  import IconTrash from '@/components/IconTrash.vue'
  import IconLink from '@/components/IconLink.vue'
  import ButtonIconBig from '@/components/ButtonIconBig.vue'
  import { useBookmarkStore } from '@/stors/bookmark.store.ts'

  const { id, category_id, title, image, url } = defineProps<Bookmark>();
  const bookmarkStore = useBookmarkStore();

  function openLink() {
    window.open(url, '_blank');
  }

  function deleteBookmark() {
    bookmarkStore.deleteBookmark(id, category_id);
  }
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div>
      {{ title }}
    </div>
    <div class="bookmark-card__footer">
      <ButtonIconBig @click="deleteBookmark">
        <IconTrash/>
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLink/>
      </ButtonIconBig>
    </div>
  </div>
</template>

<style scoped>
.bookmark-card {
  max-width: 400px;
  width: 100%;
  border-radius: 30px;
  background: var(--color-fg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--color-bg);
}
.bookmark-card__image {
  min-height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
.bookmark-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-bg);
}
</style>
