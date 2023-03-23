<script setup>
const props = defineProps({
    podcast:{
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="card-wrapper">
        <img :src="podcast.image" alt="">
        <h4>{{ podcast.name }}</h4>
        <p>Author:  {{ podcast.author }}</p>
        <!-- <h2 v-for="episode of podcast.episodes">
            {{ episode.title }}
        </h2> -->
    </div>
</template>
<style lang="scss" scoped>

.card-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 30%;
        border-radius: 50px;
    }

}

    
</style>