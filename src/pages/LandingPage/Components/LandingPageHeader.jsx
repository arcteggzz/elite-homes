import styles from "../styles/LandingPageHeader.module.scss";
import header_landingpage_bg01 from "../images/header_landingpage_bg01.png";
import header_landingpage_bg02 from "../images/header_landingpage_bg02.png";
import header_landingpage_bg03 from "../images/header_landingpage_bg03.png";
import header_landingpage_bg04 from "../images/header_landingpage_bg04.png";
import { useEffect, useState, useRef } from "react";

const LandingPageHeader = () => {
  const backgroundImages = [
    header_landingpage_bg01,
    header_landingpage_bg02,
    header_landingpage_bg03,
    header_landingpage_bg04,
  ];
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(0);
  const timerRef = useRef(null);

  const headerStyles = {
    backgroundImage: `url(${backgroundImages[currentBackgroundImage]})`,
  };

  const goToNext = () => {
    const isLastSlide = currentBackgroundImage === backgroundImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentBackgroundImage + 1;
    setCurrentBackgroundImage(newIndex);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  });

  return (
    <>
      <header className={styles.LandingPageHeader} style={headerStyles}>
        <h1>
          {" "}
          <span>Get Ready.</span>
          <span>for Easy Rental!</span>{" "}
        </h1>
        <p>
          Providing some of the most innovative and best Real-estate experience
          in the world today
        </p>

        <div className={styles.button_container}>
          <h5>For Sale</h5>
          <h5>For Rent</h5>
        </div>
      </header>
    </>
  );
};

export default LandingPageHeader;
