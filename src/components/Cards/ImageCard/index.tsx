import { FunctionComponent } from "react";
import styles from "./ImageCard.module.scss";
import RightArrow from "../../../icons/RightArrow";
interface ImageCardProps {
  imgUrl: string;
  title: string;
  id: string;
}
const ImageCard: FunctionComponent<ImageCardProps> = ({
  id,
  imgUrl,
  title,
}) => {
  return (
    <div className={styles.card} key={id}>
      <img className={styles.cardImg} src={imgUrl} alt={title} />
      <h1 className={styles.outlineText}>{title}</h1>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.btn}>
        <RightArrow width={18.31} height={12.2} />
        <span>Read more</span>
      </button>
    </div>
  );
};
export default ImageCard;
