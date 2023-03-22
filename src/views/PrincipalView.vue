<script setup>
import { usePodcastStore } from '../stores/podcastStore';
import { onBeforeMount, ref} from 'vue';
import cardComponent from '../components/cardComponent.vue';

const podcastStore = usePodcastStore()


onBeforeMount(() => {
   podcastStore.getAll()

})



</script>

<template>
  <main>
    <div v-for="podcast of podcastStore.allPodcast">
      <cardComponent :podcast="podcast"/>
    </div>
  </main>
</template>
<style lang="scss">

</style>