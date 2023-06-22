import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layout
import PublicPageLayout from "./layouts/PublicPageLayout";
import AuthenticatedPageLayout from "./layouts/AuthenticatedPageLayout";
import CredentialsPageLayout from "./layouts/CredentialsPageLayout";

//Utilities
// import PersistLogin from "./utils/PersistLogin.jsx";

//Pages
import SplashPage from "./pages/SplashPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FakeUsersPage from "./pages/FakeUsersPage";
import FakeLoginPage from "./pages/FakeLoginPage";

//lazyLoading for pages
const OffersPage = lazy(() => import("./pages/OffersPage/"));
const PropertyListingsPage = lazy(() =>
  import("./pages/PropertyListingsPage/")
);
const PropertyDetailsPage = lazy(() => import("./pages/PropertyDetailsPage/"));
const AddPropertyPage = lazy(() => import("./pages/AddPropertyPage/"));
const YourPropertyPage = lazy(() => import("./pages/YourPropertyPage/"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashPage />} />

          {/* Authentication routes */}
          <Route element={<CredentialsPageLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/fakeLogin" element={<FakeLoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          {/* public routes */}
          <Route element={<PublicPageLayout />}>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
          </Route>

          {/* private routes */}

          <Route element={<AuthenticatedPageLayout />}>
            <Route
              path="/properties/property-listings"
              element={<PropertyListingsPage />}
            />
            <Route
              path="/properties/add-property"
              element={<AddPropertyPage />}
            />
            <Route
              path="/properties/your-property"
              element={<YourPropertyPage />}
            />
            <Route path="/fakeUsers" element={<FakeUsersPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
