import styles from "./YourPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import SinglePropertySummary from "../../components/SinglePropertySummary";
import { useGetAllPropertiesSellingQuery } from "../../redux/features/userProperty/userPropertyApiSlice";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const YourPropertyPage = () => {
  const userId = useSelector(selectCurrentUserId);
  const {
    data: allPropertiesSelling,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllPropertiesSellingQuery(userId);

  let content;
  if (isLoading) {
    content = <h3>Loading all your properties...</h3>;
  } else if (isSuccess && allPropertiesSelling?.data?.length < 1) {
    content = <h3>You have not created any properties yet.</h3>;
  } else if (isSuccess && allPropertiesSelling?.data?.length > 0) {
    content = (
      <>
        {allPropertiesSelling?.data?.map((propertyData) => {
          return (
            <>
              <SinglePropertySummary
                key={propertyData.property_name}
                propertyImage={
                  !propertyData.property_other_image_url
                    ? ""
                    : propertyData.property_other_image_url.length < 1
                    ? ""
                    : propertyData.property_other_image_url[0]
                }
                propertyCategory={propertyData.category_id}
                propertyAddress={propertyData.property_address}
                propertyName={propertyData.property_name}
                propertySummary={propertyData.property_description}
                propertyPotentialBuyers={0}
                propertyId={propertyData.id}
                pageMount="Your Property"
              />
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
        <main className={styles.YourPropertyPage}>
          <h1>List Of Properties</h1>
          {content}
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default YourPropertyPage;
