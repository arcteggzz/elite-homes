import styles from "./PropertyListingsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import SinglePropertySummary from "../../components/SinglePropertySummary";
import { useGetAllPropertiesBuyingQuery } from "../../redux/features/userProperty/userPropertyApiSlice";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PropertyListingsPage = () => {
  const userId = useSelector(selectCurrentUserId);
  const {
    data: allPropertiesBuying,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetAllPropertiesBuyingQuery(userId);

  console.log(allPropertiesBuying);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) refetch();

    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;
  if (isLoading) {
    content = <h3>Loading all properties that you have booked...</h3>;
  } else if (isSuccess && allPropertiesBuying?.data?.length < 1) {
    content = <h3>You have not booked any properites yet.</h3>;
  } else if (isSuccess && allPropertiesBuying?.data?.length > 0) {
    content = (
      <>
        {allPropertiesBuying?.data?.map((propertyData) => {
          return (
            <>
              <SinglePropertySummary
                key={propertyData.property_name}
                propertyId={propertyData.property_id}
                propertyAddress={propertyData.property_address}
                propertyCategory={propertyData.property_category}
                propertyImage={
                  !propertyData.property_other_image_url
                    ? ""
                    : propertyData.property_other_image_url.length < 1
                    ? ""
                    : propertyData.property_other_image_url[0]
                }
                propertyName={propertyData.property_name}
                propertySummary={propertyData.property_description}
                pageMount="Property Listings"
              />
              {/* <p>Tega</p> */}
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    content = <h3>Something went wrong. Serverside Error. Reload Browser.</h3>;
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyListingsPage}>
          <h1>List Of Properties</h1>
          {content}
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyListingsPage;
