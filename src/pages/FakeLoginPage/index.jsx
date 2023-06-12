import styles from "./FakeLoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../../utils/LoadingScreen";

const FakeLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [accountLoginLoading, setAccountLoginLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from =
    location.state?.from?.pathname || "/properties/property-listings";
  const dispatch = useDispatch();

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

    setTimeout(() => {
      if (
        password === "zojatechDevTeam" ||
        email === "zojatechDevTeam@zojatech.com"
      ) {
        toast.success(`Login Successful. Routing to Dashboard.`, {
          autoClose: 1800,
        });
        dispatch(
          setCredentials({
            username: `ZojaTech Dev Team`,
            accessToken: `eytbh_false_token`,
            userImage: null,
            userId: `false user Id`,
          })
        );
        setAccountLoginLoading(false);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1800);
      } else {
        toast.error(`Username and password mismatch!.`, {
          autoClose: 1800,
        });
        setAccountLoginLoading(false);
        setErrMsg("Username and password mismatch!.");
        setPasword("");
      }
    }, 2100);
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
              <p>Fake Login Page to test Authenticated Pages</p>
              <p>Email:- zojatechDevTeam@zojatech.com</p>
              <p>Password:- zojatechDevTeam</p>

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
                  value={email}
                />
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPasword(e.target.value)}
                  value={password}
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

export default FakeLoginPage;
