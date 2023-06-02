import { useEffect, useRef, useState } from "react";
import styles from "../styles/CarouselImages.module.scss";

//images for next and prev icon
import next_icon from "../images/next_icon.png";
import prev_icon from "../images/prev_icon.png";

//images for carousel
import image_one from "../images/02_Photo - 3.jpg";
import image_two from "../images/02_Photo - 4.jpg";
import image_three from "../images/01_Photo - 7.jpg";
import image_four from "../images/01_Photo - 9.jpg";

const CarouselImages = () => {
  const images = [image_one, image_two, image_three, image_four];
  const [width, setWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [counter, setCounter] = useState(0);
  const imageRef = useRef(null);
  const timerRef = useRef(null);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setWidth(imageRef.current.width);
    }
  };

  const goToPrev = () => {
    const isFirstSlide = counter === 0;
    const newIndex = isFirstSlide ? images.length - 1 : counter - 1;
    setCounter(newIndex);
    setDistance(width * newIndex);
  };

  const goToNext = () => {
    const isLastSlide = counter === images.length - 1;
    const newIndex = isLastSlide ? 0 : counter + 1;
    setCounter(newIndex);
    setDistance(width * newIndex);
  };

  const carousel_Slide_Screen = {
    display: "flex",
    width: "100%",
    transition: "transform ease-in-out 0.4s",
    transform: `translateX(-${distance}px)`,
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  });

  return (
    <>
      <article className={styles.Carousel}>
        <div className={styles.Carousel_Container}>
          <div className={styles.Carousel_Slide}>
            <div
              className={styles.Carousel_Slide_Screen}
              style={carousel_Slide_Screen}
            >
              <img src={images[0]} alt="" />
              <img
                src={images[1]}
                alt=""
                ref={imageRef}
                onLoad={handleImageLoad}
              />
              <img src={images[2]} alt="" />
              <img src={images[3]} alt="" />
              <img src={images[4]} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.prev_btn} onClick={() => goToPrev()}>
            <img src={prev_icon} alt="Previous Button" />
          </div>
          <div className={styles.next_btn} onClick={() => goToNext()}>
            <img src={next_icon} alt="Next Button" />
          </div>
        </div>
      </article>
    </>
  );
};

export default CarouselImages;
