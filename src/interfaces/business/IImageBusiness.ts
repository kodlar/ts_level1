import { IImageEntity } from "../entities/IImageEntity";
export interface IImageBusiness{

 GetImage(id: number): IImageEntity; 

 GetGalleryImages(galleryId?: number): Array<IImageEntity>;

}