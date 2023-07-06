import styles from "../styles/LandingPageProperties.module.scss";
import PropertySummary from "../../OffersPage/Components/PropertySummary";
import { useGetAllPropertiesQuery } from "../../../redux/features/property/propertyApiSlice";
import { Link } from "react-router-dom";

const LandingPageProperties = () => {
  const {
    data: allProperties,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllPropertiesQuery();

  let content;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {allProperties?.data?.slice(0, 12).map((propertyData, index) => {
          return (
            <>
              <PropertySummary
                key={`${propertyData.property_name}${index}`}
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
    content = <h3>Something went wrong. Can not display offers right now.</h3>;
  }

  return (
    <section className={styles.LandingPageProperties}>
      <h1 className={styles.title}>
        Our Choices of Popular <br />
        <span>Real Estate</span> Properties
      </h1>

      <div className={styles.Property_List}>{content}</div>

      <div className={styles.btn_container}>
        <Link to={`/offers`} className={styles.view_more_btn}>
          Browse More Properties
        </Link>
      </div>
    </section>
  );
};

export default LandingPageProperties;
