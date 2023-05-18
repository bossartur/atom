<template>
  <div>

    <div class="text-center mt-7">
      <div class="font-semibold mb-5">Вже переглянули? Отримайте доступ до наступного:</div>
      <button @click="nextVideo" :class="animate ? 'animate-bounce' : 'animate-pulse'" class="py-3 px-5 font-medium bg-orange-500 hover:bg-orange-600 text-white">Наступний епізод</button>
    </div>

  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useMainStore } from '../stores/mainStore';

const mainStore = useMainStore()

function nextVideo() {
  mainStore.currentVideo = mainStore.videolist[mainStore.currentVideoIndex + 1]
}

const animate = ref(false)

onMounted(() => {

  animate.value = true

  setTimeout(() => {
    animate.value = false
  }, 500)

})

</script>