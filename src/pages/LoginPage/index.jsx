import styles from "./LoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../../utils/LoadingScreen";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [accountLoginLoading, setAccountLoginLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from =
    location.state?.from?.pathname || "/properties/property-listings";
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const validateEmail = (_email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(_email);
  };

  const validateEmailIsNotEmpty = (name) => {
    return name.length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmailIsNotEmpty(email)) {
      setErrMsg("Email Field Cannot be empty.");
      return;
    }

    if (!validateEmail(email)) {
      setErrMsg("Please enter a valid email address. joedoes@example.com");
      return;
    }
    if (validateEmailIsNotEmpty(password)) {
      setErrMsg("Password Field Cannot be empty.");
      return;
    }

    setAccountLoginLoading(true);
    try {
      const response = await login({
        email,
        password,
      }).unwrap();
      if (response.token) {
        toast.success(`Login Successful. Routing to Dashboard.`, {
          autoClose: 1800,
        });
        dispatch(
          setCredentials({
            username: response.username,
            accessToken: response.token,
            userImage: response.userImage,
            userId: response.id,
          })
        );
        setAccountLoginLoading(false);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      }
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setAccountLoginLoading(false);
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

  useEffect(() => {
    setErrMsg("");
  }, [password, email]);

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

              <form onSubmit={handleSubmit} id="loginForm">
                <h6 className={styles.errorText} id="errorText">
                  {errMsg}
                </h6>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPasword(e.target.value)}
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
        {accountLoginLoading ? (
          <>
            <LoadingScreen loading={accountLoginLoading} />
          </>
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
