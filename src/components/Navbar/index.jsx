import styles from "./Navbar.module.scss";
import elite_homes_black_icon from "./images/elite_homes_black_icon.png";
// import elite_homes_white_icon from "./images/elite_homes_white_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import sign_in_black_icon from "./images/sign_in_black.png";
import hamburger from "./images/haburger.png";
import sign_in_white_icon from "./images/sign_in_white.png";
import placeholder_avatar from "./images/placeholder_avatar.png";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentUserName,
  selectCurrentUserImage,
  resetCredentials,
} from "../../redux/features/auth/authSlice";
import {
  selectNavIsOpen,
  openNavbar,
  closeNavbar,
} from "../../redux/features/mobileNav/mobileNavSlice";
// import { useLogoutMutation } from "../../redux/features/auth/authApiSlice";

export default function Navbar({ isAuthenticated, isHomepageNavbar }) {
  const currentUser = useSelector(selectCurrentUserName);
  const currentUserImage = useSelector(selectCurrentUserImage);
  const currentNavbarState = useSelector(selectNavIsOpen);
  const dispatch = useDispatch();
  // const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const navElements = [
    { link: "/home", name: "Home" },
    { link: "/offers", name: "Offers" },
    { link: "/properties/property-listings", name: "Properties" },
  ];

  const Navbar_styles = {
    background: isHomepageNavbar ? "#ffffff" : "#ffffff",
  };

  // const logoutHandler = async () => {
  //   console.log("fired");
  //   try {
  //     const response = await logout().unwrap();
  //     console.log(response);
  //     dispatch(resetCredentials());
  //     navigate("/home");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const logoutHandler = async () => {
    dispatch(resetCredentials());
    dispatch(closeNavbar());
    navigate("/login");
  };

  const navbarHandler = () => {
    currentNavbarState ? dispatch(closeNavbar()) : dispatch(openNavbar());
  };

  return (
    <>
      <nav className={styles.Navbar} style={Navbar_styles}>
        {/* Logo */}
        <Link className={styles.left} to={"/"}>
          <img src={elite_homes_black_icon} alt="elite homes icon" />
        </Link>

        {/* dekstop links */}
        <div className={styles.center_desktop_links}>
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
              <button onClick={logoutHandler} className={styles.logout_btn}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"} className={styles.signUp_btn}>
              <img src={sign_in_white_icon} alt="sign in icon" />
              <p>Login</p>
            </Link>
          )}
        </div>

        {/* hamburger */}
        <button className={styles.haburger} onClick={() => navbarHandler()}>
          <img src={hamburger} alt="hamburger icon" />
        </button>

        {/* mobile links */}
        {currentNavbarState ? (
          <div className={styles.mobile_links}>
            {navElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  key={elem.name}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? styles.single_NavLink_mobile
                      : isActive
                      ? styles.single_NavLinkActive_mobile
                      : styles.single_NavLink_mobile
                  }
                >
                  {elem.name}
                </NavLink>
              );
            })}

            {isAuthenticated ? (
              <div className={styles.mobile_userDetails}>
                <p>{currentUser}</p>
                <img
                  src={currentUserImage ? currentUserImage : placeholder_avatar}
                  alt="user avatar image"
                />
                <button
                  onClick={logoutHandler}
                  className={styles.logout_btn_mobile}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/login"} className={styles.signUp_btn_mobile}>
                <img src={sign_in_white_icon} alt="sign in icon" />
                <p>Login</p>
              </Link>
            )}
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  isHomepageNavbar: PropTypes.bool,
};
