import styles from "../styles/PropertySummary.module.scss";
import { Link } from "react-router-dom";
import location_icon from "../images/location_icon.png";
import bathtub_icon from "../images/Bath tub.png";
import floorplan_icon from "../images/Blueprint.png";
import bedroom_icon from "../images/Double bed.png";
import PropTypes from "prop-types";

export default function PropertySummary({
  propertyId,
  propertyImage,
  propertyAddress,
  propertyName,
  propertySummary,
  propertyPrice,
  propertyFloorArea,
  bedroomNumber,
  bathroomNumber,
  propertyCategory,
}) {
  const getPropertyCategory = () => {
    let category = "";
    propertyCategory === 1 ? (category = "For Rent") : (category = "For Sale");
    return category;
  };

  const getPropertySummary = (paragraph) => {
    const words = paragraph.trim().split(/\s+/);
    if (words.length >= 15) {
      const first9Words = words.slice(0, 15);
      const result = first9Words.join(" ");
      const finalQuote = `${result}...`;
      return finalQuote;
    } else {
      return paragraph;
    }
  };

  return (
    <Link className={styles.PropertySummary} to={`/properties/${propertyId}`}>
      <img src={propertyImage} alt="" className={styles.property_image} />
      <div className={styles.property_name_tag}>
        <div className={styles.location_tag}>
          <img src={location_icon} alt="" />
          <h5>{propertyAddress}</h5>
        </div>
        <h2>{propertyName}</h2>
        <p>{getPropertySummary(propertySummary)}</p>
      </div>
      <div className={styles.property_details_tag}>
        <h4>{`#${propertyPrice}`}</h4>
        <div className={styles.details_container}>
          <div className={styles.item_detail_container}>
            <img src={floorplan_icon} alt="" />
            <p>{`${propertyFloorArea}m2`}</p>
          </div>
          <div className={styles.item_detail_container}>
            <img src={bedroom_icon} alt="" />
            <p>{bedroomNumber}</p>
          </div>
          <div className={styles.item_detail_container}>
            <img src={bathtub_icon} alt="" />
            <p>{bathroomNumber}</p>
          </div>
        </div>
      </div>

      <p className={styles.property_category}>{getPropertyCategory()}</p>
    </Link>
  );
}

PropertySummary.propTypes = {
  propertyId: PropTypes.string.isRequired,
  propertyImage: PropTypes.string.isRequired,
  propertyAddress: PropTypes.string,
  propertyName: PropTypes.string,
  propertySummary: PropTypes.string,
  propertyPrice: PropTypes.string,
  propertyFloorArea: PropTypes.string,
  bedroomNumber: PropTypes.number,
  bathroomNumber: PropTypes.number,
  propertyCategory: PropTypes.number,
};
