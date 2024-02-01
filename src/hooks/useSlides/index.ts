import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SlidesType } from "../../types/slidesType";

const getSlides = async (): Promise<SlidesType["slides"]> => {
  const response = await axios.get<SlidesType>(
    "https://api.npoint.io/fee177346e7875554413"
  );

  const sortedSlides = response?.data?.slides.sort((a, b) => a.order - b.order);

  return sortedSlides.map((item, index) => ({
    ...item,
    imgUrl: `./Images/Image${index}.png`,
    colorCode: `#${item.colorCode}`,
  }));
};
export const useSlides = () => {
  return useQuery<SlidesType["slides"]>({
    queryKey: [`getSlides`],
    queryFn: getSlides,
  });
};
