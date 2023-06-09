import styles from "./YourPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const YourPropertyPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.YourPropertyPage}>YourPropertyPage</section>
      </AnimatedFadeInPage>
    </>
  );
};

export default YourPropertyPage;
