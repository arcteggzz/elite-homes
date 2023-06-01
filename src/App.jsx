import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layout
import PublicPageLayout from "./layouts/PublicPageLayout";
import AuthenticatedPageLayout from "./layouts/AuthenticatedPageLayout";

//Pages
import SplashPage from "./pages/SplashPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MockLoginPage from "./pages/MockLoginPage";
import SignUpPage from "./pages/SignUpPage";

//lazyLoading for pages
const OffersPage = lazy(() => import("./pages/OffersPage/"));
const PropertyListingsPage = lazy(() =>
  import("./pages/PropertyListingsPage/")
);
const PropertyDetailsPage = lazy(() => import("./pages/PropertyDetailsPage/"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashPage />} />

          {/* Authentication routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mock-login" element={<MockLoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

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
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
