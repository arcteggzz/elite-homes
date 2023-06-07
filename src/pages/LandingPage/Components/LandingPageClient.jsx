import styles from "../styles/LandingPageClient.module.scss";
import img from "../images/Client.png";
import img1 from "../images/client1.png";
import img2 from "../images/client2.png";
import img3 from "../images/client3.png";
import Quote from "../images/QuoteIcon.png";
// import mark from "../images/MarkIcon.png";

const LandingPageClient = () => {
  return (
    <section>
      <div className={styles.screen}>
        <img src={img} alt="" />
        <h1>What our clients say</h1>
        <div className={styles.backgroundColor}></div>
        
        <div className={styles.container}>
          <div className={styles.testimonial}>
            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.profileBlog}>
                  <img src={img2} alt="" className={styles.profileImg} />
                  <div className={styles.text}>
                    <h3>Somebodyy</h3>
                    <p>Marketing Coordinator</p>
                  </div>
                </div>
                <img src={Quote} alt="" className={styles.quote}/>
              </div>
              <p className={styles.lgText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, eius magni. Impedit a quo excepturi, totam dolor eos
                voluptas totam dolor eos voluptas error? Fugit molestias eos
                quidem cupiditate ratione sunt harum!
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.profileBlog}>
                  <img src={img1} alt="" className={styles.profileImg} />
                  <div className={styles.text}>
                    <h3>Somebodyy</h3>
                    <p>Marketing Coordinator</p>
                  </div>
                </div>
                <img src={Quote} alt="" className={styles.quote}/>
              </div>
              <p className={styles.lgText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, eius magni. Impedit a quo excepturi, totam dolor eos
                voluptas totam dolor eos voluptas error? Fugit molestias eos
                quidem cupiditate ratione sunt harum!
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.profileBlog}>
                  <img src={img3} alt="" className={styles.profileImg} />
                  <div className={styles.text}>
                    <h3>Somebodyy</h3>
                    <p>Marketing Coordinator</p>
                  </div>
                </div>
                <img src={Quote} alt="" className={styles.quote}/>
              </div>
              <p className={styles.lgText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, eius magni. Impedit a quo excepturi, totam dolor eos
                voluptas totam dolor eos voluptas error? Fugit molestias eos
                quidem cupiditate ratione sunt harum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageClient;
