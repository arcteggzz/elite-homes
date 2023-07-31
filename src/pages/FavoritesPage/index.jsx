import styles from "./FavoritesPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import SinglePropertySummary from "../../components/SinglePropertySummary";
import { useGetAllFavoritePropertiesQuery } from "../../redux/features/favorites/favoritesApiSlice";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const userId = useSelector(selectCurrentUserId);
  const {
    data: allPropertiesFavorites,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllFavoritePropertiesQuery(userId);

  console.log(allPropertiesFavorites);

  let content;
  if (isLoading) {
    content = <h3>Loading all your favorite properties...</h3>;
  } else if (isSuccess && allPropertiesFavorites?.data?.length < 1) {
    content = <h3>You have not created any properties yet.</h3>;
  } else if (isSuccess && allPropertiesFavorites?.data?.length > 0) {
    content = (
      <>
        {allPropertiesFavorites?.data?.map((propertyData) => {
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
                pageMount="Favorite Page"
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
        <main className={styles.FavoritesPage}>
          <h1>Your Favorites</h1>
          {content}
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default FavoritesPage;
