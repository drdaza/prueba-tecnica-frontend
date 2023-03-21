<script setup>
import { usePodcastStore } from '../stores/podcastStore';
import { onBeforeMount, ref } from 'vue';


const podcastStore = usePodcastStore()


onBeforeMount(async () => {
await podcastStore.getAll()
   
})
console.log(podcastStore.allPodcast);
</script>

<template>
  <main>

  </main>
</template>
<style lang="scss">

</style>