import { ArticleStatus, GalleryStatus, GalleryType }  from '../helper/enums'
import {IImage} from './Image'
import {IVideo} from './Video'
import {IGallery} from './Gallery'

interface IArticle {
    Id : number
    PublishStatus : ArticleStatus
    CreateDate : any
    Text : string 
    Title : string
    Spot : string
    Images? : Array<IImage>
    Videos? : Array<IVideo>
    PhotoGallery? : Array<IGallery<GalleryStatus,GalleryType>>
}

class Article implements IArticle {
    Id : number
    PublishStatus : ArticleStatus
    CreateDate : any
    Text : string 
    Title : string
    Spot : string
    Images? : Array<IImage>
    Videos? : Array<IVideo>
    PhotoGallery? : Array<IGallery<GalleryStatus,GalleryType>>

    constructor(article:IArticle)   {
        this.Id = article.Id;
        this.PublishStatus = article.PublishStatus;
        this.CreateDate = article.CreateDate;
        this.Text = article.Text;
        this.Title = article.Title;
        this.Spot = article.Spot;
        this.Images = article.Images;
        this.Videos = article.Videos;
        this.PhotoGallery = article.PhotoGallery;
    }
    
}

export {IArticle}