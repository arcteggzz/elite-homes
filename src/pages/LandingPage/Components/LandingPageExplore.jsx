import styles from "../styles/LandingPageExplore.module.scss";
import img1 from "../images/Explore1.png";
import img2 from "../images/Explore2.png";
import img3 from "../images/Explore3.png";
import img4 from "../images/Explore4.png";
import img5 from "../images/Explore5.png";
import img6 from "../images/Explore6.png";

const LandingPageExplore = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Explore Apartment Types</h1>
      <p className={styles.subTitle}>Get Some Inspiration From 1800+ Homes</p>

      <div>
        <div className={styles.card}>
          <div className={styles.lgImg}>
            <img src={img1} alt="" loading="lazy" />
          </div>
          <div className={styles.display}>
            <div>
              <img src={img2} alt="" loading="lazy" />
            </div>
            <div>
              <img src={img3} alt="" loading="lazy" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.display}>
            <div>
              <img src={img4} alt="" loading="lazy" />
            </div>
            <div>
              <img src={img5} alt="" loading="lazy" />
            </div>
          </div>
          <div className={styles.lgImg}>
            <img src={img6} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageExplore;
