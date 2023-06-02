import styles from "./SignUpPage.module.scss";
import image from "./SignUpAssets/signUpImage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SignUpPage}>
          <h1>Elite Homes</h1>
         <div className={styles.SignUpContentContainer}>
         <div className={styles.SignUpContent}>
            <img src={image} alt="Login" className={styles.SignUpImage} />
            <div className={styles.SignUpContentB}>
              <p className={styles.welcome}>Welcome to</p>
              <h2>
                Elite Homes
              </h2>
              <p className={styles.SignUpText}>Let's get you started, input your details below.</p>
              <form className={styles.SignUpForm}>
                <input type="email" placeholder="Email" className={styles.SignUpInput} />
                <input type="password" placeholder="Password" className={styles.SignUpInput} />
                <input type="password" placeholder="Confirm Password" className={styles.SignUpInput} />
                <input type="tel" placeholder="Phone number" className={styles.SignUpInput} />
                <input type="submit" value="Continue" className={styles.SignUpButton}/>
              </form>
              <p className={styles.SignUpLoginText}>Already have an account? <span>Log In</span></p>
            </div>
          </div>
         </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
