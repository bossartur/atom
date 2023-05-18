<template>
  <div>

    <div @click="mainStore.openVideo(id)" class="w-full grid grid-cols-7 mb-1 cursor-pointer">

      <!-- icon -->
      <div class="bg-zinc-800 text-white p-3 col-span-2">
        <div class="flex justify-center items-center gap-2">
            <div class="text-lg col">
            {{ itemNumber }}
          </div> 
          <div class="text-3xl col">
            <q-icon v-if="open" name="bi-play-btn" />
            <q-icon v-else :class="animateStatus ? 'animate-bounce' : ''" name="bi-lock" />
          </div>
        </div>
      </div>

      <!-- text -->
      <div v-if="open" class=" col-span-5 bg-orange-500 hover:bg-orange-600 text-white p-3 flex items-center">
        {{ title }}
      </div>
      <div v-else @click="animateIcon" class=" col-span-5 bg-zinc-400 text-white p-3 flex items-center">
        {{ title }}
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/mainStore';
import { ref } from 'vue';

const mainStore = useMainStore()

const props = defineProps({
  id: Number,
  title: String,
  subtitle: String,
  video_url: String,
  video_time: Number,
  description: String,
  open: Boolean,
  index: Number,
});

const animateStatus = ref(false)
const itemNumber: number = (props.index ?? 0) + 1;

function animateIcon() {
  animateStatus.value = true;
  setTimeout(() => {
    animateStatus.value = false;
  }, 500)
}

</script>