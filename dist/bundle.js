(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var IImageEntity = (function () {
    function IImageEntity() {
    }
    return IImageEntity;
}());
exports.IImageEntity = IImageEntity;
},{}],2:[function(require,module,exports){
"use strict";
var enums_1 = require("../helper/enums");
var IImage_1 = require("../interfaces/IImage");
var ImageController = (function () {
    function ImageController() {
        this.dataItem = new IImage_1.IImageEntity();
        var _date = new Date();
        this.dataList = [{
                AddDate: _date.toJSON(),
                ImageUrl: "http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/test_tube.png",
                Spot: "test",
                Status: enums_1.ImageStatus.Active,
                Type: enums_1.ImageType.Gallery,
                Id: "1"
            }, {
                AddDate: _date.toJSON(),
                ImageUrl: "http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/test_tube.png",
                Spot: "test",
                Status: enums_1.ImageStatus.Active,
                Type: enums_1.ImageType.Gallery,
                Id: "2"
            }, {
                AddDate: _date.toJSON(),
                ImageUrl: "http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/test_tube.png",
                Spot: "test",
                Status: enums_1.ImageStatus.Active,
                Type: enums_1.ImageType.Gallery,
                Id: "3"
            }];
    }
    ImageController.prototype.GetGalleryImages = function (galleryId) {
        var _list = [];
        for (var number = 0; number < this.dataList.length; number++) {
            var currentRecord = this.dataList[number];
            this.dataItem.Id = currentRecord.Id;
            this.dataItem.ImageUrl = currentRecord.ImageUrl;
            this.dataItem.AddDate = currentRecord.AddDate;
            this.dataItem.Spot = currentRecord.Spot;
            this.dataItem.Status = currentRecord.Status;
            this.dataItem.Type = currentRecord.Type;
            _list.push(this.dataItem);
            this.dataItem = new IImage_1.IImageEntity();
        }
        console.info("listemiz: ", _list);
        return _list;
    };
    return ImageController;
}());
exports.ImageController = ImageController;
},{"../helper/enums":5,"../interfaces/IImage":1}],3:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Selamlar ger\u00E7ekten " + name;
}
exports.sayHello = sayHello;
},{}],4:[function(require,module,exports){
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
},{"./enums":5}],5:[function(require,module,exports){
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
        var _head;
        var _footer;
        var _dynamicHtml;
        var elt = document.getElementById(divName);
        var logic = new ImageController_1.ImageController();
        var data = logic.GetGalleryImages(123434);
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
var page = new MainPage();
page.showHello("greeting");
page.getDataFromMongo("data");
},{"./controller/ImageController":2,"./greet":3,"./helper/config":4,"./helper/enums":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXEludGVyZmFjZXNcXHNyY1xcaW50ZXJmYWNlc1xcSUltYWdlLnRzIiwic3JjL2NvbnRyb2xsZXIvSW1hZ2VDb250cm9sbGVyLnRzIiwic3JjL2dyZWV0LnRzIiwic3JjL2hlbHBlci9jb25maWcudHMiLCJzcmMvaGVscGVyL2VudW1zLnRzIiwic3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDV0E7SUFBQTtJQU9BLENBQUM7SUFBRCxtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0NBQVk7OztBQ1h6Qix5Q0FBd0Q7QUFDeEQsK0NBQTREO0FBTTVEO0lBUUk7UUFKUSxhQUFRLEdBQVcsSUFBSSxxQkFBWSxFQUFFLENBQUM7UUFNMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLFFBQVEsRUFBRSx1RkFBdUY7Z0JBQ2pHLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxtQkFBVyxDQUFDLE1BQU07Z0JBQzFCLElBQUksRUFBRSxpQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLEVBQUUsRUFBRSxHQUFHO2FBQ1YsRUFBRTtnQkFDQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsUUFBUSxFQUFFLHVGQUF1RjtnQkFDakcsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLG1CQUFXLENBQUMsTUFBTTtnQkFDMUIsSUFBSSxFQUFFLGlCQUFTLENBQUMsT0FBTztnQkFDdkIsRUFBRSxFQUFFLEdBQUc7YUFDVixFQUFFO2dCQUNDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN2QixRQUFRLEVBQUUsdUZBQXVGO2dCQUNqRyxJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUUsbUJBQVcsQ0FBQyxNQUFNO2dCQUMxQixJQUFJLEVBQUUsaUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixFQUFFLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FBQztJQUNQLENBQUM7SUFJTSwwQ0FBZ0IsR0FBdkIsVUFBd0IsU0FBa0I7UUFFdEMsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUk5QixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFFM0QsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUV4QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFvQkwsc0JBQUM7QUFBRCxDQWxGQSxBQWtGQyxJQUFBO0FBRVEsMENBQWU7OztBQzNGeEIsa0JBQXlCLElBQVk7SUFDakMsTUFBTSxDQUFDLDZCQUFzQixJQUFNLENBQUM7QUFDeEMsQ0FBQztBQUZELDRCQUVDOzs7QUNGRCxpQ0FBb0M7QUFFcEM7SUFBQTtJQWdCQSxDQUFDO0lBZGdCLHlCQUFpQixHQUEvQixVQUFnQyxVQUFxQjtRQUN6QyxJQUFJLE1BQWEsQ0FBQTtRQUNqQixNQUFNLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2YsS0FBSyxrQkFBVSxDQUFDLFdBQVc7Z0JBQzNCLE1BQU0sR0FBRyx1Q0FBdUMsQ0FBQztnQkFDakQsS0FBSyxDQUFDO1lBQ04sS0FBSyxrQkFBVSxDQUFDLFVBQVU7Z0JBQzFCLE1BQU0sR0FBRyxzQ0FBc0MsQ0FBQztnQkFDaEQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUdMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQztBQURpQixvQkFBWSxHQUFXLEVBQUUsQ0FBQztBQUlqQywwQkFBTzs7O0FDcEJsQixJQUFLLFVBR0Q7QUFISixXQUFLLFVBQVU7SUFDUCx5REFBZSxDQUFBO0lBQ2YsdURBQWMsQ0FBQTtBQUNuQixDQUFDLEVBSEMsVUFBVSxLQUFWLFVBQVUsUUFHWDtBQTZDSyxnQ0FBVTtBQTNDbkIsSUFBSyxhQUlKO0FBSkQsV0FBSyxhQUFhO0lBQ1YscURBQVUsQ0FBQTtJQUNWLHFEQUFVLENBQUE7SUFDVix1REFBVyxDQUFBO0FBQ25CLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQXVDb0Isc0NBQWE7QUFyQ2xDLElBQUssV0FJSjtBQUpELFdBQUssV0FBVztJQUNSLGlEQUFVLENBQUE7SUFDVixpREFBVSxDQUFBO0lBQ1YsbURBQVcsQ0FBQTtBQUNuQixDQUFDLEVBSkksV0FBVyxLQUFYLFdBQVcsUUFJZjtBQWlDbUMsa0NBQVc7QUEvQi9DLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNOLGlEQUFZLENBQUE7SUFDWiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQVMsQ0FBQTtBQUNqQixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQTJCZ0QsOEJBQVM7QUF6QjFELElBQUssV0FJSjtBQUpELFdBQUssV0FBVztJQUNSLGlEQUFVLENBQUE7SUFDVixpREFBVSxDQUFBO0lBQ1YsbURBQVcsQ0FBQTtBQUNuQixDQUFDLEVBSkksV0FBVyxLQUFYLFdBQVcsUUFJZjtBQXFCMkQsa0NBQVc7QUFuQnZFLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNOLHVDQUFPLENBQUE7SUFDUCx1Q0FBTyxDQUFBO0lBQ1AsdUNBQU8sQ0FBQTtBQUNmLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBZXVFLDhCQUFTO0FBYmpGLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNWLHFEQUFVLENBQUE7SUFDVixxREFBVSxDQUFBO0lBQ1YsdURBQVcsQ0FBQTtBQUNuQixDQUFDLEVBSkksYUFBYSxLQUFiLGFBQWEsUUFJakI7QUFTaUYsc0NBQWE7QUFQL0YsSUFBSyxXQUlKO0FBSkQsV0FBSyxXQUFXO0lBQ1IsK0NBQVMsQ0FBQTtJQUNULCtDQUFTLENBQUE7SUFDVCxtREFBVyxDQUFBO0FBQ25CLENBQUMsRUFKSSxXQUFXLEtBQVgsV0FBVyxRQUlmO0FBRytGLGtDQUFXOzs7QUNqRDNHLDBDQUF5QztBQUN6Qyx3Q0FBeUM7QUFDekMsaUNBQWlDO0FBQ2pDLGdFQUE0RDtBQUc1RDtJQUFBO0lBaURBLENBQUM7SUEvQ00sd0JBQUssR0FBWixVQUFhLFFBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLFFBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFSyw0QkFBUyxHQUFoQixVQUFpQixPQUFlO1FBRTVCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFPLENBQUMsaUJBQWlCLENBQUMsa0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV0RixDQUFDO0lBRUssbUNBQWdCLEdBQXZCLFVBQXdCLE9BQWM7UUFFbEMsSUFBSSxLQUFjLENBQUM7UUFDbkIsSUFBSSxPQUFnQixDQUFDO1FBQ3JCLElBQUksWUFBcUIsQ0FBQztRQUUxQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTVDLElBQUksS0FBSyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBRWxDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxLQUFLLEdBQUcsMkJBQTJCLENBQUM7UUFFbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDbkIsQ0FBQztZQUVHLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUVqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDLENBQy9CLENBQUM7b0JBQ0csWUFBWSxJQUFJLG1GQUFtRixHQUFHLFdBQVcsQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUMsT0FBTyxDQUFDO2dCQUNsTCxDQUFDO1lBRUwsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRWxCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUMzRSxDQUFDO0lBR0QsZUFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBRTFCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IEltYWdlU3RhdHVzLCBJbWFnZVR5cGUgfSBmcm9tICcuLi9oZWxwZXIvZW51bXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2Uge1xyXG4gICAgSWQ6IHN0cmluZ1xyXG4gICAgSW1hZ2VVcmw6IHN0cmluZ1xyXG4gICAgU3RhdHVzOiBJbWFnZVN0YXR1c1xyXG4gICAgVHlwZTogSW1hZ2VUeXBlXHJcbiAgICBTcG90OiBzdHJpbmdcclxuICAgIEFkZERhdGU6IGFueVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSUltYWdlRW50aXR5IGltcGxlbWVudHMgSUltYWdle1xyXG4gICAgSWQ6IHN0cmluZ1xyXG4gICAgSW1hZ2VVcmw6IHN0cmluZ1xyXG4gICAgU3RhdHVzOiBJbWFnZVN0YXR1c1xyXG4gICAgVHlwZTogSW1hZ2VUeXBlXHJcbiAgICBTcG90OiBzdHJpbmdcclxuICAgIEFkZERhdGU6IGFueVxyXG59IiwiaW1wb3J0IHsgSW1hZ2VTdGF0dXMsIEltYWdlVHlwZSB9IGZyb20gJy4uL2hlbHBlci9lbnVtcydcbmltcG9ydCB7IElJbWFnZSwgSUltYWdlRW50aXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUltYWdlXCI7XG5pbXBvcnQgeyBJSW1hZ2VCdXNpbmVzc01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9JSW1hZ2VCdXNpbmVzc01vZGVsXCI7XG5pbXBvcnQgeyBJbWFnZVNjaGVtYSB9IGZyb20gXCIuLi9zY2hlbWFzL0ltYWdlU2NoZW1hXCI7XG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cblxuY2xhc3MgSW1hZ2VDb250cm9sbGVyIHtcblxuICAgIC8vc3RvcmUgdGVzdCBkYXRhXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogQXJyYXk8SUltYWdlPjtcbiAgICBwcml2YXRlIGRhdGFJdGVtOiBJSW1hZ2UgPSBuZXcgSUltYWdlRW50aXR5KCk7XG4gICAgLy90aGUgSW1hZ2UgbW9kZWxcbiAgICBwdWJsaWMgc3RhdGljIEltYWdlOiBtb25nb29zZS5Nb2RlbDxJSW1hZ2VCdXNpbmVzc01vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIGxldCBfZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vY3JlYXRlIG1vY2sgZGF0YVxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gW3tcbiAgICAgICAgICAgIEFkZERhdGU6IF9kYXRlLnRvSlNPTigpLFxuICAgICAgICAgICAgSW1hZ2VVcmw6IFwiaHR0cDovL2ZpbmRpY29ucy5jb20vZmlsZXMvaWNvbnMvMjcxMS9mcmVlX2ljb25zX2Zvcl93aW5kb3dzOF9tZXRyby8xMjgvdGVzdF90dWJlLnBuZ1wiLFxuICAgICAgICAgICAgU3BvdDogXCJ0ZXN0XCIsXG4gICAgICAgICAgICBTdGF0dXM6IEltYWdlU3RhdHVzLkFjdGl2ZSxcbiAgICAgICAgICAgIFR5cGU6IEltYWdlVHlwZS5HYWxsZXJ5LFxuICAgICAgICAgICAgSWQ6IFwiMVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIEFkZERhdGU6IF9kYXRlLnRvSlNPTigpLFxuICAgICAgICAgICAgSW1hZ2VVcmw6IFwiaHR0cDovL2ZpbmRpY29ucy5jb20vZmlsZXMvaWNvbnMvMjcxMS9mcmVlX2ljb25zX2Zvcl93aW5kb3dzOF9tZXRyby8xMjgvdGVzdF90dWJlLnBuZ1wiLFxuICAgICAgICAgICAgU3BvdDogXCJ0ZXN0XCIsXG4gICAgICAgICAgICBTdGF0dXM6IEltYWdlU3RhdHVzLkFjdGl2ZSxcbiAgICAgICAgICAgIFR5cGU6IEltYWdlVHlwZS5HYWxsZXJ5LFxuICAgICAgICAgICAgSWQ6IFwiMlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIEFkZERhdGU6IF9kYXRlLnRvSlNPTigpLFxuICAgICAgICAgICAgSW1hZ2VVcmw6IFwiaHR0cDovL2ZpbmRpY29ucy5jb20vZmlsZXMvaWNvbnMvMjcxMS9mcmVlX2ljb25zX2Zvcl93aW5kb3dzOF9tZXRyby8xMjgvdGVzdF90dWJlLnBuZ1wiLFxuICAgICAgICAgICAgU3BvdDogXCJ0ZXN0XCIsXG4gICAgICAgICAgICBTdGF0dXM6IEltYWdlU3RhdHVzLkFjdGl2ZSxcbiAgICAgICAgICAgIFR5cGU6IEltYWdlVHlwZS5HYWxsZXJ5LFxuICAgICAgICAgICAgSWQ6IFwiM1wiXG4gICAgICAgIH1dO1xuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgR2V0R2FsbGVyeUltYWdlcyhnYWxsZXJ5SWQ/OiBudW1iZXIpOiBBcnJheTxJSW1hZ2U+IHtcblxuICAgICAgICBsZXQgX2xpc3Q6IEFycmF5PElJbWFnZT4gPSBbXTtcbiAgICAgICAgLy9idXJhZGEgZGIgY29ubmVjdGlvbiBrdXJcbiAgICAgICAgLy9tb2NrIGRhdGEgY29uc3RydWN0b3InZGFuIGdlbGl5b3IuLi5cblxuICAgICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCB0aGlzLmRhdGFMaXN0Lmxlbmd0aDsgbnVtYmVyKyspIHtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB0aGlzLmRhdGFMaXN0W251bWJlcl07XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW0uSWQgPSBjdXJyZW50UmVjb3JkLklkO1xuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbS5JbWFnZVVybCA9IGN1cnJlbnRSZWNvcmQuSW1hZ2VVcmw7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtLkFkZERhdGUgPSBjdXJyZW50UmVjb3JkLkFkZERhdGU7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtLlNwb3QgPSBjdXJyZW50UmVjb3JkLlNwb3Q7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtLlN0YXR1cyA9IGN1cnJlbnRSZWNvcmQuU3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbS5UeXBlID0gY3VycmVudFJlY29yZC5UeXBlO1xuXG4gICAgICAgICAgICBfbGlzdC5wdXNoKHRoaXMuZGF0YUl0ZW0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtID0gbmV3IElJbWFnZUVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKFwibGlzdGVtaXo6IFwiLCBfbGlzdCk7XG4gICAgICAgIHJldHVybiBfbGlzdDtcbiAgICB9XG5cblxuICAgIC8qXG4gICAgICAgIHB1YmxpYyBHZXRJbWFnZShpZDpudW1iZXIpOkltYWdle1xuICAgIFxuICAgICAgICAgICAgLy9idXJhZGEgZGIgY29ubmVjdGlvbiBrdXJcbiAgICAgICAgICAgIGxldCBfaWQgPSAxO1xuICAgICAgICAgICAgbGV0IF9pbWFnZVVybCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgX3Nwb3QgPSBcInNwb3QgZ2lyaWxlYmlsaXJcIjtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCBfYWRkRGF0ZSA9IGQudG9KU09OKCk7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBuZXcgSW1hZ2UoX2lkLF9pbWFnZVVybCxJbWFnZVN0YXR1cy5BY3RpdmUsSW1hZ2VUeXBlLkdhbGxlcnksIF9zcG90LF9hZGREYXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy92ZXJpeWkgZMO2bmTDvHIgdmUgaW1hZ2Vtb2RlbCdlIHNldCBldFxuICAgICAgICAgICAgdGhpcy5faW1hZ2VNb2RlbCA9IG1vZGVsO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlTW9kZWw7XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAqL1xufVxuXG5leHBvcnQgeyBJbWFnZUNvbnRyb2xsZXIgfSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGBTZWxhbWxhciBnZXLDp2VrdGVuICR7bmFtZX1gO1xyXG59IiwiaW1wb3J0IHsgRW52aXJvbWVudCB9IGZyb20gJy4vZW51bXMnXHJcblxyXG5jbGFzcyBVdGlsaXR5e1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBNb25nb0RCQ29ubmVjdGlvbihlbnZpcm9tZW50OkVudmlyb21lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAgICBsZXQgcmV0dmFsOnN0cmluZ1xyXG4gICAgICAgICAgICAgICBzd2l0Y2goZW52aXJvbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIEVudmlyb21lbnQuRGV2ZWxvcG1lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICByZXR2YWwgPSBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvZGV2ZWxvcG1lbnRcIjtcclxuICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgY2FzZSBFbnZpcm9tZW50LlByb2R1Y3Rpb246XHJcbiAgICAgICAgICAgICAgICAgICByZXR2YWwgPSBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcHJvZHVjdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEltYWdlQmFzZVVybDogc3RyaW5nID0gXCJcIjtcclxufVxyXG4gICAgXHJcblxyXG4gIGV4cG9ydCB7IFV0aWxpdHkgfSAgXHJcblxyXG5cclxuIiwiXHJcbmVudW0gRW52aXJvbWVudHtcclxuICAgICAgICBEZXZlbG9wbWVudCA9IDEsXHJcbiAgICAgICAgUHJvZHVjdGlvbiA9IDJcclxuICAgfVxyXG5cclxuZW51bSBBcnRpY2xlU3RhdHVze1xyXG4gICAgICAgIEFjdGl2ZSA9IDEsXHJcbiAgICAgICAgUGFzaXZlID0gMixcclxuICAgICAgICBEZWxldGVkID0gMyxcclxufVxyXG5cclxuZW51bSBJbWFnZVN0YXR1cyB7XHJcbiAgICAgICAgQWN0aXZlID0gMSxcclxuICAgICAgICBQYXNpdmUgPSAyLFxyXG4gICAgICAgIERlbGV0ZWQgPSAzXHJcbn1cclxuXHJcbmVudW0gSW1hZ2VUeXBlIHtcclxuICAgICAgICBTaG93Y2FzZSA9IDEsXHJcbiAgICAgICAgR2FsbGVyeSA9IDIsXHJcbiAgICAgICAgVGh1bWIgPSAzXHJcbn1cclxuXHJcbmVudW0gVmlkZW9TdGF0dXMge1xyXG4gICAgICAgIEFjdGl2ZSA9IDEsXHJcbiAgICAgICAgUGFzaXZlID0gMixcclxuICAgICAgICBEZWxldGVkID0gM1xyXG59XHJcblxyXG5lbnVtIFZpZGVvVHlwZSB7XHJcbiAgICAgICAgbXA0ID0gMSxcclxuICAgICAgICBvZ2cgPSAyLFxyXG4gICAgICAgIGZsdiA9IDNcclxufVxyXG5cclxuZW51bSBHYWxsZXJ5U3RhdHVzIHtcclxuICAgICAgICBBY3RpdmUgPSAxLFxyXG4gICAgICAgIFBhc2l2ZSA9IDIsXHJcbiAgICAgICAgRGVsZXRlZCA9IDNcclxufVxyXG5cclxuZW51bSBHYWxsZXJ5VHlwZSB7XHJcbiAgICAgICAgUGhvdG8gPSAxLFxyXG4gICAgICAgIFZpZGVvID0gMixcclxuICAgICAgICBBcnRpY2xlID0gMyAgICAgICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgIHtFbnZpcm9tZW50LCBBcnRpY2xlU3RhdHVzLCBJbWFnZVN0YXR1cywgSW1hZ2VUeXBlLCBWaWRlb1N0YXR1cyxWaWRlb1R5cGUsR2FsbGVyeVN0YXR1cyxHYWxsZXJ5VHlwZX0iLCJpbXBvcnQgeyBVdGlsaXR5IH0gZnJvbSAnLi9oZWxwZXIvY29uZmlnJ1xuaW1wb3J0IHtFbnZpcm9tZW50fSBmcm9tICcuL2hlbHBlci9lbnVtcydcbmltcG9ydCB7c2F5SGVsbG99IGZyb20gXCIuL2dyZWV0XCI7XG5pbXBvcnQge0ltYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyL0ltYWdlQ29udHJvbGxlcidcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tIFwibW9yZ2FuXCI7XG5cbmNsYXNzIE1haW5QYWdle1xuXG5wdWJsaWMgaGVsbG8oY29tcGlsZXI6c3RyaW5nKXtcbiAgICBjb25zb2xlLmxvZyhgU2VsYW0gJHtjb21waWxlcn1gKTtcbiB9XG5cbnB1YmxpYyBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nKXtcbiAgICBcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTsgICBcblxuICAgIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKSArIFV0aWxpdHkuTW9uZ29EQkNvbm5lY3Rpb24oRW52aXJvbWVudC5EZXZlbG9wbWVudCk7ICBcbiAgIFxuIH1cblxucHVibGljIGdldERhdGFGcm9tTW9uZ28oZGl2TmFtZTpzdHJpbmcpe1xuICAgIFxuICAgIGxldCBfaGVhZCA6IHN0cmluZztcbiAgICBsZXQgX2Zvb3RlciA6IHN0cmluZztcbiAgICBsZXQgX2R5bmFtaWNIdG1sIDogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpXG4gICAgXG4gICAgbGV0IGxvZ2ljID0gbmV3IEltYWdlQ29udHJvbGxlcigpO1xuICAgIFxuICAgIGxldCBkYXRhID0gbG9naWMuR2V0R2FsbGVyeUltYWdlcygxMjM0MzQpO1xuXG4gICBfaGVhZCA9IFwiPHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cIjtcbiAgICBcbiAgICBpZihkYXRhLmxlbmd0aCA+IDApXG4gICAge1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRhID0gZGF0YVtpXTsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG4gICAgICAgICAgICBpZihjdXJyZW50RGF0YS5JZCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2R5bmFtaWNIdG1sICs9IFwiPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPjxzcGFuPjxpbWcgc3R5bGU9XFxcIndpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7XFxcIiBzcmM9XFxcIlwiICsgY3VycmVudERhdGEuSW1hZ2VVcmwgKyBcIlxcXCIgLz48L3NwYW4+XCIrY3VycmVudERhdGEuSWQudG9TdHJpbmcoKStcIjwvbGk+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBfZm9vdGVyID0gXCI8L3VsPlwiO1xuICAgIFxuICAgIGVsdC5pbm5lckhUTUwgPSBfaGVhZCArIF9keW5hbWljSHRtbC5yZXBsYWNlKFwidW5kZWZpbmVkXCIsXCJcIikgKyBfZm9vdGVyO1xufVxuXG5cbn1cblxubGV0IHBhZ2UgPSBuZXcgTWFpblBhZ2UoKTtcblxucGFnZS5zaG93SGVsbG8oXCJncmVldGluZ1wiKTtcblxucGFnZS5nZXREYXRhRnJvbU1vbmdvKFwiZGF0YVwiKTtcblxuXG5cblxuIl19
