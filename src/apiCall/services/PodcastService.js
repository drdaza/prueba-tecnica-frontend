import axios from 'axios'
export default class PodcastService{

    baseUrl

    constructor(){
        this.baseUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    }

    async getAll(){
        const response = axios.get(this.baseUrl)

        const getData = (await response).data


        return getData
    }

}