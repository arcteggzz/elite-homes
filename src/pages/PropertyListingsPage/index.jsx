import styles from "./PropertyListingsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useSelector } from "react-redux";
import {
  selectCurrentUserName,
  selectCurrentAccessToken,
} from "../../redux/features/auth/authSlice";
import PropertyList from "./component/PropertyList";

import img from "./images/propertyA.png";

const listOfProperty = [
  {
    property: img,
    title: "somolu",
  },
  {
    property: img,
    title: "somolu",
  },
  {
    property: img,
    title: "somolu",
  },
];

const PropertyListingsPage = () => {
  const userName = useSelector(selectCurrentUserName);
  const userAccessToken = useSelector(selectCurrentAccessToken);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyListingsPage}>
          <h1>{userName}</h1>
          <h1>{userAccessToken}</h1>
          <section className={styles.container}>
            <h1>List Of Properties</h1>
            <PropertyList listOfProperty={listOfProperty} />
          </section>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyListingsPage;
