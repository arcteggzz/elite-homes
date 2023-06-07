import styles from "./LandingPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import LandingPageExplore from "./Components/LandingPageExplore";
import LandingPageProperties from "./Components/LandingPageProperties";
import LandingPageOffers from "./Components/LandingPageOffers";
import LandingPageAffordable from "./Components/LandingPageAffordable";
import LandingPageAboutUs from "./Components/LandingPageAboutUs";
import LandingPageClient from "./Components/LandingPageClient";
import LandingPageHeader from "./Components/LandingPageHeader";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingPageHeader />
          <LandingPageProperties />
          <LandingPageOffers />
          <LandingPageExplore />
          <LandingPageAffordable />
          <LandingPageAboutUs />
          <LandingPageClient />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
