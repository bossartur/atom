<template>
  <div class="text-center mb-10 text-2xl flex gap-2 justify-center">
    <span class="text-orange-500">Епізод {{ mainStore.currentVideoIndex + 1 }}.</span>
    <span>{{ mainStore.currentVideo.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/mainStore';

const mainStore = useMainStore()

</script>