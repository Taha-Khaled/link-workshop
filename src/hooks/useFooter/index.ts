import { useQuery } from "@tanstack/react-query";
import { mockedFooter } from "./_mockedFooter";
import { footerType } from "../../types/footerType";

const getFooter = async () => {
  const solutionsData = new Promise<footerType>((resolve) => {
    resolve(mockedFooter);
  }).then((data) => data);
  return solutionsData;
};
export const useFooter = () => {
  return useQuery<footerType>({
    queryKey: [`getFooter`],
    queryFn: getFooter,
  });
};
