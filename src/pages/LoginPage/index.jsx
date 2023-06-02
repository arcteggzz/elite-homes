import styles from "./LoginPage.module.scss";
import image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>
          <h1>Elite Homes</h1>
          <div className={styles.LoginContentContainer}>
          <div className={styles.LoginContent}>
            <img src={image} alt="Login" className={styles.LoginImage} />
            <div className={styles.LoginContentB}>
              <h2>
                <span className={styles.Hello}>Hello!</span> Welcome back
              </h2>
              <p className={styles.LoginText}>Log in with the data you entered during sign up</p>
              <form className={styles.LoginForm}>
                <input type="email" placeholder="Email" className={styles.LoginInput} />
                <input type="password" placeholder="Password" className={styles.LoginInput} />
                <div className={styles.LoginRememberMe} >
                  <div className={styles.LoginCheckBox} >
                    <input type="checkbox" />
                    <p>Remember me</p>
                  </div>
                  <p className={styles.FogetPassword}>Forgot Password?</p>
                </div>
                <input type="submit" value="Log In" className={styles.LoginButton}/>
              </form>
              <p className={styles.LoginSignUpText}>Don't have an account? <span>Sign Up</span></p>
            </div>
          </div>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
