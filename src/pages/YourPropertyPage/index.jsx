import styles from "./YourPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import SinglePropertySummary from "../../components/SinglePropertySummary";

const YourPropertyPage = () => {
  const isLoading = false;
  const list = [];

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.YourPropertyPage}>
          <h1>List Of Properties</h1>
          {isLoading ? (
            <>
              <h2>Loading...</h2>
            </>
          ) : list.length < 1 ? (
            <>
              <h3>You have not created any properties yet.</h3>
            </>
          ) : (
            <>
              <SinglePropertySummary
                propertyId="1"
                propertyAddress={"Lagos"}
                propertyCategory={2}
                propertyImage={
                  "https://res.cloudinary.com/dhf9w2zpm/image/upload/v1686868514/jdxniwfixlb0aud8zlol.jpg"
                }
                propertyName={"Ikoyi Lagos"}
                propertySummary={
                  "Own this magnificent building and experience the epitome of luxury and grandeur."
                }
                pageMount="Your Property"
                propertyPotentialBuyers={23}
              />
            </>
          )}
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default YourPropertyPage;
