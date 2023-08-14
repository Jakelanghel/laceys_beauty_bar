import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { renderServicePages } from "../pages/service-pages/render/renderServicePages";
import { nanoid } from "nanoid";
import Home from "../pages/home/Home";
import propTypes from "prop-types";

const Router = ({ isMobile }) => {
  const serviceRoutes = renderServicePages(isMobile);
  return (
    <Routes location={location} key={nanoid()}>
      <Route
        path="/"
        element={
          <AnimatePresence mode="wait">
            <Home isMobile={isMobile} />
          </AnimatePresence>
        }
      />
      {serviceRoutes}
    </Routes>
  );
};

Router.propTypes = {
  isMobile: propTypes.bool,
};

export default Router;
