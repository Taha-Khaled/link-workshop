import { useEffect, useState } from "react";
import Highlights from "../Highlights";
import Navbar from "../Navbar";
import styles from "./Header.module.scss";
import { useSlides } from "../../hooks/useSlides";
import BackgroundShape from "../../icons/BackgroundShape";

const Header = () => {
  const { data, isSuccess, isLoading } = useSlides();

  const [shapeColor, setShapeColor] = useState("");
  useEffect(() => {
    if (isSuccess) setShapeColor(data?.[0].colorCode);
  }, [data, isSuccess]);
  if (isLoading) return <></>;
  return (
    <header className={styles.header}>
      <BackgroundShape className={styles.bgShape} fill={shapeColor} />
      <Navbar />
      <Highlights slides={data!} setShapeColor={setShapeColor} />
    </header>
  );
};

export default Header;
