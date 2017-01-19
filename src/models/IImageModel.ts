import { Model } from "mongoose";
import { IImageBusinessModel } from "./IImageBusinessModel";

export interface IImageModel {

  Image: Model<IImageBusinessModel>;
  
}