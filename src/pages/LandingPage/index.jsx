// import styles from "./LandingPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import LandingPageExplore from "./Components/LandingPageExplore";
import LandingPageProperties from "./Components/LandingPageProperties";

import choice1 from "../LandingPage/images/choice1.png";
import choice2 from "../LandingPage/images/choice2.png";
import choice3 from "../LandingPage/images/choice3.png";
import choice4 from "../LandingPage/images/choice4.png";
import choice5 from "../LandingPage/images/choice5.png";
import choice6 from "../LandingPage/images/choice6.png";
import LandingPageOffers from "./Components/LandingPageOffers";
import LandingPageAffordable from "./Components/LandingPageAffordable";
import LandingPageAboutUs from "./Components/LandingPageAboutUs";
import LandingPageClient from "./Components/LandingPageClient";

const datas = [
  {
    gallery: [
      { url: choice1, title: "main-view" },
      { url: choice2, title: "arial-view" },
      { url: choice3, title: "interior-view" },
      { url: choice4, title: "garage-view" },
    ],
    propType: "for rent",
    state: "lagos",
    street: "Soluyi avenue",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus nam. Debitis deserunt voluptas aut ab error at?",
    price: 29383.0,
    measurement: 250,
    bedrooms: 3,
    bathTubs: 2,
  },
  {
    gallery: [
      { url: choice2, title: "arial-view" },
      { url: choice1, title: "main-view" },
      { url: choice3, title: "interior-view" },
      { url: choice4, title: "garage-view" },
      // choice1,
      // choice2,
      // choice3,
      // choice4,
    ],
    propType: "for lease",
    state: "port harcourt",
    street: "Oscar GRA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus nam. Debitis deserunt voluptas aut ab error at?",
    price: 39000.0,
    measurement: 300,
    bedrooms: 4,
    bathTubs: 3,
  },
  {
    gallery: [
      { url: choice3, title: "interior-view" },
      { url: choice1, title: "main-view" },
      { url: choice2, title: "arial-view" },
      { url: choice4, title: "garage-view" },
      // choice1,
      // choice2,
      // choice3,
      // choice4,
    ],
    propType: "for sale",
    state: "Abuja",
    street: "Peace Block",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus nam. Debitis deserunt voluptas aut ab error at?",
    price: 45700.0,
    measurement: 400,
    bedrooms: 7,
    bathTubs: 6,
  },
  {
    gallery: [
      { url: choice4, title: "garage-view" },
      { url: choice1, title: "main-view" },
      { url: choice2, title: "arial-view" },
      { url: choice3, title: "interior-view" },
      // choice1,
      // choice2,
      // choice3,
      // choice4,
    ],
    propType: "for Lease",
    state: "Ibadan",
    street: "Bodija Road",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus nam. Debitis deserunt voluptas aut ab error at?",
    price: 15000.0,
    measurement: 230,
    bedrooms: 5,
    bathTubs: 4,
  },
  {
    gallery: [
      { url: choice5, title: "main-view" },
      { url: choice2, title: "arial-view" },
      { url: choice3, title: "interior-view" },
      { url: choice4, title: "garage-view" },
      // choice1,
      // choice2,
      // choice3,
      // choice4,
    ],
    propType: "for rent",
    state: "Osun",
    street: "Ameclo BN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus nam. Debitis deserunt voluptas aut ab error at?",
    price: 29380.0,
    measurement: 300,
    bedrooms: 4,
    bathTubs: 4,
  },
  {
    gallery: [
      { url: choice6, title: "main-view" },
      { url: choice2, title: "arial-view" },
      { url: choice3, title: "interior-view" },
      { url: choice4, title: "garage-view" },
      // choice1,
      // choice2,
      // choice3,
      // choice4,
    ],
    propType: "for sale",
    state: "lagos",
    street: "Gbagada avenue",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus nam. Debitis deserunt voluptas aut ab error at?",
    price: 45000.0,
    measurement: 450,
    bedrooms: 8,
    bathTubs: 9,
  },
];

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main>
          <LandingPageProperties datas={datas} />
          <LandingPageOffers />
          <LandingPageExplore />
          <LandingPageAffordable />
          <LandingPageAboutUs />
          <LandingPageClient />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
