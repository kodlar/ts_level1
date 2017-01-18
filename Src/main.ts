import { Utility } from './helper/config'
import {Enviroment} from './helper/enums'
import {sayHello} from "./greet";
import {ImageController} from './controller/ImageController'



class MainPage{

public hello(compiler:string){
    console.log(`Selam ${compiler}`);
 }

public showHello(divName: string){
    const elt = document.getElementById(divName);    
    elt.innerText = sayHello(name) + Utility.MongoDBConnection(Enviroment.Development);    
 }

public getDataFromMongo(divName:string){
    const elt = document.getElementById(divName)
    let logic = new ImageController();
    let data = logic.GetImages();
    if(data.length > 0)
    {
        for(let i = 0; data.length > 0; i++){
            let currentData = data[i];
                elt.innerHTML += currentData.Id;
        }
    }
    
}


}

let page = new MainPage();
page.showHello("greeting");
page.getDataFromMongo("data");




