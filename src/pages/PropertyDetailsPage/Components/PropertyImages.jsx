import styles from "../styles/PropertyImages.module.scss";
import CarouselImages from "./CarouselImages";

//dummy images for slider
import image_01 from "../images/Rectangle 1201.png";
import image_02 from "../images/Rectangle 1202.png";
import image_03 from "../images/Rectangle 1203.png";
import image_04 from "../images/Rectangle 1204.png";
import image_05 from "../images/Rectangle 1205.png";

const PropertyImages = () => {
  const images = [image_01, image_02, image_03, image_04, image_05];

  const image_container_styles = {
    width: `${100 / images.length}%`,
  };

  return (
    <>
      <section className={styles.PropertyImages}>
        {/* Main Image Slide Reel with next and previous buttons */}
        <div className={styles.Image_Carousel_Parent_Container}>
          <div className={styles.Image_Carousel_Container}>
            <CarouselImages />
          </div>
        </div>

        {/* Secondary Image Slide Reel */}
        <div className={styles.Image_Slider_Container}>
          <section className={styles.slider_container}>
            {images.map((image) => {
              return (
                <div
                  className={styles.image_container}
                  style={image_container_styles}
                  key={image}
                >
                  <img src={image} alt="" />
                </div>
              );
            })}
            {images.map((image) => {
              return (
                <div
                  className={styles.image_container}
                  style={image_container_styles}
                  key={image}
                >
                  <img src={image} alt="" />
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
};

export default PropertyImages;
