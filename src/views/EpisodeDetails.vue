<script setup>
import { useRoute } from 'vue-router';
import { usePodcastStore } from '../stores/podcastStore';
import EpisodeComponent from '../components/EpisodeComponent.vue'
import { ref } from 'vue';

const route = useRoute()
const episode = ref({})
const episodeId = parseInt(route.params.idEpisode)
const podcastId = parseInt(route.params.idPodcast)
const podcastStore = usePodcastStore()


episode.value = podcastStore.findOneEpisode(podcastId, episodeId)

</script>
<template>
      <div class="episode-card-wrapper">
            <EpisodeComponent :episode="episode" />
      </div>
</template>
  
<style lang="scss" scoped>

</style>