"use strict";
var _this = this;
var mongoose_1 = require("mongoose");
var enums_1 = require("../helpers/enums");
exports.ImageSchema = new mongoose_1.Schema({
    imageUrl: String,
    status: enums_1.ImageStatus,
    type: enums_1.ImageType,
    spot: String,
    addDate: Date
});
exports.ImageSchema.pre("save", function (next) {
    var now = new Date;
    if (!_this.addDate) {
        _this.addDate = now;
    }
    next();
});
