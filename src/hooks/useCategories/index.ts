import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CategoriesType } from "../../types/categoryType";

const getCategories = async (): Promise<CategoriesType["newsCategory"]> => {
  const response = await axios
    .get<CategoriesType>("https://api.npoint.io/91298d970c27e9a06518")
    .then((res) => res.data.newsCategory)
    .catch(() => []);
  return [{ id: "", name: "All News" }, ...response];
};

export const useCategories = () => {
  return useQuery<CategoriesType["newsCategory"]>({
    queryKey: [`getCategories`],
    queryFn: getCategories,
  });
};

export const useCategory = (id: string) => {
  const queryClient = useQueryClient();
  const categories = queryClient.getQueryData<CategoriesType["newsCategory"]>([
    "getCategories",
  ]);
  return categories?.find((item) => +item.id === +id)?.name;
};
