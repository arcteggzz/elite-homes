import styles from "./LoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { Link } from "react-router-dom";
import elite_homes_black_icon from "../../components/Navbar/images/elite_homes_black_icon.png";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>
          <nav>
            <Link className={styles.left} to={"/"}>
              <img src={elite_homes_black_icon} alt="elite homes icon" />
            </Link>
          </nav>
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
