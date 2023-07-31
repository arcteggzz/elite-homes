import styles from "../styles/AuthenticatedPageNavigation.module.scss";
import { NavLink } from "react-router-dom";

export default function AuthenticatedPageNavigation() {
  const navElements = [
    { link: "/properties/property-listings", name: "Property Listings" },
    { link: "/properties/your-property", name: "Your Properties" },
    { link: "/properties/add-property", name: "Add Properties" },
    { link: "/properties/your-favorites", name: "Your Favorites" },
  ];

  return (
    <>
      <section className={styles.AuthenticatedPageNavigation}>
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
      </section>
    </>
  );
}
