import { Schema } from "mongoose";
import { ImageStatus, ImageType } from '../helper/enums'

export let ImageSchema : Schema = new Schema({    
    imageUrl : String,
    status : ImageStatus,
    type : ImageType,
    spot : String,
    addDate : Date
});

ImageSchema.pre("save", next => {
    let now = new Date;
    if(!this.addDate){
        this.addDate = now;
    }
    next();    
});
/*
 ImageSchema.methods.fullName = function():string{
   return (this.ImageUrl.trim() + " " + this.ImageUrl.trim());
 }
 */