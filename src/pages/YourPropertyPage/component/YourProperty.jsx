import styles from "./YourProperty.module.scss";
import marker from "../images/LocationIcon.png";
import buyers from "../images/buyers.png";

const YourProperty = ({ listOfProperty }) => {
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
                  <div className={styles.buyersBtn}>
                    <p className={styles.buyersText}>Potential Buyers</p>{" "}
                    <div className={styles.counter}>
                      <img src={buyers} alt="" />
                      <p>24</p>
                    </div>
                  </div>
                  <button className={styles.removeBtn}>Remove Property</button>
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

export default YourProperty;
