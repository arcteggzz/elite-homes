import styles from "../styles/OffersPageHeader.module.scss";

export default function OffersPageHeader() {
  return (
    <>
      <section className={styles.OffersPageHeader}>
        <h1>
          <span>
            Filter your options for <span>Real Estate</span>
          </span>
          <span> Properties</span>
        </h1>
      </section>
    </>
  );
}
