import styles from "./Navbar.module.scss";
import elite_homes_black_icon from "./images/elite_homes_black_icon.png";
// import elite_homes_white_icon from "./images/elite_homes_white_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import sign_in_black_icon from "./images/sign_in_black.png";
import sign_in_white_icon from "./images/sign_in_white.png";
import placeholder_avatar from "./images/placeholder_avatar.png";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentUserName,
  selectCurrentUserImage,
} from "../../redux/features/auth/authSlice";
import { resetCredentials } from "../../redux/features/auth/authSlice";
import { useLogoutMutation } from "../../redux/features/auth/authApiSlice";

export default function Navbar({ isAuthenticated, isHomepageNavbar }) {
  const currentUser = useSelector(selectCurrentUserName);
  const currentUserImage = useSelector(selectCurrentUserImage);
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const navElements = [
    { link: "/home", name: "Home" },
    { link: "/offers", name: "Offers" },
    { link: "/properties/property-listings", name: "Properties" },
  ];

  const Navbar_styles = {
    background: isHomepageNavbar ? "#ffffff" : "#ffffff",
  };

  const logoutHandler = async () => {
    console.log("fired");
    try {
      const response = await logout().unwrap();
      console.log(response);
      dispatch(resetCredentials());
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className={styles.Navbar} style={Navbar_styles}>
        {/* Logo */}
        <Link className={styles.left} to={"/"}>
          <img
            src={elite_homes_black_icon}
            // src={
            //   isHomepageNavbar ? elite_homes_white_icon : elite_homes_black_icon
            // }
            alt="elite homes icon"
          />
        </Link>

        {/* dekstop links */}
        <div className={styles.center}>
          {navElements.map((elem) => {
            return (
              <NavLink
                to={elem.link}
                key={elem.name}
                className={({ isActive, isPending }) =>
                  isPending
                    ? styles.single_NavLink
                    : isActive
                    ? styles.single_NavLinkActive
                    : styles.single_NavLink
                }
                // style={(isActive, isPending) => ({
                //   color: isHomepageNavbar ? "#ffffff" : "",
                //   borderBottom: isPending
                //     ? "solid 1px red"
                //     : isHomepageNavbar && isActive
                //     ? "solid 1px #ffffff"
                //     : "solid 1px #000000",
                // })}
              >
                {elem.name}
              </NavLink>
            );
          })}
        </div>

        {/* profile or login button */}
        <div className={styles.right}>
          {isAuthenticated ? (
            <div className={styles.userDetails}>
              <p>{currentUser}</p>
              <img
                src={currentUserImage ? currentUserImage : placeholder_avatar}
                alt="user avatar image"
              />
              <button onClick={logoutHandler}>Logout</button>
            </div>
          ) : isHomepageNavbar ? (
            <Link to={"/signup"} className={styles.otherPages_signUp_btn}>
              <img src={sign_in_white_icon} alt="sign in icon" />
              <p>Sign up</p>
            </Link>
          ) : (
            <Link to={"/signup"} className={styles.otherPages_signUp_btn}>
              <img src={sign_in_white_icon} alt="sign in icon" />
              <p>Sign up</p>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  isHomepageNavbar: PropTypes.bool,
};
