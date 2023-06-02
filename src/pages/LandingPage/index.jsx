import styles from "./LandingPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import LandingPageExplore from "./Components/LandingPageExplore";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingPageExplore />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
