import styles from "./LoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>
          <div>
            <img src={login_image} alt="" />
            <form></form>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
