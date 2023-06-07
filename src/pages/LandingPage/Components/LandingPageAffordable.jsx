import styles from "../styles/LandingPageAffordable.module.scss";
import img from "../images/StarIcon.png";
import img1 from "../images/Afford1.png";
import img2 from "../images/Afford2.png";
import img3 from "../images/Afford3.png";

const LandingPageAffordable = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Get <span>Affordable Apartments</span> With <br /> Efficient Pricing
      </h1>
      <div className={styles.underline}>
        <div className={styles.horizontalRule}></div>
        <div className={styles.box}></div>
        <div className={styles.greyBox}></div>
        <div className={styles.box}></div>
        <div className={styles.horizontalRule}></div>
      </div>

      <div className={styles.grid}>
        <div className={styles.leftGrid}>
          <div>
            <div>
              <img src={img} alt="" />
            </div>
            <div className={styles.text}>
              <h2>For Rent</h2>
              <p>
                Only 10% service fee will be charged after preferred apartment
                has been found
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={img} alt="" />
            </div>
            <div className={styles.text}>
              <h2>Management Service</h2>
              <p>
                Only 10% service fee will be charged from tenants for apartment
                management service
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={img} alt="" />
            </div>
            <div className={styles.text}>
              <h2>Property Owners</h2>
              <p>
                Only 30% service fee will be charged of their rent fee for
                effective management of the house activities
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightGrid}>
          <div className={styles.positionMain}>
            <img src={img1} alt="" className={styles.img}/>
          </div>
          <div className={styles.positionTop}>
            <img src={img2} alt="" />
          </div>
          <div className={styles.positionBottom}>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageAffordable;
