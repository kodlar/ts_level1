
import { IImageEntity } from "../interfaces/entities/IImageEntity";
import { ImageEntity } from "../interfaces/entities/ImageEntity";
import { Utility } from '../helpers/config';
import { Enviroment } from '../helpers/enums';
import { IImageBusiness } from "../interfaces/business/IImageBusiness";
import { ImageBusiness } from "../interfaces/business/ImageBusiness";
import { ImageSchema } from "../schemas/ImageSchema";
import mongoose = require("mongoose");
//test amaçlı
import { ImageStatus, ImageType } from '../helpers/enums'

class ImageController {

    //store test data
    private _imageEntityList: Array<IImageEntity>;
    private _imageEntity: IImageEntity = new ImageEntity();
    private _connectionString : string;
    //the Image model    
    //public static ImageModel: mongoose.Model<IImageBusinessModel>;

    private _imageBusiness : IImageBusiness = new ImageBusiness();

    constructor(connectionString : string){         
          this._connectionString = connectionString;
          let _date = new Date();
          this._imageEntityList = [{
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

    public SaveImage(){
        
        //console.log(connection);
        /*let db = mongoose.connection;  
        db.on('error', console.error.bind(console, 'Veritabanı Bağlantı Hatası:'));
        db.once('open', function() {
         console.info("Veritabanı bağlantısı sağlandı");
         let imageModel = mongoose.model('image',ImageSchema);
         var fluffy = new imageModel(this._imageEntityList);
         fluffy.save(function (err, fluffy) {
           if (err) return console.error(err);
          });
         console.info("Veritabanı bağlantı işlemi tamamlandı");
        });
        */
        
    }

              
 
}

export { ImageController }