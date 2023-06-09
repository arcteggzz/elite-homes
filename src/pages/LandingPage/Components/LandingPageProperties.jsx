import styles from "../styles/LandingPageProperties.module.scss";
import PropertySummary from "../../OffersPage/Components/PropertySummary";

const LandingPageProperties = () => {
  const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className={styles.LandingPageProperties}>
      <h1 className={styles.title}>
        Our Choices of Popular <br />
        <span>Real Estate</span> Properties
      </h1>

      <div className={styles.Property_List}>
        {mockArray.map((propertyData) => {
          return <PropertySummary key={propertyData} />;
        })}
      </div>

      <div className={styles.btn_container}>
        <button className={styles.view_more_btn}>Browse More Properties</button>
      </div>
    </section>
  );
};

export default LandingPageProperties;
