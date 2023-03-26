import axios from 'axios'
import PodcastPayload from '../payloads/PodcastPayload'
import EpisodePayload from '../payloads/EpisodePayload'
import Repository from '../Repository'
export default class PodcastService {

    baseUrl

    constructor() {
        this.baseUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    }

    async getAll() {
        const response = axios.get(this.baseUrl)

        const getData = (await response).data.feed.entry

        const listElements = []
        for (const podcast of getData) {

            const listEpisodes = await this.getAllEpisodes(podcast['id'].attributes['im:id'])

            const podcastPayload = new PodcastPayload(parseInt(podcast['id'].attributes['im:id']),podcast['im:name'].label, podcast['im:artist'].label, podcast['summary'].label, listEpisodes, podcast['im:image'][0].label)

            listElements.push(podcastPayload)
        }

        return listElements
    }
    async getAllEpisodes(idPodcast){

        const repository = new Repository('podcast-list')
        

        const service = repository.chooseApi()
        
        const data = await service.getAllEpisodes(idPodcast)

        const listEpisodes = []
        
        
        for (const episode of data){
            
                const episodePayload = new EpisodePayload(episode.trackName,episode.description,episode.releaseDate,episode.trackTimeMillis,episode.episodeUrl, episode.trackId)
               
                listEpisodes.push(episodePayload)
            
        }
       
        return listEpisodes

    }

}