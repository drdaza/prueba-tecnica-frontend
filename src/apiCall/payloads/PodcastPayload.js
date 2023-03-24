export default class PodcastPayload{

    id
    name
    author
    description
    episodes
    image

    constructor(id,name,author,description,episodes,image){
        this.id = id
        this.name = name
        this.author = author
        this.description = description
        this.episodes = episodes
        this.image = image
    }
}