export interface SlidesType {
  slides: SlidesEntity[];
}
export interface SlidesEntity {
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
