import { Utility } from './helpers/config'
import {Enviroment} from './helpers/enums'
import {sayHello} from "./greet";
import {ImageController} from './controller/ImageController'
import { IImageBusiness} from './interfaces/business/IImageBusiness'
import { ImageBusiness} from './interfaces/business/ImageBusiness'


class MainPage{

public hello(compiler:string){
    console.log(`Selam ${compiler}`);
 }

public showHello(divName: string){
    
    const elt = document.getElementById(divName);   

    elt.innerText = sayHello(name) + Utility.MongoDBConnection(Enviroment.Development);  
   
 }

public getDataFromMongo(divName:string){
    
    let _head : string;
    let _footer : string;
    let _dynamicHtml : string;
    
    const elt = document.getElementById(divName)
    
    let _businessLogic :IImageBusiness = new ImageBusiness();    
    let data = _businessLogic.GetGalleryImages(123434);
     
    

   _head = "<ul class=\"list-group\">";
    
    if(data.length > 0)
    {

        for(let i = 0; i < data.length; i++){

            let currentData = data[i]; 
            console.log(currentData);
            if(currentData.Id != undefined)
            {
                _dynamicHtml += "<li class=\"list-group-item\"><span><img style=\"width:16px;height:16px;\" src=\"" + currentData.ImageUrl + "\" /></span>"+currentData.Id.toString()+"</li>";
            }
            
        }
    }
    
    _footer = "</ul>";
    
    elt.innerHTML = _head + _dynamicHtml.replace("undefined","") + _footer;
}




}
//mongoose.connect(Utility.MongoDBConnection(Enviroment.Development));



let page = new MainPage();

page.showHello("greeting");

page.getDataFromMongo("data");









