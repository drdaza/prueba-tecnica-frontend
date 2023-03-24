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

                if(window.localStorage.getItem('podcast')==undefined){
                setTimeout(() => {
                    window.localStorage.clear()
                    console.log('clear storage');
                    this.modifyState()
                }, 1000);
                }
                setInterval(()=>{
                    window.localStorage.clear()
                    console.log('clear storage');
                    this.modifyState()
                },36000*24)

                

            },
            async modifyState(){
                if (window.localStorage.getItem('podcast') == undefined) {
                    console.log('?????');
                    const repository = new Repository('podcast')

                    const service = repository.chooseApi()

                    this.allPodcast = await service.getAll()

                    return
                }
            },
            findOnePodcast(idPodcast){
                const podcastFinded = this.allPodcast.find(podcast => podcast.id===idPodcast)

                return podcastFinded
            }
        }
    
    }
)