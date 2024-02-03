import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { NewsType } from "../../types/newsType";

const getNewsList = async (): Promise<NewsType["News"]> => {
  const response = await axios
    .get<NewsType>("https://api.npoint.io/d275425a434e02acf2f7")
    .then((res) => res.data.News)
    .catch(() => []);

  const sortedNews = response?.sort((a, b) => {
    return Date.parse(b.publishedDate) - Date.parse(a.publishedDate);
  });

  return sortedNews;
};

export const useNewsList = () => {
  return useQuery<NewsType["News"]>({
    queryKey: [`getNewsList`],
    queryFn: getNewsList,
  });
};
