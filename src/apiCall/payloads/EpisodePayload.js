export default class EpisodePayload{
    title
    description
    releaseDate
    duration
    audio
    id
    constructor(title,description,releaseDate,duration,audio,id){
        this.title = title
        this.description = description
        this.releaseDate = releaseDate
        this.duration = duration
        this.audio = audio
        this.id = id
    }
}