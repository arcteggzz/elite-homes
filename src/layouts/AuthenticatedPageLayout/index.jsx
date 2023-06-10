import { useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AuthenticatedPageHeader from "./Components/AuthenticatedPageHeader";
import AuthenticatedPageNavigation from "./Components/AuthenticatedPageNavigation";
import styles from "./AuthenticatedPageLayout.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentAccessToken } from "../../redux/features/auth/authSlice";
import { closeNavbar } from "../../redux/features/mobileNav/mobileNavSlice";

export default function AuthenticatedPageLayout() {
  const location = useLocation();
  const routeName = location.pathname.substring(1, location.pathname.length);
  const currentAccessToken = useSelector(selectCurrentAccessToken);
  const dispatch = useDispatch();

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
      {currentAccessToken ? (
        <div className={styles.AuthenticatedPageLayout}>
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
                <AuthenticatedPageHeader />
                <AuthenticatedPageNavigation />
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} state={{ from: location }} replace />
      )}
    </>
  );
}
