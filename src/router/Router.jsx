import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Lashes from "../pages/lashes/Lashes";
import EyeBrows from "../pages/eyebrows/EyeBrows";
import Skin from "../pages/skin/Skin";
import WaxingTanning from "../pages/wax-tanning/WaxTanning";
import propTypes from "prop-types";

const Router = ({ isMobile }) => {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home isMobile={isMobile} />} />
      <Route path="/lashes" element={<Lashes isMobile={isMobile} />} />
      <Route path="/eyebrows" element={<EyeBrows isMobile={isMobile} />} />
      <Route path="/skin" element={<Skin isMobile={isMobile} />} />
      <Route
        path="/waxing-tanning"
        element={<WaxingTanning isMobile={isMobile} />}
      />
    </Routes>
  );
};

Router.propTypes = {
  isMobile: propTypes.bool,
};

export default Router;
