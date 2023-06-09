import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./PublicPageLayout.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentAccessToken } from "../../redux/features/auth/authSlice";
import { closeNavbar } from "../../redux/features/mobileNav/mobileNavSlice";

export default function PublicPageLayout() {
  const location = useLocation();
  const routeName = location.pathname.substring(1, location.pathname.length);
  const currentAccessToken = useSelector(selectCurrentAccessToken);
  const dispatch = useDispatch();

  // get the data state of authentication fromt eh auth slice in the redux store and pass into navbar

  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: 0,
      behavior: "smooth",
    });

    dispatch(closeNavbar());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.PublicPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar
                isAuthenticated={currentAccessToken ? true : false}
                isHomepageNavbar={routeName === "home"}
              />
            </div>
          </div>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
