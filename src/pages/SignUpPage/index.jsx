import styles from "./SignUpPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>SignUp</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
