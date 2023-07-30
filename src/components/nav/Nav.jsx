import { NavLink } from "react-router-dom";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";

const Nav = () => {
  return (
    <StyledNav>
      <NavLink to="/" className="nav-link ">
        <img src={images.eyeIcon} alt="" className="eye-icon filter-pink" />
        <p className="brand ">LBB</p>
      </NavLink>

      <div className="filter-pink">
        <img src={images.menuIcon} alt="" className="menu-icon" />
      </div>
    </StyledNav>
  );
};

export default Nav;
