import styles from "./PropertyDetailsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PropertyHeader from "./Components/PropertyHeader";
import PropertyImages from "./Components/PropertyImages";
import PropertyDetails from "./Components/PropertyDetails";
import PropertySchedule from "./Components/PropertySchedule";
// import { useLocation } from "react-router-dom";
// import { useGetSinglePropertyQuery } from "../../redux/features/property/propertyApiSlice";

const PropertyDetailsPage = () => {
  // const location = useLocation();
  // const propertyId =
  //   location.pathname.split("/")[location.pathname.split("/").length - 1];
  // const {
  //   data: propertyDetails,
  //   isLoading,
  //   isSuccess,
  //   error,
  // } = useGetSinglePropertyQuery(propertyId);

  // let content;
  // if (isLoading) {
  //   content = (
  //     <>
  //       <p>Loading...</p>
  //     </>
  //   );
  // } else if (isSuccess) {
  //   content = (
  //     <>
  //       <PropertyHeader />
  //       <PropertyImages />
  //       <section className={styles.Details_container}>
  //         <PropertyDetails />
  //         <PropertySchedule />
  //       </section>
  //     </>
  //   );
  // } else if (error) {
  //   content = (
  //     <>
  //       <p>{error}</p>
  //     </>
  //   );
  // }

  let content = (
    <>
      <PropertyHeader />
      <PropertyImages />
      <section className={styles.Details_container}>
        <PropertyDetails />
        <PropertySchedule />
      </section>
    </>
  );

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyDetailsPage}>{content}</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyDetailsPage;
