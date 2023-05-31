import styles from "./PropertyListingsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const PropertyListingsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyListingsPage}>
          PropertyListingsPage
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyListingsPage;
