<template>
  <div class="mb-10 flex justify-center">
    <div :id="playerId" class="max-w-full aspect-video"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref, watch, watchEffect } from 'vue';
import { useMainStore } from '../stores/mainStore';

const mainStore = useMainStore()

const isPlaying = ref(false)
const videoDuration = ref(0);
const userTimer = ref(0)
const interval: Ref<NodeJS.Timeout | null> = ref(null);

const playerId = Date.now().toString();

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});

onMounted(initializePlayer);

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

function initializePlayer() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

  let player: any;

  window.onYouTubeIframeAPIReady = function () {
    player = new window.YT.Player(playerId, {
      videoId: props.videoId,
      // width: 800,
      // height: 450,
      events: {
        onStateChange: handlePlayerStateChange,
        onReady: handlePlayerReady,
      },
    });

    function handlePlayerStateChange(event: any) {
      isPlaying.value = event.data === window.YT.PlayerState.PLAYING;
      videoDuration.value = player.getDuration();

      if(isPlaying.value) {
        interval.value = setInterval(() => {
          userTimer.value++
        }, 1000)
      }else{
        const intervalId = interval.value;
        if (intervalId !== null) {
          clearInterval(intervalId);
        }
      }
    }

    function handlePlayerReady() {
      videoDuration.value = player.getDuration();
    }
  };

  // if change videoId
  watch(
    () => props.videoId,
    (newVideoId: string) => {
      if (player) {
        userTimer.value = 0
        player.loadVideoById(newVideoId);
        mainStore.showButtonForNextVideo = false
      }
    }
  );
}

watchEffect(() => watchHandler(userTimer.value) )

function watchHandler(uTimer: number) {

  // considered viewed if the duration of the video is equal to the number of seconds watched
  // with a deviation of 5 seconds
  const completedSeconds = videoDuration.value - 5

  if(completedSeconds > 0 && uTimer >= completedSeconds) {
    mainStore.showButtonForNextVideo = true
    mainStore.videolist[mainStore.currentVideoIndex + 1].open = true
  }
}

</script>