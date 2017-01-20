"use strict";
var enums_1 = require("./enums");
var Utility = (function () {
    function Utility() {
    }
    Utility.MongoDBConnection = function (enviroment) {
        var retval;
        switch (enviroment) {
            case enums_1.Enviroment.Development:
                retval = "mongodb://localhost:27017/development";
                break;
            case enums_1.Enviroment.Production:
                retval = "mongodb://localhost:27017/production";
                break;
        }
        return retval;
    };
    return Utility;
}());
Utility.ImageBaseUrl = "";
exports.Utility = Utility;
