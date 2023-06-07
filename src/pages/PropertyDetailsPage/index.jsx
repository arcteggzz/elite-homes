import styles from "./PropertyDetailsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertyHeader from "./Components/PropertyHeader";
import PropertyImages from "./Components/PropertyImages";
import PropertyDetails from "./Components/PropertyDetails";
import PropertySchedule from "./Components/PropertySchedule";

const PropertyDetailsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyDetailsPage}>
          <PropertyHeader />
          <PropertyImages />
          <section className={styles.Details_container}>
            <PropertyDetails />
            <PropertySchedule />
          </section>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyDetailsPage;
