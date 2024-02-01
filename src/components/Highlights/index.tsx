import styles from "./Highlights.module.scss";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { SlidesType } from "../../types/slidesType";

interface HighlightsProps extends SlidesType {
  setShapeColor: Dispatch<SetStateAction<string>>;
}

const Highlights: FunctionComponent<HighlightsProps> = ({
  slides,
  setShapeColor,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const CircleHolder = () => {
    return (
      <div className={styles.circlesHolder}>
        {slides?.map((slide) => (
          <div
            className={styles.circle}
            key={slide.id}
            add-border={
              slide?.colorCode === slides[slideIndex]?.colorCode
                ? "false"
                : "true"
            }
            style={{ backgroundColor: slide.colorCode }}
          />
        ))}
      </div>
    );
  };
  const handelSlideIndex = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
      setShapeColor(slides[0].colorCode);
    } else {
      setSlideIndex(slideIndex + 1);
      setShapeColor(slides[slideIndex + 1].colorCode);
    }
  };
  return (
    <div>
      <section
        className={`container ${styles.container}`}
        onClick={handelSlideIndex}
      >
        {slides?.map((slide, index) => (
          <div
            className={styles.sliderItem}
            is-shown={slideIndex === index ? "true" : "false"}
            key={slide.id}
          >
            <div className={styles.content}>
              <h3
                className={styles.category}
                style={{ color: slide.colorCode }}
              >
                {slide.category}
              </h3>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.brief}>{slide.brief}</p>
              <div className={styles.buttonsHolder}>
                <button className={styles.findMore}>Find out more</button>
                <button className={styles.demo}>
                  <img src="./Images/Play button.png" alt="play demo" />
                  Play Demo
                </button>
              </div>
              <CircleHolder />
            </div>
            <img
              className={styles.sliderImg}
              src={slide.imgUrl}
              alt={slide.category}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
export default Highlights;
