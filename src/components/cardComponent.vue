<script setup>
const props = defineProps({
    podcast:{
        type: Object,
        required: true
    }
})
</script>
<template>
    <div>
        <h1>{{ podcast.name }}</h1>
        <h2 v-for="episode of podcast.episodes">
            {{ episode.title }}
        </h2>
    </div>
</template>