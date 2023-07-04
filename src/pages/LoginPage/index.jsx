import styles from "./LoginPage.module.scss";
import login_image from "./LoginAssets/loginimage.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../../utils/LoadingScreen";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [accountLoginLoading, setAccountLoginLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/properties/your-property";
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
    } else if (!validateEmail(email)) {
      setErrMsg("Please enter a valid email address. joedoes@example.com");
    } else if (validateEmailIsNotEmpty(password)) {
      setErrMsg("Password Field Cannot be empty.");
    } else {
      setAccountLoginLoading(true);
      try {
        const response = await login({
          email: email.trim(),
          password: password.trim(),
        }).unwrap();
        // console.log(response);
        // toast.success(`Login Successful. Routing to Dashboard.`, {
        //   autoClose: 1800,
        // });
        // setAccountLoginLoading(false);
        if (response.token) {
          toast.success(`Login Successful. Routing to Dashboard.`, {
            autoClose: 1800,
          });
          dispatch(
            setCredentials({
              username: `${response.data.firstName} ${response.data.lastName}`,
              accessToken: response.token,
              userImage: response.data.profilePicture,
              userId: response.data.userId,
              userEmail: response.data.email,
              userPhoneNumber: response.data.phone_number,
            })
          );
          setAccountLoginLoading(false);
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 2000);
        }
      } catch (err) {
        console.log(err);
        setAccountLoginLoading(false);
        setErrMsg("Login Failed.");
        toast.error("Login Failed", {
          autoClose: 3000,
        });
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
                  value={email}
                />
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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

export default LoginPage;
