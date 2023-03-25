<script setup>
import {useRouter} from 'vue-router'


const router = useRouter()
const props = defineProps({
    podcast:{
        type: Object,
        required: true
    },
    typeCard:{
        type: String,
        default: 'card-wrapper'
    }
})

const shotDetails = ()=>{
    router.push({name: 'podcast', params:{ id:props.podcast.id}})
}
</script>
<template>
    <div :class="typeCard" @click="shotDetails()">
        <img :src="podcast.image" alt="">
        <h4>{{ podcast.name }}</h4>
        <p>Author:  {{ podcast.author }}</p>
        <p v-if="typeCard=='card-info'">
            {{ podcast.description }}
        </p>
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
        position: relative;
        top: -20px;
        width: 30%;
        border-radius: 50px;
        z-index: 10;
        border: 1px solid;
    }
}
.card-info{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
}

    
</style>