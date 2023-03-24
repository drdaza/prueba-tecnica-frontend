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
    gap: 5vh;
    .card-space{
    width: 23%;
    height: auto;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  }
}
</style>