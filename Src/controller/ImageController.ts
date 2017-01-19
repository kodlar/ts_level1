import { ImageStatus, ImageType } from '../helper/enums'
import { IImage, IImageEntity } from "../interfaces/IImage";
import { IImageBusinessModel } from "../models/IImageBusinessModel";
import { ImageSchema } from "../schemas/ImageSchema";
import mongoose = require("mongoose");


class ImageController {

    //store test data
    private dataList: Array<IImage>;
    private dataItem: IImage = new IImageEntity();
    //the Image model
    public static Image: mongoose.Model<IImageBusinessModel>;

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



    public GetGalleryImages(galleryId?: number): Array<IImage> {

        let _list: Array<IImage> = [];
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
            
            this.dataItem = new IImageEntity();
        }

        console.info("listemiz: ", _list);
        return _list;
    }


    /*
        public GetImage(id:number):Image{
    
            //burada db connection kur
            let _id = 1;
            let _imageUrl = "";
            let _spot = "spot girilebilir";
            var d = new Date();
            let _addDate = d.toJSON();
            let model = new Image(_id,_imageUrl,ImageStatus.Active,ImageType.Gallery, _spot,_addDate);
            
            //veriyi döndür ve imagemodel'e set et
            this._imageModel = model;
            return this._imageModel;
        }
          
    */
}

export { ImageController }