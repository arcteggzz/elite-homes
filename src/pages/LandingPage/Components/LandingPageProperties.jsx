import styles from "../styles/LandingPageProperties.module.scss";
import PropertySummary from "../../OffersPage/Components/PropertySummary";
import { useGetAllPropertiesQuery } from "../../../redux/features/property/propertyApiSlice";
// import dummyImage from "../../OffersPage/images/dummy_property.png";

const LandingPageProperties = () => {
  const {
    data: allProperties,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPropertiesQuery();

  let content;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {allProperties.data.map((propertyData) => {
          return (
            <>
              <PropertySummary
                key={propertyData.id}
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
    <section className={styles.LandingPageProperties}>
      <h1 className={styles.title}>
        Our Choices of Popular <br />
        <span>Real Estate</span> Properties
      </h1>

      <div className={styles.Property_List}>{content}</div>

      <div className={styles.btn_container}>
        <button className={styles.view_more_btn}>Browse More Properties</button>
      </div>
    </section>
  );
};

export default LandingPageProperties;
