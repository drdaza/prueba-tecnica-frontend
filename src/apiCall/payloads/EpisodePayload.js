export default class EpisodePayload{
    title
    description
    releaseDate
    duration
    audio
    constructor(title,description,releaseDate,duration,audio){
        this.title = title
        this.description = description
        this.releaseDate = releaseDate
        this.duration = duration
        this.audio = audio
    }
}