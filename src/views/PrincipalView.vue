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
    <section class="cards-section">
      <div class="card-space" v-for="podcast of podcastStore.allPodcast">
        <cardComponent :podcast="podcast" />
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  .cards-section{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1vh;
    .card-space{
    width: 23%;
    height: 20vh;
    border: 1px solid;
  }
  }
}
</style>