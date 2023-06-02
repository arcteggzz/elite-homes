import styles from "./PropertyDetailsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertyHeader from "./Components/PropertyHeader";
import PropertyImages from "./Components/PropertyImages";

const PropertyDetailsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyDetailsPage}>
          <PropertyHeader />
          <PropertyImages />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyDetailsPage;
