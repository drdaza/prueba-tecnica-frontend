<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { usePodcastStore } from '../stores/podcastStore';
import cardComponent from '../components/cardComponent.vue';

const route = useRoute()
const podcastStore = usePodcastStore()
const podcast = ref({})

podcast.value = podcastStore.findOnePodcast(parseInt(route.params.id))
</script>
<template>
        <main>
                <div class="podcast-card-wrapper">
                        <cardComponent :podcast="podcast" :type-card="'card-info'" />
                </div>
                <router-view></router-view>
        </main>
</template>
<style lang="scss" scoped>
main {
        display: flex;
        flex-direction: row;

        .podcast-card-wrapper {
                width: 25%;
        }
}
</style>