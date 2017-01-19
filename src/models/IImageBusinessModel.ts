import { Document } from "mongoose";
import { IImage } from "../interfaces/IImage";

export interface IImageBusinessModel extends IImage, Document {
     
  //custom methods for your model would be defined here
}