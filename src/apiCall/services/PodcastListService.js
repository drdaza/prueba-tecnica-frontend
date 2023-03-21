import axios from "axios"

export default class PodcastListService{
    baseUrl

    constructor(){
        this.baseUrl = 'https://itunes.apple.com'
    }
    async getAll(idPodcast){
        const response = axios.get(this.baseUrl + `/lookup?id=${idPodcast}&country=US&media=podcast&entity=podcastEpisode&limit=100`)

        const getData = (await response).data

        console.log(getData);

        return getData
    }
}