export interface solutionsType {
  items: ItemsEntity[];
  title: string;
  brief: string;
}
interface ItemsEntity {
  id: string;
  title: string;
  imgUrl: string;
}
