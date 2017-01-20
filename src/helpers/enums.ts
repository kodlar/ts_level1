
enum Enviroment{
        Development = 1,
        Production = 2
   }

enum ArticleStatus{
        Active = 1,
        Pasive = 2,
        Deleted = 3,
}

enum ImageStatus {
        Active = 1,
        Pasive = 2,
        Deleted = 3
}

enum ImageType {
        Showcase = 1,
        Gallery = 2,
        Thumb = 3
}

enum VideoStatus {
        Active = 1,
        Pasive = 2,
        Deleted = 3
}

enum VideoType {
        mp4 = 1,
        ogg = 2,
        flv = 3
}

enum GalleryStatus {
        Active = 1,
        Pasive = 2,
        Deleted = 3
}

enum GalleryType {
        Photo = 1,
        Video = 2,
        Article = 3        
}


export  {Enviroment, ArticleStatus, ImageStatus, ImageType, VideoStatus,VideoType,GalleryStatus,GalleryType}