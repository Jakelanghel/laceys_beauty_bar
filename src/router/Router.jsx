import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Lashes from "../pages/lashes/Lashes";
import EyeBrows from "../pages/eyebrows/EyeBrows";
import Skin from "../pages/skin/Skin";
import WaxingTanning from "../pages/wax-tanning/WaxTanning";

const Router = () => {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/lashes" element={<Lashes />} />
      <Route path="/eyebrows" element={<EyeBrows />} />
      <Route path="/skin" element={<Skin />} />
      <Route path="/waxing-tanning" element={<WaxingTanning />} />
    </Routes>
  );
};

export default Router;
