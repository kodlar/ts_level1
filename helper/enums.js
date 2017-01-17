"use strict";
var Enviroment;
(function (Enviroment) {
    Enviroment[Enviroment["Development"] = 1] = "Development";
    Enviroment[Enviroment["Production"] = 2] = "Production";
})(Enviroment || (Enviroment = {}));
exports.Enviroment = Enviroment;
