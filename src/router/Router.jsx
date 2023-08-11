import { Route, Routes } from "react-router-dom";
import { renderServicePages } from "../pages/services/render/renderServicePages";
import Home from "../pages/home/Home";
import propTypes from "prop-types";

const Router = ({ isMobile }) => {
  const serviceRoutes = renderServicePages(isMobile);
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home isMobile={isMobile} />} />
      {serviceRoutes}
    </Routes>
  );
};

Router.propTypes = {
  isMobile: propTypes.bool,
};

export default Router;
