"use strict";
var ImageEntity_1 = require("../interfaces/Entities/ImageEntity");
var ImageBusiness_1 = require("../interfaces/business/ImageBusiness");
var ImageSchema_1 = require("../schemas/ImageSchema");
var mongoose = require("mongoose");
var enums_1 = require("../helpers/enums");
var ImageController = (function () {
    function ImageController(connectionString) {
        this._imageEntity = new ImageEntity_1.ImageEntity();
        this._imageBusiness = new ImageBusiness_1.ImageBusiness();
        mongoose.connect(connectionString);
        var _date = new Date();
        this._imageEntityList = [{
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
    ImageController.prototype.SaveImage = function () {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Veritabanı Bağlantı Hatası:'));
        db.once('open', function () {
            console.info("Veritabanı bağlantısı sağlandı");
            var imageModel = mongoose.model('image', ImageSchema_1.ImageSchema);
            var fluffy = new imageModel(this._imageEntityList);
            fluffy.save(function (err, fluffy) {
                if (err)
                    return console.error(err);
            });
            console.info("Veritabanı bağlantı işlemi tamamlandı");
        });
    };
    return ImageController;
}());
exports.ImageController = ImageController;
