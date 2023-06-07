import styles from "../styles/LandingPageProperties.module.scss";
import location from "../images/LocationIcon.png";
import floorPlan from "../images/FloorPlanIcon.png";
import bathTubIcon from "../images/BathTubIcon.png";
import doubleBed from "../images/DoubleBedIcon.png";
import { useState } from "react";

const LandingPageProperties = ({ datas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Our Choices of Popular <br />
        <span>Real Estate</span> Properties
      </h1>
      <div className={styles.card}>
        {datas.map(
          (
            {
              gallery,
              propType,
              state,
              street,
              description,
              price,
              measurement,
              bedrooms,
              bathTubs,
            },
            index
          ) => (
            <div key={index}>
              <div className={styles.image}>
                {
                  <div>
                    {gallery.map((img, index) => {
                      console.log(img.url);
                      // return <img key={img.title} src={img.url[index]} alt="/" />;
                      return <h1>{img.url}</h1>;
                    })}
                    {/* <img src={gallery[currentIndex].url} alt="/" /> */}
                    <div>
                      {gallery.map((slide, slideIndex) => (
                        <div
                          key={slideIndex}
                          onClick={() => goToSlide(slideIndex)}
                        >
                          <p>dot</p>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                <p>{propType}</p>
              </div>

              <div className={styles.location}>
                <img src={location} alt="" />
                <p>Appartment - {state} </p>
              </div>
              <div>
                <p className={styles.avenue}>{street}</p>
                <p className={styles.desc}>{description}</p>
              </div>
              <hr className={styles.border} />
              <div className={styles.detail}>
                <p className={styles.price}>{price.toLocaleString()}$</p>
                <div>
                  <div>
                    <img src={floorPlan} alt="" />
                    <p>{measurement}m</p>
                    <span>2</span>
                  </div>
                  <div>
                    <img src={doubleBed} alt="" />
                    <p>{bedrooms}</p>
                  </div>
                  <div>
                    <img src={bathTubIcon} alt="" />
                    <p>{bathTubs}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className={styles.btn}>
        <button type="button">Browse More Properties</button>
      </div>

      {/* <div >
        <img src={slides[currentIndex].url} alt="/" />
        <div >
            <p  onClick={prevSlide}>pre</p>
        </div>
        <div >
            <p  onClick={nextSlide}>nex</p>
        </div>

        <div >
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <p>dot</p>
                </div>
            ))}
        </div>
    </div> */}
    </section>
  );
};

export default LandingPageProperties;
