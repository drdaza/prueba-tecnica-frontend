export default class PodcastPayload{

    name
    author
    description
    episodes
    image

    constructor(name,author,description,episodes,image){
        this.name = name
        this.author = author
        this.description = description
        this.episodes = episodes
        this.image = image
    }
}