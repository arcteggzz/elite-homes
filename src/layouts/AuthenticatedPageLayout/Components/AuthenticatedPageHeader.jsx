import styles from "../styles/AuthenticatedPageHeader.module.scss";

export default function AuthenticatedPageHeader() {
  return (
    <>
      <section className={styles.AuthenticatedPageHeader}>
        <h1>
          <span>
            See Your <span>Real Estate</span>
          </span>
          <span>Properties</span>
        </h1>
      </section>
    </>
  );
}
