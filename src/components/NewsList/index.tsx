import { FunctionComponent, useState } from "react";
import { NewsEntity } from "../../types/newsType";
import styles from "./NewsList.module.scss";
import NewsCard from "../Cards/NewsCard";

interface NewsListProps {
  news: NewsEntity[];
}

const NewsList: FunctionComponent<NewsListProps> = ({ news }) => {
  const [viewAllNews, setViewAllNews] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.newsList}>
        {news?.slice(0, viewAllNews ? news.length : 6)?.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      {news?.length === 0 ? (
        <h2 className={styles.noNews}>No Related News</h2>
      ) : (
        news.length > 6 && (
          <div className={styles.viewAllNews}>
            <button onClick={() => setViewAllNews(!viewAllNews)}>
              {viewAllNews ? "Show Less News" : "View All News"}
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default NewsList;
