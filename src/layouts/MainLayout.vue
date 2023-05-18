<template>

<q-layout view="hHh lpR fFf">

  <!-- header -->
  <q-header class="bg-white text-zinc-800 border-b mb-10">
    <q-toolbar>
      <q-toolbar-title class="font-semibold">
        Atom University
      </q-toolbar-title>
      <div class="flex gap-3">
        <el-avatar :icon="UserFilled" :size="35" />
        <q-btn flat @click="toggleRightDrawer" color="black" round dense icon="menu" />
      </div>
    </q-toolbar>
  </q-header>

  <!-- right panel -->
  <q-drawer show-if-above v-model="rightDrawerOpen" side="right" :width="350">
    <CourseSidebar />
  </q-drawer>

  <!-- container -->
  <q-page-container class="p-10 mt-10">
    <q-page class="mx-auto" style="max-width: 900px;">

      <router-view />

    </q-page>
  </q-page-container>

</q-layout>

</template>

<script setup lang="ts">
import CourseSidebar from 'components/CourseSidebar.vue';
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const rightDrawerOpen = ref(false)

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
