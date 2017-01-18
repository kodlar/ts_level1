(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var enums_1 = require("../helper/enums");
var Image_1 = require("../model/Image");
var ImageController = (function () {
    function ImageController() {
    }
    ImageController.prototype.GetImages = function () {
        var _list;
        var numbers = [{
                "id": 4,
                "imageUrl": "",
                "status": 1,
                "ImageType": 1,
                "spot": "",
                "addDate": ""
            }, {
                "id": 9,
                "imageUrl": "",
                "status": 1,
                "ImageType": 1,
                "spot": "",
                "addDate": ""
            }, {
                "id": 16,
                "imageUrl": "",
                "status": 1,
                "ImageType": 1,
                "spot": "",
                "addDate": ""
            }, {
                "id": 25,
                "imageUrl": "",
                "status": 1,
                "ImageType": 1,
                "spot": "",
                "addDate": ""
            }];
        for (var number = 0; numbers.length > 0; number++) {
            var currentRecord = numbers[number];
            this._imageModel = new Image_1.Image(currentRecord.id, currentRecord.imageUrl, enums_1.ImageStatus[currentRecord.status], enums_1.ImageType[currentRecord.ImageType], currentRecord.spot, currentRecord.addDate);
            _list.push(this._imageModel);
        }
        return _list;
    };
    ImageController.prototype.GetImage = function (id) {
        var _id = 1;
        var _imageUrl = "";
        var _spot = "spot girilebilir";
        var d = new Date();
        var _addDate = d.toJSON();
        var model = new Image_1.Image(_id, _imageUrl, enums_1.ImageStatus.Active, enums_1.ImageType.Gallery, _spot, _addDate);
        this._imageModel = model;
        return this._imageModel;
    };
    return ImageController;
}());
exports.ImageController = ImageController;
},{"../helper/enums":4,"../model/Image":5}],2:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Selamlar ger\u00E7ekten " + name;
}
exports.sayHello = sayHello;
},{}],3:[function(require,module,exports){
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
},{"./enums":4}],4:[function(require,module,exports){
"use strict";
var Enviroment;
(function (Enviroment) {
    Enviroment[Enviroment["Development"] = 1] = "Development";
    Enviroment[Enviroment["Production"] = 2] = "Production";
})(Enviroment || (Enviroment = {}));
exports.Enviroment = Enviroment;
var ArticleStatus;
(function (ArticleStatus) {
    ArticleStatus[ArticleStatus["Active"] = 1] = "Active";
    ArticleStatus[ArticleStatus["Pasive"] = 2] = "Pasive";
    ArticleStatus[ArticleStatus["Deleted"] = 3] = "Deleted";
})(ArticleStatus || (ArticleStatus = {}));
exports.ArticleStatus = ArticleStatus;
var ImageStatus;
(function (ImageStatus) {
    ImageStatus[ImageStatus["Active"] = 1] = "Active";
    ImageStatus[ImageStatus["Pasive"] = 2] = "Pasive";
    ImageStatus[ImageStatus["Deleted"] = 3] = "Deleted";
})(ImageStatus || (ImageStatus = {}));
exports.ImageStatus = ImageStatus;
var ImageType;
(function (ImageType) {
    ImageType[ImageType["Showcase"] = 1] = "Showcase";
    ImageType[ImageType["Gallery"] = 2] = "Gallery";
    ImageType[ImageType["Thumb"] = 3] = "Thumb";
})(ImageType || (ImageType = {}));
exports.ImageType = ImageType;
var VideoStatus;
(function (VideoStatus) {
    VideoStatus[VideoStatus["Active"] = 1] = "Active";
    VideoStatus[VideoStatus["Pasive"] = 2] = "Pasive";
    VideoStatus[VideoStatus["Deleted"] = 3] = "Deleted";
})(VideoStatus || (VideoStatus = {}));
exports.VideoStatus = VideoStatus;
var VideoType;
(function (VideoType) {
    VideoType[VideoType["mp4"] = 1] = "mp4";
    VideoType[VideoType["ogg"] = 2] = "ogg";
    VideoType[VideoType["flv"] = 3] = "flv";
})(VideoType || (VideoType = {}));
exports.VideoType = VideoType;
var GalleryStatus;
(function (GalleryStatus) {
    GalleryStatus[GalleryStatus["Active"] = 1] = "Active";
    GalleryStatus[GalleryStatus["Pasive"] = 2] = "Pasive";
    GalleryStatus[GalleryStatus["Deleted"] = 3] = "Deleted";
})(GalleryStatus || (GalleryStatus = {}));
exports.GalleryStatus = GalleryStatus;
var GalleryType;
(function (GalleryType) {
    GalleryType[GalleryType["Photo"] = 1] = "Photo";
    GalleryType[GalleryType["Video"] = 2] = "Video";
    GalleryType[GalleryType["Article"] = 3] = "Article";
})(GalleryType || (GalleryType = {}));
exports.GalleryType = GalleryType;
},{}],5:[function(require,module,exports){
"use strict";
var Image = (function () {
    function Image(id, imageUrl, status, itype, spot, addDate) {
        this.Id = id;
        this.ImageUrl = imageUrl;
        this.Status = status;
        this.Type = itype;
        this.Spot = spot;
        this.AddDate = addDate;
    }
    return Image;
}());
exports.Image = Image;
},{}],6:[function(require,module,exports){
"use strict";
var config_1 = require("./helper/config");
var enums_1 = require("./helper/enums");
var greet_1 = require("./greet");
var ImageController_1 = require("./controller/ImageController");
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
        var elt = document.getElementById(divName);
        var logic = new ImageController_1.ImageController();
        var data = logic.GetImages();
        if (data.length > 0) {
            for (var i = 0; data.length > 0; i++) {
                var currentData = data[i];
                elt.innerHTML += currentData.Id;
            }
        }
    };
    return MainPage;
}());
var page = new MainPage();
page.showHello("greeting");
page.getDataFromMongo("data");
},{"./controller/ImageController":1,"./greet":2,"./helper/config":3,"./helper/enums":4}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJTcmMvY29udHJvbGxlci9JbWFnZUNvbnRyb2xsZXIudHMiLCJTcmMvZ3JlZXQudHMiLCJTcmMvaGVscGVyL2NvbmZpZy50cyIsIlNyYy9oZWxwZXIvZW51bXMudHMiLCJTcmMvbW9kZWwvSW1hZ2UudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSx5Q0FBc0Q7QUFDdEQsd0NBQXNDO0FBRXRDO0lBQUE7SUF5RUEsQ0FBQztJQXJFUyxtQ0FBUyxHQUFoQjtRQUNNLElBQUksS0FBa0IsQ0FBQTtRQUd0QixJQUFNLE9BQU8sR0FBRyxDQUFDO2dCQUNNLElBQUksRUFBRSxDQUFDO2dCQUNQLFVBQVUsRUFBRSxFQUFFO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFdBQVcsRUFBRSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxFQUFFO2FBQ2hCLEVBQUU7Z0JBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLEVBQUU7YUFDaEIsRUFBRTtnQkFDQyxJQUFJLEVBQUUsRUFBRTtnQkFDUixVQUFVLEVBQUUsRUFBRTtnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxXQUFXLEVBQUUsQ0FBQztnQkFDZCxNQUFNLEVBQUUsRUFBRTtnQkFDVixTQUFTLEVBQUUsRUFBRTthQUNoQixFQUFFO2dCQUNDLElBQUksRUFBRSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxFQUFFO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFdBQVcsRUFBRSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxFQUFFO2FBQ2hCLENBQUMsQ0FBQTtRQUd0QixHQUFH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SUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtJbWFnZVN0YXR1cywgSW1hZ2VUeXBlfSBmcm9tICcuLi9oZWxwZXIvZW51bXMnIFxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi9tb2RlbC9JbWFnZSdcblxuY2xhc3MgSW1hZ2VDb250cm9sbGVye1xuXG4gICAgX2ltYWdlTW9kZWwgOiBJbWFnZTtcbiAgICBcbiAgIHB1YmxpYyBHZXRJbWFnZXMoKTpBcnJheTxJbWFnZT57XG4gICAgICAgICBsZXQgX2xpc3Q6QXJyYXk8SW1hZ2U+XG4gICAgICAgICAvL2J1cmFkYSBkYiBjb25uZWN0aW9uIGt1clxuICAgICAgICAgLy9tb2NrIGRhdGFcbiAgICAgICAgIGNvbnN0IG51bWJlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbWFnZVR5cGVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcG90XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkRGF0ZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbWFnZVR5cGVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcG90XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkRGF0ZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW1hZ2VUeXBlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BvdFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZERhdGVcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkltYWdlVHlwZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwb3RcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGREYXRlXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVycy5sZW5ndGggPiAwOyBudW1iZXIrKyl7XG4gICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCAgPSBudW1iZXJzW251bWJlcl07XG4gICAgICAgICAgICB0aGlzLl9pbWFnZU1vZGVsID0gbmV3IEltYWdlKGN1cnJlbnRSZWNvcmQuaWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkLmltYWdlVXJsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VTdGF0dXNbPGFueT5jdXJyZW50UmVjb3JkLnN0YXR1c10sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVR5cGVbPGFueT5jdXJyZW50UmVjb3JkLkltYWdlVHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQuc3BvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZC5hZGREYXRlKTtcbiAgICAgICAgICAgIF9saXN0LnB1c2godGhpcy5faW1hZ2VNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgICByZXR1cm4gX2xpc3Q7XG4gICAgfVxuXG4gIFxuXG5cbiAgICBwdWJsaWMgR2V0SW1hZ2UoaWQ6bnVtYmVyKTpJbWFnZXtcblxuICAgICAgICAvL2J1cmFkYSBkYiBjb25uZWN0aW9uIGt1clxuICAgICAgICBsZXQgX2lkID0gMTtcbiAgICAgICAgbGV0IF9pbWFnZVVybCA9IFwiXCI7XG4gICAgICAgIGxldCBfc3BvdCA9IFwic3BvdCBnaXJpbGViaWxpclwiO1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBfYWRkRGF0ZSA9IGQudG9KU09OKCk7XG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBJbWFnZShfaWQsX2ltYWdlVXJsLEltYWdlU3RhdHVzLkFjdGl2ZSxJbWFnZVR5cGUuR2FsbGVyeSwgX3Nwb3QsX2FkZERhdGUpO1xuICAgICAgICBcbiAgICAgICAgLy92ZXJpeWkgZMO2bmTDvHIgdmUgaW1hZ2Vtb2RlbCdlIHNldCBldFxuICAgICAgICB0aGlzLl9pbWFnZU1vZGVsID0gbW9kZWw7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZU1vZGVsO1xuICAgIH1cbiAgICAgIFxuXG59XG5cbmV4cG9ydCB7SW1hZ2VDb250cm9sbGVyfSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGBTZWxhbWxhciBnZXLDp2VrdGVuICR7bmFtZX1gO1xyXG59IiwiaW1wb3J0IHsgRW52aXJvbWVudCB9IGZyb20gJy4vZW51bXMnXHJcblxyXG5jbGFzcyBVdGlsaXR5e1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBNb25nb0RCQ29ubmVjdGlvbihlbnZpcm9tZW50OkVudmlyb21lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAgICBsZXQgcmV0dmFsOnN0cmluZ1xyXG4gICAgICAgICAgICAgICBzd2l0Y2goZW52aXJvbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIEVudmlyb21lbnQuRGV2ZWxvcG1lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICByZXR2YWwgPSBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvZGV2ZWxvcG1lbnRcIjtcclxuICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgY2FzZSBFbnZpcm9tZW50LlByb2R1Y3Rpb246XHJcbiAgICAgICAgICAgICAgICAgICByZXR2YWwgPSBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcHJvZHVjdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEltYWdlQmFzZVVybDogc3RyaW5nID0gXCJcIjtcclxufVxyXG4gICAgXHJcblxyXG4gIGV4cG9ydCB7IFV0aWxpdHkgfSAgXHJcblxyXG5cclxuIiwiXHJcbmVudW0gRW52aXJvbWVudHtcclxuICAgICAgICBEZXZlbG9wbWVudCA9IDEsXHJcbiAgICAgICAgUHJvZHVjdGlvbiA9IDJcclxuICAgfVxyXG5cclxuZW51bSBBcnRpY2xlU3RhdHVze1xyXG4gICAgICAgIEFjdGl2ZSA9IDEsXHJcbiAgICAgICAgUGFzaXZlID0gMixcclxuICAgICAgICBEZWxldGVkID0gMyxcclxufVxyXG5cclxuZW51bSBJbWFnZVN0YXR1cyB7XHJcbiAgICAgICAgQWN0aXZlID0gMSxcclxuICAgICAgICBQYXNpdmUgPSAyLFxyXG4gICAgICAgIERlbGV0ZWQgPSAzXHJcbn1cclxuXHJcbmVudW0gSW1hZ2VUeXBlIHtcclxuICAgICAgICBTaG93Y2FzZSA9IDEsXHJcbiAgICAgICAgR2FsbGVyeSA9IDIsXHJcbiAgICAgICAgVGh1bWIgPSAzXHJcbn1cclxuXHJcbmVudW0gVmlkZW9TdGF0dXMge1xyXG4gICAgICAgIEFjdGl2ZSA9IDEsXHJcbiAgICAgICAgUGFzaXZlID0gMixcclxuICAgICAgICBEZWxldGVkID0gM1xyXG59XHJcblxyXG5lbnVtIFZpZGVvVHlwZSB7XHJcbiAgICAgICAgbXA0ID0gMSxcclxuICAgICAgICBvZ2cgPSAyLFxyXG4gICAgICAgIGZsdiA9IDNcclxufVxyXG5cclxuZW51bSBHYWxsZXJ5U3RhdHVzIHtcclxuICAgICAgICBBY3RpdmUgPSAxLFxyXG4gICAgICAgIFBhc2l2ZSA9IDIsXHJcbiAgICAgICAgRGVsZXRlZCA9IDNcclxufVxyXG5cclxuZW51bSBHYWxsZXJ5VHlwZSB7XHJcbiAgICAgICAgUGhvdG8gPSAxLFxyXG4gICAgICAgIFZpZGVvID0gMixcclxuICAgICAgICBBcnRpY2xlID0gMyAgICAgICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgIHtFbnZpcm9tZW50LCBBcnRpY2xlU3RhdHVzLCBJbWFnZVN0YXR1cywgSW1hZ2VUeXBlLCBWaWRlb1N0YXR1cyxWaWRlb1R5cGUsR2FsbGVyeVN0YXR1cyxHYWxsZXJ5VHlwZX0iLCJpbXBvcnQgeyBJbWFnZVN0YXR1cywgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vaGVscGVyL2VudW1zJ1xyXG5cclxuaW50ZXJmYWNlIElJbWFnZVxyXG57XHJcbiAgICBJZDpudW1iZXJcclxuICAgIEltYWdlVXJsIDogc3RyaW5nXHJcbiAgICBTdGF0dXMgOiBJbWFnZVN0YXR1c1xyXG4gICAgVHlwZSA6IEltYWdlVHlwZVxyXG4gICAgU3BvdCA6IHN0cmluZ1xyXG4gICAgQWRkRGF0ZSA6IGFueVxyXG59XHJcblxyXG5jbGFzcyBJbWFnZSBpbXBsZW1lbnRzIElJbWFnZSB7XHJcbiAgICBJZDpudW1iZXJcclxuICAgIEltYWdlVXJsIDogc3RyaW5nXHJcbiAgICBTdGF0dXMgOiBJbWFnZVN0YXR1c1xyXG4gICAgVHlwZSA6IEltYWdlVHlwZVxyXG4gICAgU3BvdCA6IHN0cmluZ1xyXG4gICAgQWRkRGF0ZSA6IGFueVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIGltYWdlVXJsOiBzdHJpbmcsIHN0YXR1czpJbWFnZVN0YXR1cywgaXR5cGUgOiBJbWFnZVR5cGUsIHNwb3Q6c3RyaW5nLGFkZERhdGUgOmFueSl7XHJcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuSW1hZ2VVcmwgPSBpbWFnZVVybDtcclxuICAgICAgICB0aGlzLlN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLlR5cGUgPSBpdHlwZTtcclxuICAgICAgICB0aGlzLlNwb3QgPSBzcG90O1xyXG4gICAgICAgIHRoaXMuQWRkRGF0ZSA9IGFkZERhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEltYWdlIH0iLCJpbXBvcnQgeyBVdGlsaXR5IH0gZnJvbSAnLi9oZWxwZXIvY29uZmlnJ1xyXG5pbXBvcnQge0Vudmlyb21lbnR9IGZyb20gJy4vaGVscGVyL2VudW1zJ1xyXG5pbXBvcnQge3NheUhlbGxvfSBmcm9tIFwiLi9ncmVldFwiO1xyXG5pbXBvcnQge0ltYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyL0ltYWdlQ29udHJvbGxlcidcclxuXHJcblxyXG5cclxuY2xhc3MgTWFpblBhZ2V7XHJcblxyXG5wdWJsaWMgaGVsbG8oY29tcGlsZXI6c3RyaW5nKXtcclxuICAgIGNvbnNvbGUubG9nKGBTZWxhbSAke2NvbXBpbGVyfWApO1xyXG4gfVxyXG5cclxucHVibGljIHNob3dIZWxsbyhkaXZOYW1lOiBzdHJpbmcpe1xyXG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7ICAgIFxyXG4gICAgZWx0LmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpICsgVXRpbGl0eS5Nb25nb0RCQ29ubmVjdGlvbihFbnZpcm9tZW50LkRldmVsb3BtZW50KTsgICAgXHJcbiB9XHJcblxyXG5wdWJsaWMgZ2V0RGF0YUZyb21Nb25nbyhkaXZOYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKVxyXG4gICAgbGV0IGxvZ2ljID0gbmV3IEltYWdlQ29udHJvbGxlcigpO1xyXG4gICAgbGV0IGRhdGEgPSBsb2dpYy5HZXRJbWFnZXMoKTtcclxuICAgIGlmKGRhdGEubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBkYXRhLmxlbmd0aCA+IDA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0YSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICBlbHQuaW5uZXJIVE1MICs9IGN1cnJlbnREYXRhLklkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxufVxyXG5cclxubGV0IHBhZ2UgPSBuZXcgTWFpblBhZ2UoKTtcclxucGFnZS5zaG93SGVsbG8oXCJncmVldGluZ1wiKTtcclxucGFnZS5nZXREYXRhRnJvbU1vbmdvKFwiZGF0YVwiKTtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
