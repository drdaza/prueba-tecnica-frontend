<script setup>
const props = defineProps({
    episode:{
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="episode-details-wrapper">
        <h1>{{ episode.title }}</h1>
        <p>{{ episode.description }}</p>
        <audio :src="episode.audio" controls></audio>
    </div>
</template>
<style lang="scss" scoped>
.episode-details-wrapper{
    width: 50%;
} 
</style>