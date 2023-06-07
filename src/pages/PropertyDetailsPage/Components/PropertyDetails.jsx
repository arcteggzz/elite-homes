import styles from "../styles/PropertyDetails.module.scss";
import dummyFloorPlan from "../images/dummyFloorPlan.png";
import bathtub_icon from "../images/Bath tub.png";
import floorplan_icon from "../images/Blueprint.png";
import bedroom_icon from "../images/Double bed.png";

const PropertyDetails = () => {
  return (
    <>
      <section className={styles.PropertyDetails}>
        <div className={styles.Description_container}>
          <h2>Description</h2>
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>

        <div className={styles.Property_Details_container}>
          <h2>Property Details</h2>
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fr.{" "}
          </p>
          <div className={styles.breakdown_container}>
            <div className={styles.size_container}>
              <img src={floorplan_icon} alt="" />
              <h5>Size:</h5>
              <h6>290m2</h6>
            </div>
            <div className={styles.bedroom_container}>
              <img src={bedroom_icon} alt="" />
              <h5>Bedrooms:</h5>
              <h6>4</h6>
            </div>
            <div className={styles.bathroom_container}>
              <img src={bathtub_icon} alt="" />
              <h5>Bathrooms:</h5>
              <h6>5</h6>
            </div>
          </div>
        </div>

        <div className={styles.Floor_plan_container}>
          <h2>Floor Plan</h2>
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fr.{" "}
          </p>
          <img src={dummyFloorPlan} alt="" />
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
