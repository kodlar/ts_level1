import { Enviroment } from './enums'

class Utility{

        public static MongoDBConnection(enviroment:Enviroment):string{
               let retval:string
               switch(enviroment){
                   case Enviroment.Development:
                   retval = "mongodb://localhost:27017/development";
                   break;
                   case Enviroment.Production:
                   retval = "mongodb://localhost:27017/production";
                   break;
               }
               return retval;
    }
}
    

  export { Utility }  


