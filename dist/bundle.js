(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Selamlar ger\u00E7ekten " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
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
},{"./enums":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";
var enums_1 = require("../../helpers/enums");
var ImageEntity_1 = require("../entities/ImageEntity");
var ImageBusiness = (function () {
    function ImageBusiness() {
        this.dataItem = new ImageEntity_1.ImageEntity();
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
    ImageBusiness.prototype.GetImage = function (id) {
        return this.dataItem;
    };
    ImageBusiness.prototype.GetGalleryImages = function (galleryId) {
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
            this.dataItem = new ImageEntity_1.ImageEntity();
        }
        console.info("listemiz: ", _list);
        return _list;
    };
    return ImageBusiness;
}());
exports.ImageBusiness = ImageBusiness;
},{"../../helpers/enums":3,"../entities/ImageEntity":5}],5:[function(require,module,exports){
"use strict";
var ImageEntity = (function () {
    function ImageEntity() {
    }
    return ImageEntity;
}());
exports.ImageEntity = ImageEntity;
},{}],6:[function(require,module,exports){
"use strict";
var config_1 = require("./helpers/config");
var enums_1 = require("./helpers/enums");
var greet_1 = require("./greet");
var ImageBusiness_1 = require("./interfaces/business/ImageBusiness");
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
var page = new MainPage();
page.showHello("greeting");
page.getDataFromMongo("data");
},{"./greet":1,"./helpers/config":2,"./helpers/enums":3,"./interfaces/business/ImageBusiness":4}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvaGVscGVycy9jb25maWcudHMiLCJzcmMvaGVscGVycy9lbnVtcy50cyIsInNyYy9pbnRlcmZhY2VzL2J1c2luZXNzL0ltYWdlQnVzaW5lc3MudHMiLCJzcmMvaW50ZXJmYWNlcy9lbnRpdGllcy9JbWFnZUVudGl0eS50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLGtCQUF5QixJQUFZO0lBQ2pDLE1BQU0sQ0FBQyw2QkFBc0IsSUFBTSxDQUFDO0FBQ3hDLENBQUM7QUFGRCw0QkFFQzs7O0FDRkQsaUNBQW9DO0FBRXBDO0lBQUE7SUFnQkEsQ0FBQztJQWRnQix5QkFBaUIsR0FBL0IsVUFBZ0MsVUFBcUI7UUFDekMsSUFBSSxNQUFhLENBQUE7UUFDakIsTUFBTSxDQUFBLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNmLEtBQUssa0JBQVUsQ0FBQyxXQUFXO2dCQUMzQixNQUFNLEdBQUcsdUNBQXVDLENBQUM7Z0JBQ2pELEtBQUssQ0FBQztZQUNOLEtBQUssa0JBQVUsQ0FBQyxVQUFVO2dCQUMxQixNQUFNLEdBQUcsc0NBQXNDLENBQUM7Z0JBQ2hELEtBQUssQ0FBQztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFHTCxjQUFDO0FBQUQsQ0FoQkEsQUFnQkM7QUFEaUIsb0JBQVksR0FBVyxFQUFFLENBQUM7QUFJakMsMEJBQU87OztBQ3BCbEIsSUFBSyxVQUdEO0FBSEosV0FBSyxVQUFVO0lBQ1AseURBQWUsQ0FBQTtJQUNmLHVEQUFjLENBQUE7QUFDbkIsQ0FBQyxFQUhDLFVBQVUsS0FBVixVQUFVLFFBR1g7QUE2Q0ssZ0NBQVU7QUEzQ25CLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNWLHFEQUFVLENBQUE7SUFDVixxREFBVSxDQUFBO0lBQ1YsdURBQVcs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LEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzNFLENBQUM7SUFLRCxlQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQUtELElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFFMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gYFNlbGFtbGFyIGdlcsOnZWt0ZW4gJHtuYW1lfWA7XHJcbn0iLCJpbXBvcnQgeyBFbnZpcm9tZW50IH0gZnJvbSAnLi9lbnVtcydcclxuXHJcbmNsYXNzIFV0aWxpdHl7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIE1vbmdvREJDb25uZWN0aW9uKGVudmlyb21lbnQ6RW52aXJvbWVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgICAgIGxldCByZXR2YWw6c3RyaW5nXHJcbiAgICAgICAgICAgICAgIHN3aXRjaChlbnZpcm9tZW50KXtcclxuICAgICAgICAgICAgICAgICAgIGNhc2UgRW52aXJvbWVudC5EZXZlbG9wbWVudDpcclxuICAgICAgICAgICAgICAgICAgIHJldHZhbCA9IFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9kZXZlbG9wbWVudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIEVudmlyb21lbnQuUHJvZHVjdGlvbjpcclxuICAgICAgICAgICAgICAgICAgIHJldHZhbCA9IFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9wcm9kdWN0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICByZXR1cm4gcmV0dmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW1hZ2VCYXNlVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG59XHJcbiAgICBcclxuXHJcbiAgZXhwb3J0IHsgVXRpbGl0eSB9ICBcclxuXHJcblxyXG4iLCJcclxuZW51bSBFbnZpcm9tZW50e1xyXG4gICAgICAgIERldmVsb3BtZW50ID0gMSxcclxuICAgICAgICBQcm9kdWN0aW9uID0gMlxyXG4gICB9XHJcblxyXG5lbnVtIEFydGljbGVTdGF0dXN7XHJcbiAgICAgICAgQWN0aXZlID0gMSxcclxuICAgICAgICBQYXNpdmUgPSAyLFxyXG4gICAgICAgIERlbGV0ZWQgPSAzLFxyXG59XHJcblxyXG5lbnVtIEltYWdlU3RhdHVzIHtcclxuICAgICAgICBBY3RpdmUgPSAxLFxyXG4gICAgICAgIFBhc2l2ZSA9IDIsXHJcbiAgICAgICAgRGVsZXRlZCA9IDNcclxufVxyXG5cclxuZW51bSBJbWFnZVR5cGUge1xyXG4gICAgICAgIFNob3djYXNlID0gMSxcclxuICAgICAgICBHYWxsZXJ5ID0gMixcclxuICAgICAgICBUaHVtYiA9IDNcclxufVxyXG5cclxuZW51bSBWaWRlb1N0YXR1cyB7XHJcbiAgICAgICAgQWN0aXZlID0gMSxcclxuICAgICAgICBQYXNpdmUgPSAyLFxyXG4gICAgICAgIERlbGV0ZWQgPSAzXHJcbn1cclxuXHJcbmVudW0gVmlkZW9UeXBlIHtcclxuICAgICAgICBtcDQgPSAxLFxyXG4gICAgICAgIG9nZyA9IDIsXHJcbiAgICAgICAgZmx2ID0gM1xyXG59XHJcblxyXG5lbnVtIEdhbGxlcnlTdGF0dXMge1xyXG4gICAgICAgIEFjdGl2ZSA9IDEsXHJcbiAgICAgICAgUGFzaXZlID0gMixcclxuICAgICAgICBEZWxldGVkID0gM1xyXG59XHJcblxyXG5lbnVtIEdhbGxlcnlUeXBlIHtcclxuICAgICAgICBQaG90byA9IDEsXHJcbiAgICAgICAgVmlkZW8gPSAyLFxyXG4gICAgICAgIEFydGljbGUgPSAzICAgICAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCAge0Vudmlyb21lbnQsIEFydGljbGVTdGF0dXMsIEltYWdlU3RhdHVzLCBJbWFnZVR5cGUsIFZpZGVvU3RhdHVzLFZpZGVvVHlwZSxHYWxsZXJ5U3RhdHVzLEdhbGxlcnlUeXBlfSIsImltcG9ydCB7IElJbWFnZUVudGl0eSB9IGZyb20gXCIuLi9lbnRpdGllcy9JSW1hZ2VFbnRpdHlcIjtcclxuaW1wb3J0IHsgSUltYWdlQnVzaW5lc3MgfSBmcm9tIFwiLi9JSW1hZ2VCdXNpbmVzc1wiXHJcbmltcG9ydCB7IEltYWdlU3RhdHVzLCBJbWFnZVR5cGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2VudW1zJ1xyXG5pbXBvcnQgeyBJbWFnZUVudGl0eSB9IGZyb20gXCIuLi9lbnRpdGllcy9JbWFnZUVudGl0eVwiXHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VCdXNpbmVzcyBpbXBsZW1lbnRzIElJbWFnZUJ1c2luZXNzIHtcclxuXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBBcnJheTxJSW1hZ2VFbnRpdHk+O1xyXG4gICAgcHJpdmF0ZSBkYXRhSXRlbTogSUltYWdlRW50aXR5ID0gbmV3IEltYWdlRW50aXR5KCk7XHJcblxyXG5cclxuIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy9jcmVhdGUgbW9jayBkYXRhXHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFt7XHJcbiAgICAgICAgICAgIEFkZERhdGU6IF9kYXRlLnRvSlNPTigpLFxyXG4gICAgICAgICAgICBJbWFnZVVybDogXCJodHRwOi8vZmluZGljb25zLmNvbS9maWxlcy9pY29ucy8yNzExL2ZyZWVfaWNvbnNfZm9yX3dpbmRvd3M4X21ldHJvLzEyOC90ZXN0X3R1YmUucG5nXCIsXHJcbiAgICAgICAgICAgIFNwb3Q6IFwidGVzdFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IEltYWdlU3RhdHVzLkFjdGl2ZSxcclxuICAgICAgICAgICAgVHlwZTogSW1hZ2VUeXBlLkdhbGxlcnksXHJcbiAgICAgICAgICAgIElkOiBcIjFcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgQWRkRGF0ZTogX2RhdGUudG9KU09OKCksXHJcbiAgICAgICAgICAgIEltYWdlVXJsOiBcImh0dHA6Ly9maW5kaWNvbnMuY29tL2ZpbGVzL2ljb25zLzI3MTEvZnJlZV9pY29uc19mb3Jfd2luZG93czhfbWV0cm8vMTI4L3Rlc3RfdHViZS5wbmdcIixcclxuICAgICAgICAgICAgU3BvdDogXCJ0ZXN0XCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogSW1hZ2VTdGF0dXMuQWN0aXZlLFxyXG4gICAgICAgICAgICBUeXBlOiBJbWFnZVR5cGUuR2FsbGVyeSxcclxuICAgICAgICAgICAgSWQ6IFwiMlwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBBZGREYXRlOiBfZGF0ZS50b0pTT04oKSxcclxuICAgICAgICAgICAgSW1hZ2VVcmw6IFwiaHR0cDovL2ZpbmRpY29ucy5jb20vZmlsZXMvaWNvbnMvMjcxMS9mcmVlX2ljb25zX2Zvcl93aW5kb3dzOF9tZXRyby8xMjgvdGVzdF90dWJlLnBuZ1wiLFxyXG4gICAgICAgICAgICBTcG90OiBcInRlc3RcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBJbWFnZVN0YXR1cy5BY3RpdmUsXHJcbiAgICAgICAgICAgIFR5cGU6IEltYWdlVHlwZS5HYWxsZXJ5LFxyXG4gICAgICAgICAgICBJZDogXCIzXCJcclxuICAgICAgICB9XTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyAgR2V0SW1hZ2UoaWQ6IG51bWJlcik6IElJbWFnZUVudGl0eXtcclxuICAgICByZXR1cm4gdGhpcy5kYXRhSXRlbTtcclxuICB9XHJcblxyXG4gICBwdWJsaWMgR2V0R2FsbGVyeUltYWdlcyhnYWxsZXJ5SWQ/OiBudW1iZXIpOiBBcnJheTxJSW1hZ2VFbnRpdHk+IHtcclxuXHJcbiBcclxuICAgICAgICBsZXQgX2xpc3Q6IEFycmF5PElJbWFnZUVudGl0eT4gPSBbXTtcclxuICAgICAgICAvL2J1cmFkYSBkYiBjb25uZWN0aW9uIGt1clxyXG4gICAgICAgIC8vbW9jayBkYXRhIGNvbnN0cnVjdG9yJ2RhbiBnZWxpeW9yLi4uXHJcblxyXG4gICAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHRoaXMuZGF0YUxpc3QubGVuZ3RoOyBudW1iZXIrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB0aGlzLmRhdGFMaXN0W251bWJlcl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtLklkID0gY3VycmVudFJlY29yZC5JZDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbS5JbWFnZVVybCA9IGN1cnJlbnRSZWNvcmQuSW1hZ2VVcmw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW0uQWRkRGF0ZSA9IGN1cnJlbnRSZWNvcmQuQWRkRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbS5TcG90ID0gY3VycmVudFJlY29yZC5TcG90O1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtLlN0YXR1cyA9IGN1cnJlbnRSZWNvcmQuU3RhdHVzO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtLlR5cGUgPSBjdXJyZW50UmVjb3JkLlR5cGU7XHJcblxyXG4gICAgICAgICAgICBfbGlzdC5wdXNoKHRoaXMuZGF0YUl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbSA9IG5ldyBJbWFnZUVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwibGlzdGVtaXo6IFwiLCBfbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIF9saXN0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgSW1hZ2VTdGF0dXMsIEltYWdlVHlwZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZW51bXMnO1xyXG5pbXBvcnQgeyBJSW1hZ2VFbnRpdHkgfSBmcm9tIFwiLi9JSW1hZ2VFbnRpdHlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlRW50aXR5IGltcGxlbWVudHMgSUltYWdlRW50aXR5e1xyXG4gICAgSWQ6IHN0cmluZ1xyXG4gICAgSW1hZ2VVcmw6IHN0cmluZ1xyXG4gICAgU3RhdHVzOiBJbWFnZVN0YXR1c1xyXG4gICAgVHlwZTogSW1hZ2VUeXBlXHJcbiAgICBTcG90OiBzdHJpbmdcclxuICAgIEFkZERhdGU6IGFueVxyXG59IiwiaW1wb3J0IHsgVXRpbGl0eSB9IGZyb20gJy4vaGVscGVycy9jb25maWcnXG5pbXBvcnQge0Vudmlyb21lbnR9IGZyb20gJy4vaGVscGVycy9lbnVtcydcbmltcG9ydCB7c2F5SGVsbG99IGZyb20gXCIuL2dyZWV0XCI7XG5pbXBvcnQge0ltYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyL0ltYWdlQ29udHJvbGxlcidcbmltcG9ydCB7IElJbWFnZUJ1c2luZXNzfSBmcm9tICcuL2ludGVyZmFjZXMvYnVzaW5lc3MvSUltYWdlQnVzaW5lc3MnXG5pbXBvcnQgeyBJbWFnZUJ1c2luZXNzfSBmcm9tICcuL2ludGVyZmFjZXMvYnVzaW5lc3MvSW1hZ2VCdXNpbmVzcydcblxuXG5cblxuXG5jbGFzcyBNYWluUGFnZXtcblxucHVibGljIGhlbGxvKGNvbXBpbGVyOnN0cmluZyl7XG4gICAgY29uc29sZS5sb2coYFNlbGFtICR7Y29tcGlsZXJ9YCk7XG4gfVxuXG5wdWJsaWMgc2hvd0hlbGxvKGRpdk5hbWU6IHN0cmluZyl7XG4gICAgXG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7ICAgXG5cbiAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSkgKyBVdGlsaXR5Lk1vbmdvREJDb25uZWN0aW9uKEVudmlyb21lbnQuRGV2ZWxvcG1lbnQpOyAgXG4gICBcbiB9XG5cbnB1YmxpYyBnZXREYXRhRnJvbU1vbmdvKGRpdk5hbWU6c3RyaW5nKXtcbiAgICBcbiAgICBsZXQgX2hlYWQgOiBzdHJpbmc7XG4gICAgbGV0IF9mb290ZXIgOiBzdHJpbmc7XG4gICAgbGV0IF9keW5hbWljSHRtbCA6IHN0cmluZztcbiAgICBcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKVxuICAgIFxuICAgIGxldCBfYnVzaW5lc3NMb2dpYyA6SUltYWdlQnVzaW5lc3MgPSBuZXcgSW1hZ2VCdXNpbmVzcygpOyAgICBcbiAgICBsZXQgZGF0YSA9IF9idXNpbmVzc0xvZ2ljLkdldEdhbGxlcnlJbWFnZXMoMTIzNDM0KTtcbiAgICAgXG4gICAgXG5cbiAgIF9oZWFkID0gXCI8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlwiO1xuICAgIFxuICAgIGlmKGRhdGEubGVuZ3RoID4gMClcbiAgICB7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGEgPSBkYXRhW2ldOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREYXRhKTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnREYXRhLklkICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZHluYW1pY0h0bWwgKz0gXCI8bGkgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+PHNwYW4+PGltZyBzdHlsZT1cXFwid2lkdGg6MTZweDtoZWlnaHQ6MTZweDtcXFwiIHNyYz1cXFwiXCIgKyBjdXJyZW50RGF0YS5JbWFnZVVybCArIFwiXFxcIiAvPjwvc3Bhbj5cIitjdXJyZW50RGF0YS5JZC50b1N0cmluZygpK1wiPC9saT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIF9mb290ZXIgPSBcIjwvdWw+XCI7XG4gICAgXG4gICAgZWx0LmlubmVySFRNTCA9IF9oZWFkICsgX2R5bmFtaWNIdG1sLnJlcGxhY2UoXCJ1bmRlZmluZWRcIixcIlwiKSArIF9mb290ZXI7XG59XG5cblxuXG5cbn1cbi8vbW9uZ29vc2UuY29ubmVjdChVdGlsaXR5Lk1vbmdvREJDb25uZWN0aW9uKEVudmlyb21lbnQuRGV2ZWxvcG1lbnQpKTtcblxuXG5cbmxldCBwYWdlID0gbmV3IE1haW5QYWdlKCk7XG5cbnBhZ2Uuc2hvd0hlbGxvKFwiZ3JlZXRpbmdcIik7XG5cbnBhZ2UuZ2V0RGF0YUZyb21Nb25nbyhcImRhdGFcIik7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=
