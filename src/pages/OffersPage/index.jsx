import styles from "./OffersPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertySummary from "./Components/PropertySummary";

const OffersPage = () => {
  const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.OffersPage}>
          <section className={styles.offersList}>
            {mockArray.map((propertyData) => {
              return <PropertySummary key={propertyData} />;
            })}
          </section>

          <div className={styles.btn_container}>
            <button className={styles.view_more_btn}>View More</button>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default OffersPage;
