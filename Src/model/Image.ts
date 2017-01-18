import { ImageStatus, ImageType } from '../helper/enums'

interface IImage
{
    Id:number
    ImageUrl : string
    Status : ImageStatus
    Type : ImageType
    Spot : string
    AddDate : any
}

class Image implements IImage {
    Id:number
    ImageUrl : string
    Status : ImageStatus
    Type : ImageType
    Spot : string
    AddDate : any
    
    constructor(id:number, imageUrl: string, status:ImageStatus, itype : ImageType, spot:string,addDate :any){
        this.Id = id;
        this.ImageUrl = imageUrl;
        this.Status = status;
        this.Type = itype;
        this.Spot = spot;
        this.AddDate = addDate;
    }
}

export { Image }