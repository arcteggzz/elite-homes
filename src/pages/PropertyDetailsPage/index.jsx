import styles from "./PropertyDetailsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertyHeader from "./Components/PropertyHeader";
import PropertyImages from "./Components/PropertyImages";
import PropertyDetails from "./Components/PropertyDetails";
import PropertySchedule from "./Components/PropertySchedule";
import PropertyReviews from "./Components/PropertyReviews";
import AddReview from "./Components/AddReview";
import { useParams } from "react-router-dom";
import { useGetSinglePropertyQuery } from "../../redux/features/property/propertyApiSlice";
import { useGetAllPropertyReviewsQuery } from "../../redux/features/reviews/reviewsApiSlice";
import { useState } from "react";

const PropertyDetailsPage = () => {
  const params = useParams();
  const propertyId = params.id;

  const {
    data: propertyDetails,
    isLoading,
    isSuccess,
    isError,
  } = useGetSinglePropertyQuery(propertyId);

  const {
    data: reviewsList,
    isLoading: reviewIsLoading,
    isSuccess: reviewIsSuccess,
    isError: reviewIsError,
  } = useGetAllPropertyReviewsQuery(propertyId);

  // console.log(reviewsList);

  // const reviews_List = [
  //   {
  //     ownerImage: "images",
  //     ownerComment:
  //       "The PersistGate component ensures that the rehydration process is complete before rendering your main application (App) component",
  //     first_name: "Tega",
  //     last_name: "Esedere",
  //   },
  //   {
  //     ownerImage: "images",
  //     ownerComment:
  //       "comment import PropertyReviews from ./Components/PropertyReviews",
  //     first_name: "Jite",
  //     last_name: "Okpani",
  //   },
  //   {
  //     ownerImage: "images",
  //     ownerComment:
  //       "The PersistGate component ensures that the rehydration process is complete before rendering your main application (App) component",
  //     first_name: "Tega",
  //     last_name: "Esedere",
  //   },
  //   {
  //     ownerImage: "images",
  //     ownerComment:
  //       "comment import PropertyReviews from ./Components/PropertyReviews",
  //     first_name: "Jite",
  //     last_name: "Okpani",
  //   },
  //   {
  //     ownerImage: "images",
  //     ownerComment:
  //       "The PersistGate component ensures that the rehydration process is complete before rendering your main application (App) component",
  //     first_name: "Tega",
  //     last_name: "Esedere",
  //   },
  //   {
  //     ownerImage: "images",
  //     ownerComment:
  //       "comment import PropertyReviews from ./Components/PropertyReviews",
  //     first_name: "Jite",
  //     last_name: "Okpani",
  //   },
  // ];

  const [reloadPropertyReviews, setReloadPropertyReviews] = useState(false);

  const handlePropertyReviewsReload = () => {
    setReloadPropertyReviews(true); // Trigger the reload by updating the state
  };

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
        <PropertyImages
          propertyOtherImages={propertyDetails.data.property_other_image_url}
          propertyFloorPlan={propertyDetails.data.property_plan_image_url}
        />
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
            propertyId={+propertyDetails.data.id}
          />
        </section>

        <section className={styles.Review_container}>
          <PropertyReviews
            propertyReviews={reviewsList?.data}
            reviewIsError={reviewIsError}
            reviewIsSuccess={reviewIsSuccess}
            reviewIsLoading={reviewIsLoading}
            reload={reloadPropertyReviews}
          />
          <AddReview
            propertyId={+propertyDetails.data.id}
            onReloadPropertyReviews={handlePropertyReviewsReload}
          />
        </section>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h3>Can not fetch details of Property right now.</h3>
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
