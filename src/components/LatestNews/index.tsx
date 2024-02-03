import { FunctionComponent, useEffect, useState } from "react";
import { useNewsList } from "../../hooks/useNewsList";
import Loader from "../Loader";
import styles from "./LatestNews.module.scss";
import BackgroundCircles from "../../icons/BackgroundCircles";
import CategoriesTabs from "../CategoriesTabs";
import { NewsType } from "../../types/newsType";
import NewsList from "../NewsList";
import { useCategories } from "../../hooks/useCategories";

const LatestNews: FunctionComponent = () => {
  const [selectedCategoryID, setSelectedCategoryID] = useState<string>("");
  const [news, setNews] = useState<NewsType["News"]>([]);
  const {
    data: newsData,
    isLoading: isNewsLoading,
    isSuccess: isNewsSuccess,
  } = useNewsList();
  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    isSuccess: isCategoriesSuccess,
  } = useCategories();

  useEffect(() => {
    if (isCategoriesSuccess) setSelectedCategoryID(categoriesData?.[0].id);
  }, [categoriesData, isCategoriesSuccess]);

  useEffect(() => {
    if (isNewsSuccess) {
      if (selectedCategoryID) {
        const filteredList = newsData?.filter(
          (item) => +item.categoryID === +selectedCategoryID
        );
        setNews(filteredList);
      } else setNews(newsData.filter((item) => item.showOnHomepage === "yes"));
    }
  }, [newsData, isNewsSuccess, selectedCategoryID]);

  if (isNewsLoading || isCategoriesLoading) return <Loader fullPage />;

  return (
    <section className={styles.container}>
      <BackgroundCircles
        width={397.19}
        height={389.45}
        className={styles.backgroundCircles}
      />
      <div className={styles.headline}>
        <h3>Media</h3>
        <h1>Top News</h1>
      </div>
      <CategoriesTabs
        setSelectedCategoryID={setSelectedCategoryID}
        selectedCategoryID={selectedCategoryID}
        categories={categoriesData ?? []}
      />
      <NewsList news={news} />
    </section>
  );
};

export default LatestNews;
