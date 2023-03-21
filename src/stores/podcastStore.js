import Repository from '../apiCall/Repository'
import { defineStore } from 'pinia'

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

                const data = await service.getAll()

                for (const podcast of data.feed.entry) {

                    this.allPodcast.push(podcast)
                }
            }
        }
    
    }
)