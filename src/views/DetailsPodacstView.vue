<script setup>
import DetailsPodcast from '../components/DetailsPodcast.vue';
import { usePodcastStore } from '../stores/podcastStore';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const podcastStore = usePodcastStore();
const route = useRoute();
const podcast = ref({})

onBeforeMount(() => {
    podcast.value = podcastStore.findOnePodcast(parseInt(route.params.id))
})


</script>
<template>

            <DetailsPodcast
             :podcast="podcast" />

</template>
<style lang="scss" scoped>

</style>