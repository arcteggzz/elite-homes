import styles from "../styles/SearchQuery.module.scss";
import CustomDropdown from "../../../utils/CustomDropdown/CustomDropdown";
import { useState } from "react";

export default function SearchQuery() {
  const [categoryChoice, setCategoryChoice] = useState("For Sale");

  return (
    <section className={styles.SearchQuery}>
      <h2>Property Search</h2>
      <div className={styles.SearchParameters_container}>
        <div className={styles.SearchParameters_top}>
          <input type="text" placeholder="Search Location" />
          <div className={styles.SearchParameters_dropdown}>
            <CustomDropdown
              defaultSelection={categoryChoice}
              possibleOptions={["For Sale", "For Rent"]}
              customDropdownTitle="Select Category"
              customOnChange={setCategoryChoice}
            />
          </div>
        </div>

        <div className={styles.SearchParameters_bottom}>
          <div className={styles.price_slider_container}></div>
          <div className={styles.bathroom_bedroom_input_container}>
            <div className={styles.bedroom_container}>
              <p>Bedroom:</p>
              <input type="text" />
            </div>
            <div className={styles.bathroom_container}>
              <p>Bathroom:</p>
              <input type="text" />
            </div>
          </div>
        </div>

        <button>Search</button>
      </div>
    </section>
  );
}
