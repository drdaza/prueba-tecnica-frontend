import PodcastService from "./services/PodcastService"
export default class Repositor{
    api

    constructor(api){
        this.api = api
    }

    chooseApi(){
        if ('podcast') return new PodcastService()
    }
}