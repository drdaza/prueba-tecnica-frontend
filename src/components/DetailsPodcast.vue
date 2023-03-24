<script setup>
import cardComponent from './cardComponent.vue';
const props = defineProps({
    podcast: {
        type: Object,
        required: true
    }
})


</script>
<template>
    <div class="podcast-info">
        <div class="podcast-card-wrapper">
            <cardComponent :podcast="podcast" :type-card="'card-info'" />
        </div>
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
                    <tr v-for="episode of podcast.episodes">
                        <td>{{ episode.title }}</td>
                        <td>{{ new Date(episode.releaseDate).toLocaleDateString() }}</td>
                        <td>{{ episode.duration }}</td>
                    </tr>
                </tbody>
            </v-table>
            <!--  -->
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

    .podcast-card-wrapper {
        width: 25%;
    }

    .episodes-podcast-wrapper {
        width: 70%;
    }
}
</style>