import styles from "../styles/LandingPageAboutUs.module.scss";
import img from "../images/AboutUs.png";
import mark from "../images/MarkIcon.png";

const LandingPageAboutUs = () => {
  return (
    <section className={styles.flex}>
      <div>
        <img src={img} alt="" />
      </div>
      <div className={styles.backgroundColor}>
        <h1>
          What We Are
          <br />
          All About
        </h1>
        <p className={styles.lgText}>
          Elite-Home is a property upload and check platform that allow owner
          upload their properties on the platform and allow users explore
          through the list of verified properties, apartments from the comfort of
          your home.
        </p>

        <div className={styles.container}>
          <div>
            <div className={styles.rounded}>
              <img src={mark} alt="" />
            </div>

            <p className={styles.text}>Quite and Peaceful Location</p>
          </div>
          <div>
            <div className={styles.rounded}>
              <img src={mark} alt="" />
            </div>

            <p className={styles.text}>Lots of Parking Space</p>
          </div>

          <div>
            <div className={styles.rounded}>
              <img src={mark} alt="" />
            </div>

            <p className={styles.text}>
              Shopping, Fitness and Hospital Center location Area
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageAboutUs;
