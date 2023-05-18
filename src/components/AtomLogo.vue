<template>
  <div class="flex justify-center">
    <img src="../assets/atom.svg" alt="Atom University Logo" :width="width">
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    required: true,
  },
});
</script>