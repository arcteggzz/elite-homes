import styles from "./LoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.container}>
          <div className={styles.LoginPage}>
            <div className={styles.sm}>
              <img src={login_image} alt="" className={styles.loginImage} />
            </div>
            <div className={styles.text}>
              <h1>Elite Homes</h1>
              <h3>
                <span>Hello!</span> Welcome back
              </h3>
              <p>Loging in with the data you entered during sign up</p>

              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <div className={styles.split}>
                  <div>
                    <input
                      type="checkbox"
                      name="Remember me"
                      value="Remember me"
                    />
                    <label htmlFor="Remember me">Remember me</label>
                    <br></br>
                  </div>
                  <Link to="/" className={styles.link}>
                    Forget Password?
                  </Link>
                </div>
                <button>Login</button>
                <p>
                  Don't have an account?{" "}
                  <Link to="/" className={styles.link}>
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
