import styles from "./PropertyList.module.scss";
import marker from "../images/LocationIcon.png";

const PropertyList = ({ listOfProperty }) => {
  return (
    <>
      {listOfProperty.map((property) => {
        return (
          <>
            <div className={styles.propertyList}>
              <div className={styles.leftPositioned}>
                <div className={styles.image}>
                  <img src={property.property} alt="" className={styles.imgg} />
                  <div className={styles.backgroundColor}></div>
                  <p>For Rent</p>
                </div>
              </div>

              <div className={styles.rightPositioned}>
                <div>
                  <img src={marker} alt="" />
                  <p>Apartment - Lagos</p>
                </div>
                <h2>Soluyi Avenue</h2>
                <p className={styles.longText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima corporis vitae quas repellendus. Dolorum velit corporis
                  quam accusantium dolore nobis.
                </p>
                <div className={styles.btnFlex}>
                  <button className={styles.removeBtn}>Remove Property</button>
                  <button className={styles.viewBtn}>View Property</button>
                </div>
              </div>
            </div>
            <div className={styles.horizontalRule}></div>
          </>
        );
      })}
    </>
  );
};

export default PropertyList;
