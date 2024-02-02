export interface NewsType {
  News: NewsEntity[];
}
export interface NewsEntity {
  id: string;
  title: string;
  content: string;
  categoryID: string;
  urlToImage: string;
  description?: string;
  publishedDate: string;
  showOnHomepage: string;
}
