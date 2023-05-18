<template>
<div>

  <div>
    <div class="text-orange-500 text-2xl mb-5">У цьому відео ви дізнаєтесь:</div>
    <div v-html="mainStore.currentVideo.description"></div>
  </div>

</div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/mainStore';

const mainStore = useMainStore()

</script>