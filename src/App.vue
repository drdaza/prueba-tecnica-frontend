<script setup>
import { usePodcastStore } from './stores/podcastStore';
import HeaderComponent from './components/HeaderComponent.vue';

const podcastStore = usePodcastStore()


const test = (element)=>{
  console.log(element);
  podcastStore.filterPodcast(element)
}

</script>

<template>
  <HeaderComponent
   @search-emit="test"/>
  <RouterView />
</template>

<style scoped>
</style>
