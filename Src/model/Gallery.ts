import { GalleryStatus, GalleryType } from '../helper/enums'

interface IGallery<T,Z>
{
    Id:number
    Name:string
    GalleryUrl : string
    Status : T
    Type : Z
    Spot : string
    AddDate : any
}

class PhotoGallery implements IGallery<GalleryStatus, GalleryType> {
    
    Id:number
    Name:string
    GalleryUrl : string
    Status : GalleryStatus
    Type : GalleryType
    Spot : string
    AddDate : any

    constructor(photoGallery: IGallery<GalleryStatus,GalleryType>)
    {
        this.Id = photoGallery.Id;
        this.Name = photoGallery.Name;
        this.GalleryUrl = photoGallery.GalleryUrl;
        this.Status = photoGallery.Status;
        this.Type = photoGallery.Type;
        this.Spot = photoGallery.Spot;
        this.AddDate = photoGallery.AddDate;
    }
}

export { IGallery }