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
                <div class="details-section">
                        <router-view></router-view>
                </div>
        </main>
</template>
<style lang="scss" scoped>
main {
        width: 100%;
        /* height: 90vh; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .details-section {
                width: 70%;
                box-shadow: 0 1px 1px 1px #00000033;
        }

        .podcast-card-wrapper {
                width: 25%;
                height: 50vh;
                box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
                overflow-y: hidden;
        }
}
</style>