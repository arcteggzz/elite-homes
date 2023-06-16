import styles from "../styles/PropertyHeader.module.scss";
import PropTypes from "prop-types";

const PropertyHeader = ({
  propertyName,
  propertyPrice,
  propertyCategory,
  propertyId,
}) => {
  const getPropertyCategory = () => {
    let category = "";
    propertyCategory === 1 ? (category = "For Rent") : (category = "For Sale");
    return category;
  };

  return (
    <>
      <section className={styles.PropertyHeader}>
        <div className={styles.Property_Name_Price}>
          <h2>{propertyName}</h2>
          <h2>{`Price: #${propertyPrice}`}</h2>
        </div>
        <div className={styles.Property_Tags}>
          <p className={styles.Tag_Name}>{getPropertyCategory()}</p>
          <p>Apartment</p>
          <p>{`Property ID: QMBIY78-903-UUID${propertyId}`}</p>
        </div>
      </section>
    </>
  );
};

export default PropertyHeader;

PropertyHeader.propTypes = {
  propertyName: PropTypes.string,
  propertyPrice: PropTypes.string,
  propertyCategory: PropTypes.number,
  propertyId: PropTypes.string.isRequired,
};
