import { ImageStatus, ImageType } from '../../helpers/enums';
import { IImageEntity } from "./IImageEntity"

export class ImageEntity implements IImageEntity{
    Id: string
    ImageUrl: string
    Status: ImageStatus
    Type: ImageType
    Spot: string
    AddDate: any
}