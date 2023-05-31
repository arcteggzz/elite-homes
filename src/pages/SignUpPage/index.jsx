import styles from "./SignUpPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const SignUpPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SignUp}>SignUpPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SignUpPage;
