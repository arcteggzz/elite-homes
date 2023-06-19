import styles from "./OffersPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertySummary from "./Components/PropertySummary";
import { useGetAllPropertiesQuery } from "../../redux/features/property/propertyApiSlice";
// import dummyImage from "./images/dummy_property.png";

const OffersPage = () => {
  const {
    data: allProperties,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPropertiesQuery();

  let content;
  if (isLoading) {
    content = <h3>Loading available offers for you...</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {allProperties?.data?.map((propertyData) => {
          return (
            <>
              <PropertySummary
                key={propertyData.property_name}
                propertyId={propertyData.id}
                propertyImage={propertyData.property_other_image_url[0]}
                bathroomNumber={propertyData.property_toilet_number}
                bedroomNumber={propertyData.property_bedroom_number}
                propertyAddress={propertyData.property_address}
                propertyCategory={propertyData.category_id}
                propertyFloorArea={propertyData.property_total_floor_area}
                propertyName={propertyData.property_name}
                propertyPrice={propertyData.property_price}
                propertySummary={propertyData.property_description}
              />
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    content = <h3>{error}</h3>;
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.OffersPage}>
          <section className={styles.offersList}>{content}</section>

          <div className={styles.btn_container}>
            <button className={styles.view_more_btn}>View More</button>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default OffersPage;
