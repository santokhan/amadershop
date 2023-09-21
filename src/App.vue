<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { initFlowbite } from 'flowbite'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import { SanityDocumentStub } from '@sanity/client'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

const route = useRoute()
watch(() => route.params, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>

