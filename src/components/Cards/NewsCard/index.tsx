import { FunctionComponent, memo } from "react";
import { NewsEntity } from "../../../types/newsType";
import styles from "./NewsCard.module.scss";
import DateIcon from "../../../icons/DateIcon";
import { useCategory } from "../../../hooks/useCategories";
import LikeIcon from "../../../icons/LikeIcon";
import ShareIcon from "../../../icons/ShareIcon";

interface NewsCardProps extends NewsEntity {}

const dateFormatter = (date: string) => {
  return new Date(date).toUTCString().slice(0, -13).replace(",", " ");
};

const NewsCard: FunctionComponent<NewsCardProps> = ({
  title,
  categoryID,
  urlToImage,
  publishedDate,
}) => {
  const categoryName = useCategory(categoryID);
  return (
    <div className={styles.container}>
      <div className={styles.imgHolder}>
        <img src={urlToImage} alt={" "} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon width={18.8} height={20.73} />
          <h3>{dateFormatter(publishedDate)}</h3>
        </div>
        <div className={styles.tag}>
          <p>{categoryName}</p>
          <div className={styles.icons}>
            <LikeIcon width={16.81} height={15.85} />
            <ShareIcon width={17.4} height={19.21} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(NewsCard);
