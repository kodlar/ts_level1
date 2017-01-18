/*
import { Utility } from './helper/config'
import {Enviroment} from './helper/enums'
console.log(Utility.MongoDBConnection(Enviroment.Development));
*/
"use strict";
var greet_1 = require("./greet");
function hello(compiler) {
    console.log("Selam " + compiler);
}
hello('typescript');
console.log(greet_1.sayHello("Typescript"));
