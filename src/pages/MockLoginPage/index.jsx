import styles from "./MockLoginPage.module.scss";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";

import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const MockLoginPage = () => {
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
      const { _username, accessToken } = await login({
        email,
        password,
      }).unwrap();
      console.log({ _username, accessToken });
      dispatch(setCredentials({ _username, accessToken }));
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
        <main className={styles.fakeLoginPage}>
          <p>{errMsg}</p>

          <form className="" onSubmit={handleSubmit}>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password" className="">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPasword(e.target.value)}
              required
            />

            <button className="" type="submit">
              Sign in
            </button>
          </form>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default MockLoginPage;
