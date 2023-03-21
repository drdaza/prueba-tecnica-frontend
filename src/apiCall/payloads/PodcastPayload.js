export default class PodcastPayload{
    name
    author
    description
    episodes

    constructor(name,author,description,episodes){
        this.name = name
        this.author = author
        this.description = description
        this.episodes = episodes
    }
}