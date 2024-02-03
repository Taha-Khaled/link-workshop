export interface footerType {
  brief: string;
  imageURL: string;
  list: listEntity[];
}
export interface listEntity {
  id: string;
  title: string;
  links: linkEntity[];
}
export interface linkEntity {
  id: string;
  name: string;
}
