import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./CredentialsPageLayout.module.scss";
import elite_homes_black_icon from "../../components/Navbar/images/elite_homes_black_icon.png";

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
      <div className={styles.CredentialsPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <nav>
                <Link className={styles.left} to={"/"}>
                  <img src={elite_homes_black_icon} alt="elite homes icon" />
                </Link>
              </nav>
            </div>
          </div>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
