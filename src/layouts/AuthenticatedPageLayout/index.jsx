import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AuthenticatedPageHeader from "./Components/AuthenticatedPageHeader";
import AuthenticatedPageNavigation from "./Components/AuthenticatedPageNavigation";
import styles from "./AuthenticatedPageLayout.module.scss";

export default function AuthenticatedPageLayout() {
  return (
    <>
      <div className={styles.AuthenticatedPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar />
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
    </>
  );
}
