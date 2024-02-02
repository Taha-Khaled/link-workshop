import { useSolutions } from "../../hooks/useSolutions";
import ImageCard from "../Cards/ImageCard";
import styles from "./ThingsWeDo.module.scss";
const ThingsWeDo = () => {
  const { data } = useSolutions();
  console.log(data);
  return (
    <section className={styles.container}>
      <h2 className={styles.bgText}>Things We Do</h2>
      <div className={styles.content}>
        <div className={styles.cardHolder}>
          {data?.items?.map((item) => (
            <ImageCard {...item} key={item.id} />
          ))}
        </div>
        <div className={styles.infoHolder}>
          <div className={styles.bgShape} />
          <div className={styles.info}>
            <h1>{data?.title}</h1>
            <p>{data?.brief}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThingsWeDo;
