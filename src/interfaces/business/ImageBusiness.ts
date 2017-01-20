import { IImageEntity } from "../entities/IImageEntity";
import { IImageBusiness } from "./IImageBusiness"
import { ImageStatus, ImageType } from '../../helpers/enums'
import { ImageEntity } from "../entities/ImageEntity"

export class ImageBusiness implements IImageBusiness {

    private dataList: Array<IImageEntity>;
    private dataItem: IImageEntity = new ImageEntity();


 constructor() {
        
        let _date = new Date();
        //create mock data
        this.dataList = [{
            AddDate: _date.toJSON(),
            ImageUrl: "http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/test_tube.png",
            Spot: "test",
            Status: ImageStatus.Active,
            Type: ImageType.Gallery,
            Id: "1"
        }, {
            AddDate: _date.toJSON(),
            ImageUrl: "http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/test_tube.png",
            Spot: "test",
            Status: ImageStatus.Active,
            Type: ImageType.Gallery,
            Id: "2"
        }, {
            AddDate: _date.toJSON(),
            ImageUrl: "http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/test_tube.png",
            Spot: "test",
            Status: ImageStatus.Active,
            Type: ImageType.Gallery,
            Id: "3"
        }];
        
    }

   public  GetImage(id: number): IImageEntity{
     return this.dataItem;
  }

   public GetGalleryImages(galleryId?: number): Array<IImageEntity> {

 
        let _list: Array<IImageEntity> = [];
        //burada db connection kur
        //mock data constructor'dan geliyor...

        for (let number = 0; number < this.dataList.length; number++) {

            let currentRecord = this.dataList[number];

            this.dataItem.Id = currentRecord.Id;
            this.dataItem.ImageUrl = currentRecord.ImageUrl;
            this.dataItem.AddDate = currentRecord.AddDate;
            this.dataItem.Spot = currentRecord.Spot;
            this.dataItem.Status = currentRecord.Status;
            this.dataItem.Type = currentRecord.Type;

            _list.push(this.dataItem);

            this.dataItem = new ImageEntity();
        }

        console.info("listemiz: ", _list);
        return _list;
    }

}

