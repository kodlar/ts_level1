"use strict";
var enums_1 = require("../../helpers/enums");
var ImageEntity_1 = require("../Entities/ImageEntity");
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
