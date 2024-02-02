import { useQuery } from "@tanstack/react-query";
import { mockedSolutions } from "./_mockedSolutions";
import { solutionsType } from "../../types/solutionsType";

const getSolutions = async () => {
  const solutionsData = new Promise<solutionsType>((resolve) => {
    resolve(mockedSolutions);
  }).then((data) => data);
  return solutionsData;
};
export const useSolutions = () => {
  return useQuery<solutionsType>({
    queryKey: [`getSolutions`],
    queryFn: getSolutions,
  });
};
