import PodcastService from "./services/PodcastService"
import PodcastListService from "./services/PodcastListService"
export default class Repositor{
    api

    constructor(api){
        this.api = api
    }

    chooseApi(){
        if('podcast') return new PodcastService()
        if('podcast-list') return new PodcastListService()
    }
}