"use strict";
var config_1 = require("./helpers/config");
var enums_1 = require("./helpers/enums");
var greet_1 = require("./greet");
var ImageController_1 = require("./controller/ImageController");
var ImageBusiness_1 = require("./Interfaces/business/ImageBusiness");
var logger = require("morgan");
var MainPage = (function () {
    function MainPage() {
    }
    MainPage.prototype.hello = function (compiler) {
        console.log("Selam " + compiler);
    };
    MainPage.prototype.showHello = function (divName) {
        var elt = document.getElementById(divName);
        elt.innerText = greet_1.sayHello(name) + config_1.Utility.MongoDBConnection(enums_1.Enviroment.Development);
    };
    MainPage.prototype.getDataFromMongo = function (divName) {
        var _head;
        var _footer;
        var _dynamicHtml;
        var elt = document.getElementById(divName);
        var _businessLogic = new ImageBusiness_1.ImageBusiness();
        var data = _businessLogic.GetGalleryImages(123434);
        _head = "<ul class=\"list-group\">";
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                var currentData = data[i];
                console.log(currentData);
                if (currentData.Id != undefined) {
                    _dynamicHtml += "<li class=\"list-group-item\"><span><img style=\"width:16px;height:16px;\" src=\"" + currentData.ImageUrl + "\" /></span>" + currentData.Id.toString() + "</li>";
                }
            }
        }
        _footer = "</ul>";
        elt.innerHTML = _head + _dynamicHtml.replace("undefined", "") + _footer;
    };
    return MainPage;
}());
logger("dev");
var page = new MainPage();
page.showHello("greeting");
page.getDataFromMongo("data");
var c = new ImageController_1.ImageController(config_1.Utility.MongoDBConnection(enums_1.Enviroment.Development));
c.SaveImage();
