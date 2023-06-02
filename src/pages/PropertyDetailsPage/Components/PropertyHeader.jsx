import styles from "../styles/PropertyHeader.module.scss";

const PropertyHeader = () => {
  return (
    <>
      <section className={styles.PropertyHeader}>
        <div className={styles.Property_Name_Price}>
          <h2>Soluyi Avenue</h2>
          <h2>Price: 78,985.00$</h2>
        </div>
        <div className={styles.Property_Tags}>
          <p className={styles.Tag_Name}>For Rent</p>
          <p>Apartment</p>
          <p>Property ID: 12456787654</p>
        </div>
      </section>
    </>
  );
};

export default PropertyHeader;
