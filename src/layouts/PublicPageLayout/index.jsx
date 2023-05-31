import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./PublicPageLayout.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PublicPageLayout() {
  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className={styles.PublicPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar />
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
