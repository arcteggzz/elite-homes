import styles from "../styles/PropertySummary.module.scss";
import { Link } from "react-router-dom";
import dummy_property from "../images/dummy_property.png";
import location_icon from "../images/location_icon.png";
import bathtub_icon from "../images/Bath tub.png";
import floorplan_icon from "../images/Blueprint.png";
import bedroom_icon from "../images/Double bed.png";

export default function PropertySummary() {
  return (
    <Link className={styles.PropertySummary} to={`/properties/demo_route`}>
      <img src={dummy_property} alt="" className={styles.property_image} />
      <div className={styles.property_name_tag}>
        <div className={styles.location_tag}>
          <img src={location_icon} alt="" />
          <h5>Apartment - Lagos</h5>
        </div>
        <h2>Soluyi Avenue</h2>
        <p>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus.{" "}
        </p>
      </div>
      <div className={styles.property_details_tag}>
        <h4>26,456.00$</h4>
        <div className={styles.details_container}>
          <div className={styles.item_detail_container}>
            <img src={floorplan_icon} alt="" />
            <p>290m2</p>
          </div>
          <div className={styles.item_detail_container}>
            <img src={bedroom_icon} alt="" />
            <p>4</p>
          </div>
          <div className={styles.item_detail_container}>
            <img src={bathtub_icon} alt="" />
            <p>5</p>
          </div>
        </div>
      </div>

      <p className={styles.property_category}>For Rent</p>
    </Link>
  );
}
