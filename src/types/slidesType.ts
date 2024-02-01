export interface SlidesType {
  slides: SlideType[];
}
export interface SlideType {
  id: string;
  brief: string;
  order: number;
  title: string;
  imgUrl: string;
  itemUrl: string;
  category: string;
  videoUrl: string;
  colorCode: string;
}
