import PodcastService from "./services/PodcastService"
import PodcastListService from "./services/PodcastListService"
export default class Repositor{
    api

    constructor(api){
        this.api = api
    }

    chooseApi(){
        if(this.api==='podcast') return new PodcastService()
        if(this.api==='podcast-list') return new PodcastListService()
    }
}