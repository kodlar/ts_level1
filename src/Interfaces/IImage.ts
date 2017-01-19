import { ImageStatus, ImageType } from '../helper/enums';

export interface IImage {
    Id: string
    ImageUrl: string
    Status: ImageStatus
    Type: ImageType
    Spot: string
    AddDate: any
}

export class IImageEntity implements IImage{
    Id: string
    ImageUrl: string
    Status: ImageStatus
    Type: ImageType
    Spot: string
    AddDate: any
}