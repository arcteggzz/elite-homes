import styles from "../styles/LandingPageOffers.module.scss";
import img1 from "../images/modernHouseIcon.png";
import img2 from "../images/call-forwardingIcon.png";
import img3 from "../images/houseIcon.png";

const LandingPageOffers = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Why choose <span>elite homes</span>
      </h1>
      <p className={styles.elite}>
        Elite-Home offers owners to upload and check their properties, allowing
        consumers to view list of confirmed homes and apartments from the
        comfort of their own homes.
      </p>

      <div className={styles.card}>
        <div className={styles.container}>
          <div>
            <img src={img1} alt="" />
          </div>
          <p className={styles.offerType}>Property Management</p>
          <p className={styles.offerSummary}>
            We will provide the Property owner with a comprehensive property
            management solution
          </p>
        </div>

        <div className={styles.container}>
          <div>
            <img src={img2} alt="" />
          </div>
          <p className={styles.offerType}>Direct Contact</p>
          <p className={styles.offerSummary}>
            It connects customers directly to property owners and enables them
            to rent apartments of their choice
          </p>
        </div>
        <div className={styles.container}>
          <div>
            <img src={img3} alt="" />
          </div>
          <p className={styles.offerType}>Viewing without Agent</p>
          <p className={styles.offerSummary}>
            With the introduction of key Sensor feature tha will notify owners
            of the client visit for survey and after survey
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPageOffers;
