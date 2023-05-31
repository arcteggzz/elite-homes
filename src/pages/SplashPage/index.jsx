import styles from "./SplashPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useSelector } from "react-redux";

const SplashPage = () => {
  const propertyName = useSelector((state) => state.propertySlice.propertyName);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SplashPage}>
          <h2>SplashPage2</h2>
          <p>{propertyName}</p>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
