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


episode.value= podcastStore.findOneEpisode(podcastId,episodeId)

</script>
<template>

      <EpisodeComponent :episode="episode"/>

</template>
  
  <style>

  </style>