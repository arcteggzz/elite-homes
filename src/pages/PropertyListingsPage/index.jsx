import styles from "./PropertyListingsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useSelector } from "react-redux";
import {
  selectCurrentUserName,
  selectCurrentAccessToken,
} from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const PropertyListingsPage = () => {
  const userName = useSelector(selectCurrentUserName);
  const userAccessToken = useSelector(selectCurrentAccessToken);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PropertyListingsPage}>
          <h1>{userName}</h1>
          <h1>{userAccessToken}</h1>
          <br />
          <Link to="/MockProtectedPage">MockProtectedPage</Link>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PropertyListingsPage;
