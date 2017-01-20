import { ImageStatus, ImageType } from '../../helpers/enums';

interface IImageEntity {
    Id: string
    ImageUrl: string
    Status: ImageStatus
    Type: ImageType
    Spot: string
    AddDate: any
}

export {IImageEntity}