<script setup>
import { usePodcastStore } from '../stores/podcastStore';
import { onBeforeMount, ref, reactive } from 'vue';


const podcastStore = usePodcastStore()


onBeforeMount(() => {
podcastStore.getAll()
   
})
console.log(podcastStore.allPodcast);
</script>

<template>
  <main>

  </main>
</template>
<style lang="scss">

</style>