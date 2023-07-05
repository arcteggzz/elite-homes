import styles from "./SinglePropertySummary.module.scss";
import location_png from "./images/LocationIcon.png";
import buyers from "./images/buyers.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SinglePropertySummary({
  propertyImage,
  propertyCategory,
  propertyAddress,
  propertyName,
  propertySummary,
  propertyId,
  propertyPotentialBuyers,
  pageMount,
}) {
  const getPropertyCategory = () => {
    let category = "";
    propertyCategory === 1 ? (category = "For Rent") : (category = "For Sale");
    return category;
  };

  const getPropertySummary = (paragraph) => {
    const words = paragraph.trim().split(/\s+/);
    if (words.length >= 24) {
      const first9Words = words.slice(0, 24);
      const result = first9Words.join(" ");
      const finalQuote = `${result}...`;
      return finalQuote;
    } else {
      return paragraph;
    }
  };

  return (
    <>
      <article className={styles.SinglePropertySummary}>
        <div className={styles.left}>
          {!propertyImage === "" ? (
            <img src={propertyImage} alt="" className={styles.image} />
          ) : (
            <div className={styles.placeholder_image}></div>
          )}
          <p>{getPropertyCategory()}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.right_top}>
            <img src={location_png} alt="" />
            <p>{propertyAddress}</p>
          </div>
          <h2>{propertyName}</h2>
          <p>{getPropertySummary(propertySummary)}</p>
          {pageMount === "Property Listings" ? (
            <div className={styles.buttons_container}>
              <button className={styles.remove_button}>Remove Property</button>
              <Link
                to={`/properties/${propertyId}`}
                className={styles.view_button}
              >
                View Property
              </Link>
            </div>
          ) : (
            <div className={styles.buttons_container}>
              <div className={styles.potential_buyers}>
                <p>Potentional Buyers</p>
                <img src={buyers} alt="" />
                <p className={styles.potential_buyers_count}>
                  {propertyPotentialBuyers}
                </p>
              </div>
              <button className={styles.delete_button}>Remove Property</button>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

SinglePropertySummary.propTypes = {
  propertyImage: PropTypes.string,
  propertyCategory: PropTypes.number,
  propertyAddress: PropTypes.string,
  propertyName: PropTypes.string,
  propertySummary: PropTypes.string,
  propertyPotentialBuyers: PropTypes.number,
  propertyId: PropTypes.string.isRequired,
  pageMount: PropTypes.string.isRequired,
};
