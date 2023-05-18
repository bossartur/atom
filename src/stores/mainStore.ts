import { defineStore } from 'pinia';
import { computed, ref, Ref } from 'vue';
import { VideoItem } from 'components/models';
import { videoData } from '../data/videoData';

export const useMainStore = defineStore('mainStore', () => {

  const videolist: Ref<VideoItem[]> = ref(videoData);

  const currentVideo = ref(videolist.value[0]);

  const showButtonForNextVideo = ref(false);

  const currentVideoIndex = computed(() => {
    return videolist.value.indexOf(currentVideo.value)
  })

  // open lesson by id
  function openVideo (id?: number) {
    const video = videolist.value.find(v => v.id === id);

    if(video && video.open) {
      currentVideo.value = video
    }
  }

  return {
    videolist,
    currentVideo,
    currentVideoIndex,
    openVideo,
    showButtonForNextVideo
  }

});
