import Repository from '../apiCall/Repository'
import { defineStore } from 'pinia'
import PodcastPayload from '../apiCall/payloads/PodcastPayload'
import EpisodePayload from '../apiCall/payloads/EpisodePayload'
import { ref } from 'vue'

export const usePodcastStore = defineStore( 
    {
        id: 'podcast',
        state: ()=>({
            allPodcast: []
        }),
        actions:{
            async getAll(){
                const repository = new Repository('podcast')

                const service = repository.chooseApi()

                this.allPodcast = await service.getAll()
                
            }
        }
    
    }
)