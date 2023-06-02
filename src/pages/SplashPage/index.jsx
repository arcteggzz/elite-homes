import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SplashPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.SplashPage}>
          <h2>Elite Homes</h2>
          <p>Real Estate Innovation by Zojatech</p>
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
