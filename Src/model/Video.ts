import { VideoStatus, VideoType } from '../helper/enums'

interface IVideo
{
    Id:number
    VideoUrl : string
    Status : VideoStatus
    Type : VideoType
    Spot : string
    AddDate : any
}

class Video implements IVideo
{
    Id:number
    VideoUrl : string
    Status : VideoStatus
    Type : VideoType
    Spot : string
    AddDate : any

    constructor(video : IVideo){
        this.Id = video.Id;
        this.VideoUrl = video.VideoUrl;
        this.Status = video.Status;
        this.Type = video.Type;
        this.Spot = video.Spot;
        this.AddDate = video.AddDate;
    }
}

export {IVideo}