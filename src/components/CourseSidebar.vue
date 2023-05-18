<template>
  <div class="p-5">

    <div v-for="(video, index) in mainStore.videolist" :key="video.id">
      <SidebarItem 
        :id="video.id" 
        :title="video.title" 
        :subtitle="video.subtitle" 
        :video_url="video.video_url"
        :open="video.open" 
        :description="video.description" 
        :index="index"
      />
    </div>

    <NextVideo v-if="mainStore.showButtonForNextVideo" />

  </div>
</template>

<script setup lang="ts">
// components
import SidebarItem from "../components/SidebarItem.vue"
import NextVideo from "../components/NextVideo.vue"

// stores
import { useMainStore } from '../stores/mainStore';

const mainStore = useMainStore()

</script>
