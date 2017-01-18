import {ImageStatus, ImageType} from '../helper/enums' 
import { Image } from '../model/Image'

class ImageController{

    _imageModel : Image;
    
   public GetImages():Array<Image>{
         let _list:Array<Image>
         //burada db connection kur
         //mock data
         const numbers = [{
                                "id": 4,
                                "imageUrl": "",
                                "status": 1,
                                "ImageType": 1,
                                "spot": "",
                                "addDate": ""
                            }, {
                                "id": 9,
                                "imageUrl": "",
                                "status": 1,
                                "ImageType": 1,
                                "spot": "",
                                "addDate": ""
                            }, {
                                "id": 16,
                                "imageUrl": "",
                                "status": 1,
                                "ImageType": 1,
                                "spot": "",
                                "addDate": ""
                            }, {
                                "id": 25,
                                "imageUrl": "",
                                "status": 1,
                                "ImageType": 1,
                                "spot": "",
                                "addDate": ""
                            }]
         

        for (let number = 0; numbers.length > 0; number++){
            let currentRecord  = numbers[number];
            this._imageModel = new Image(currentRecord.id, 
                                         currentRecord.imageUrl, 
                                         ImageStatus[<any>currentRecord.status], 
                                         ImageType[<any>currentRecord.ImageType],
                                         currentRecord.spot,
                                         currentRecord.addDate);
            _list.push(this._imageModel);
        }
         

         return _list;
    }

  


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
      

}

export {ImageController}