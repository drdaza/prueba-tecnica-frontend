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

        <div class="info-episode">
        <h1>{{ episode.title }}</h1>
        <p>{{ episode.description }}</p>

        </div>
        
        <audio :src="episode.audio" controls></audio>
    
    </div>
</template>
<style lang="scss" scoped>
.episode-details-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   
    .info-episode{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
    }
    
    audio{
        width: 90%;
    }
} 
</style>