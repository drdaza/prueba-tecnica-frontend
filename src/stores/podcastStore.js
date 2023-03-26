import Repository from '../apiCall/Repository'
import { defineStore } from 'pinia'
import PodcastPayload from '../apiCall/payloads/PodcastPayload'
import EpisodePayload from '../apiCall/payloads/EpisodePayload'
import { ref } from 'vue'

export const usePodcastStore = defineStore( 
    {
        id: 'podcast',
        state: ()=>({
            allPodcast: [],
            searchPodcast: []
        }),
        actions:{
            async getAll(){
                this.searchPodcast = this.allPodcast
                if(window.localStorage.getItem('podcast')==undefined){
                setTimeout(() => {
                    window.localStorage.clear()
                    console.log('actualize storage');
                    this.modifyState()
                }, 1000);
                }
                setInterval(()=>{
                    window.localStorage.clear()
                    console.log('actualize storage');
                    this.modifyState()
                },36000*24)
            },
            async modifyState(){
                if (window.localStorage.getItem('podcast') == undefined) {

                    const repository = new Repository('podcast')

                    const service = repository.chooseApi()

                    this.allPodcast = await service.getAll()

                    

                    return
                }
            },
            findOnePodcast(idPodcast){
                const podcastFinded = this.allPodcast.find(podcast => podcast.id===idPodcast)

                return podcastFinded
            },
            findOneEpisode(idPodcast, idEpisode){
                const podcastToFind = this.findOnePodcast(idPodcast)
                const episodeFinded = podcastToFind.episodes.find(episode => episode.id === idEpisode)

                return episodeFinded
            },
            filterPodcast(finder){
                /* this.searchPodcast = finder */
                console.log(finder);
                let filter = ref([])

                if(finder == ''){
                    
                    this.searchPodcast=this.allPodcast;
                    return
                }

                if(finder != ''){

                    for (const podcast of this.allPodcast) {
                        if(podcast.name.includes(finder)||podcast.author.includes(finder)){filter.value.push(podcast)
                    
                    }}
                }
                this.searchPodcast = filter.value


            }
        }
    
    }
)