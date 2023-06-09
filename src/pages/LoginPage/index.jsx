import styles from "./LoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from =
    location.state?.from?.pathname || "/properties/property-listings";
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { _username, accessToken, userImage, userId } = await login({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ _username, accessToken, userImage, userId }));
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
              <p>Log in with the data you entered during sign up</p>

              <form onSubmit={handleSubmit}>
                <p>{errMsg}</p>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPasword(e.target.value)}
                  required
                />
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
                  <Link to="/home" className={styles.link}>
                    Forgot Password?
                  </Link>
                </div>
                <button className="" type="submit">
                  Login
                </button>
                <p>
                  {"Don't have an account? "}
                  <Link to="/signUp" className={styles.link}>
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
