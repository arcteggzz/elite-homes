import styles from "../styles/SearchQuery.module.scss";
import CustomDropdown from "../../../utils/CustomDropdown/CustomDropdown";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const baseCategorySelection = searchParams.get("category");
  const baseBedroomCount = searchParams.get("bedroomCount")
    ? searchParams.get("bedroomCount")
    : 0;
  const baseBathroomCount = searchParams.get("bathroomCount")
    ? searchParams.get("bathroomCount")
    : 0;

  const [categoryChoice, setCategoryChoice] = useState(baseCategorySelection);
  const [bedroomCount, setBedroomCount] = useState(baseBedroomCount);
  const [bathroomCount, setBathroomCount] = useState(baseBathroomCount);

  const searchSettingsHandler = () => {
    setSearchParams({ category: categoryChoice, bedroomCount, bathroomCount });
  };

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
              <input
                type="text"
                value={bedroomCount}
                onChange={(e) => setBedroomCount(+e.target.value)}
              />
            </div>
            <div className={styles.bathroom_container}>
              <p>Bathroom:</p>
              <input
                type="text"
                value={bathroomCount}
                onChange={(e) => setBathroomCount(+e.target.value)}
              />
            </div>
          </div>
        </div>

        <button onClick={() => searchSettingsHandler()}>Search</button>
      </div>
    </section>
  );
}
