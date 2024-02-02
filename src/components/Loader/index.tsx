import { CSSProperties, FunctionComponent, memo } from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  fullPage?: boolean;
  style?: CSSProperties;
}
const Loader: FunctionComponent<LoaderProps> = memo(({ fullPage, style }) => {
  return (
    <section className={fullPage ? styles.loaderHolder : ""} style={style}>
      <span className={styles.loader} />
    </section>
  );
});

export default Loader;
