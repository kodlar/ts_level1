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
