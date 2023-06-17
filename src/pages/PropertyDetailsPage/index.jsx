import styles from "./PropertyDetailsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertyHeader from "./Components/PropertyHeader";
import PropertyImages from "./Components/PropertyImages";
import PropertyDetails from "./Components/PropertyDetails";
import PropertySchedule from "./Components/PropertySchedule";
import { useLocation } from "react-router-dom";
import { useGetSinglePropertyQuery } from "../../redux/features/property/propertyApiSlice";

const PropertyDetailsPage = () => {
  const location = useLocation();
  const propertyIdentifier =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  const {
    data: propertyDetails,
    isLoading,
    isSuccess,
    error,
  } = useGetSinglePropertyQuery(propertyIdentifier);

  let content;
  if (isLoading) {
    content = (
      <>
        <h3>Loading Details of Property...</h3>
      </>
    );
  } else if (isSuccess) {
    content = (
      <>
        <PropertyHeader
          propertyId={propertyDetails.data.id}
          propertyCategory={propertyDetails.data.category_id}
          propertyName={propertyDetails.data.property_name}
          propertyPrice={propertyDetails.data.property_price}
        />
        <PropertyImages />
        <section className={styles.Details_container}>
          <PropertyDetails
            propertyAddress={propertyDetails.data.property_address}
            propertyBathroomNumber={propertyDetails.data.property_toilet_number}
            propertyBedroomNumber={propertyDetails.data.property_bedroom_number}
            propertyDescription={propertyDetails.data.property_description}
            propertyFloorArea={propertyDetails.data.property_total_floor_area}
            propertyFloorPlanImage={
              propertyDetails.data.property_plan_image_url
            }
          />
          <PropertySchedule
            ownerEmail={propertyDetails.data.property_owner.email}
            ownerId={propertyDetails.data.property_owner.user_id}
            ownerName={propertyDetails.data.property_owner.full_name}
            ownerPhoneNumber={propertyDetails.data.property_owner.phone_number}
            ownerImage={propertyDetails.data.property_owner.profile_picture}
          />
        </section>
      </>
    );
  } else if (error) {
    content = (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyDetailsPage}>{content}</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyDetailsPage;
