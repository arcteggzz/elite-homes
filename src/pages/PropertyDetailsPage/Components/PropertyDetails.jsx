import styles from "../styles/PropertyDetails.module.scss";
// import dummyFloorPlan from "../images/dummyFloorPlan.png";
import bathtub_icon from "../images/Bath tub.png";
import floorplan_icon from "../images/Blueprint.png";
import bedroom_icon from "../images/Double bed.png";
import PropTypes from "prop-types";

const PropertyDetails = ({
  propertyAddress,
  propertyBathroomNumber,
  propertyBedroomNumber,
  propertyDescription,
  propertyFloorArea,
  propertyFloorPlanImage,
}) => {
  return (
    <>
      <section className={styles.PropertyDetails}>
        <div className={styles.Description_container}>
          <h2>Description</h2>
          <p>{propertyDescription}</p>
        </div>

        <div className={styles.Property_Details_container}>
          <h2>Property Details</h2>
          <p>{propertyAddress}</p>
          <div className={styles.breakdown_container}>
            <div className={styles.size_container}>
              <img src={floorplan_icon} alt="" />
              <h5>Size:</h5>
              <h6>{`${propertyFloorArea}m2`}</h6>
            </div>
            <div className={styles.bedroom_container}>
              <img src={bedroom_icon} alt="" />
              <h5>Bedrooms:</h5>
              <h6>{propertyBedroomNumber}</h6>
            </div>
            <div className={styles.bathroom_container}>
              <img src={bathtub_icon} alt="" />
              <h5>Bathrooms:</h5>
              <h6>{propertyBathroomNumber}</h6>
            </div>
          </div>
        </div>

        <div className={styles.Floor_plan_container}>
          <h2>Floor Plan</h2>
          <p>{propertyDescription}</p>
          <img src={propertyFloorPlanImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;

PropertyDetails.propTypes = {
  propertyDescription: PropTypes.string,
  propertyAddress: PropTypes.string,
  propertyFloorArea: PropTypes.string,
  propertyBedroomNumber: PropTypes.number,
  propertyBathroomNumber: PropTypes.string,
  propertyFloorPlanImage: PropTypes.string,
};
