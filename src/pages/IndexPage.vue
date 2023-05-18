<template>
  <q-page class="flex justify-center">

    <div>
      <AtomLogo :width="100" class="mb-10" />
      <LessonName />
      <EpisodeName />
      <YouTubePlayer :video-id="mainStore.currentVideo.video_url" />
      <LessonDesc />
    </div>

  </q-page>
</template>

<script setup lang="ts">

// components
import YouTubePlayer from 'components/YouTubePlayer.vue';
import LessonDesc from 'components/LessonDesc.vue';
import AtomLogo from 'components/AtomLogo.vue';
import LessonName from 'components/LessonName.vue';
import EpisodeName from 'components/EpisodeName.vue';

// vue
import { onMounted } from 'vue';

// stores
import { useMainStore } from '../stores/mainStore';

const mainStore = useMainStore()

onMounted(() => {
  mainStore.currentVideo = mainStore.videolist[0]
})

</script>
