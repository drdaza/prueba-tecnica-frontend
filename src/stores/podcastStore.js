import Repository from '../apiCall/Repository'
import { defineStore } from 'pinia'
import PodcastPayload from '../apiCall/payloads/PodcastPayload'
import EpisodePayload from '../apiCall/payloads/EpisodePayload'

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
                
                const listElements = []
                for (const podcast of data.feed.entry) {

                    const podcastPayload = new PodcastPayload(podcast['im:name'].label, podcast['im:artist'].label, podcast['summary'].label, null)

                    listElements.push(podcastPayload)
                }

            },
            async getAllEpisodes(idPodcast){
                const repository = new Repository('podcast-list')

                const service = repository.chooseApi()
                const data = await service.getAll(idPodcast)

                const listEpisodes = []

                for (const episode of data.results){
                    
                    if(episode != 0){
                        const episodePayload = new EpisodePayload(episode.trackName,
                            episode.description,
                            episode.releaseDate,
                            episode.trackTimeMillis, 
                            episode.episodeUrl
                        )
                        listEpisodes.push(episodePayload)
                    }
                }

                return listEpisodes

            }
        }
    
    }
)