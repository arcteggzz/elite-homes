import styles from "./YourPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import img from "./images/propertyA.png";
import YourProperty from "./component/YourProperty";

const listOfProperty = [
  {
    property: img,
    title: "somolu",
  },
  {
    property: img,
    title: "somolu",
  },
  {
    property: img,
    title: "somolu",
  },
];

const YourPropertyPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.PropertyListingsPage}>
          <div className={styles.container}>
            <h1>List Of Properties</h1>
            <YourProperty listOfProperty={listOfProperty} />
          </div>
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default YourPropertyPage;
