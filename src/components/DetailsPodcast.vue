<script setup>
import cardComponent from './cardComponent.vue';
import router from '../router';
const props = defineProps({
    podcast: {
        type: Object,
        required: true
    }
})

const shotdetailsEpisode = (idPodcast, idEpisode)=>{
    router.push({name: 'episode', params:{idPodcast:idPodcast, idEpisode:idEpisode}})
}
</script>
<template>
    <div class="podcast-info">
        <div class="episodes-podcast-wrapper">
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Title
                        </th>
                        <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                            Duration
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="episode of podcast.episodes" @click="shotdetailsEpisode(podcast.id, episode.id)">
                        <td>{{ episode.title }}</td>
                        <td>{{ new Date(episode.releaseDate).toLocaleDateString() }}</td>
                        <td>{{ episode.duration }}</td>
                    </tr>
                </tbody>
            </v-table>
            <div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.podcast-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .episodes-podcast-wrapper {
        width: 70%;
    }
}
</style>