import styles from "./SignUpPage.module.scss";
// import image from "./SignUpAssets/signUpImage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>
          <nav>
            <Link className={styles.left} to={"/"}>
              {/* <img src={elite_homes_black_icon} alt="elite homes icon" /> */}
            </Link>
          </nav>
          <div>
            {/* <img src={login_image} alt="" /> */}
            <form></form>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
