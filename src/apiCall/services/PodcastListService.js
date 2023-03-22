import axios from "axios"

export default class PodcastListService{
    baseUrl

    constructor(){
        this.baseUrl = 'https://itunes.apple.com'
    }
    async getAllEpisodes(idPodcast){
        const response = axios.get(this.baseUrl + `/lookup?id=${idPodcast}&country=US&media=podcast&entity=podcastEpisode&limit=48`)

        const getData = (await response).data.results

        return getData
    }
}