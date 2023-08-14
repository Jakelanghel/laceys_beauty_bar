import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./styles/Nav.Styled";
import { images } from "../../constants/images";
import Menu from "./menu/Menu";
import AnimatedImg from "../motion/img/AnimatedImg";
import propTypes from "prop-types";

const Nav = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  const toggleMenu = () => {
    setIsOpen((oldState) => !oldState);
  };

  const mobileMenu = (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <Menu key="menu" isMobile={isMobile} setIsOpen={setIsOpen} />
      ) : null}
    </AnimatePresence>
  );

  const desktopMenu = (
    <Menu key="menu" isMobile={isMobile} setIsOpen={setIsOpen} />
  );

  const renderedMenu = isMobile ? mobileMenu : desktopMenu;

  return (
    <StyledNav>
      <NavLink to="/" className="container-brand nav-link">
        <img src={images.eyeIcon} alt="" className="eye-icon filter-pink" />
        <p className="brand ">LBB</p>
      </NavLink>

      <div className="container-menu-icon filter-pink" onClick={toggleMenu}>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <AnimatedImg
              key="closeIcon"
              isOpen={isOpen}
              src={images.closeIcon}
              alt="close-menu"
              imgClass="close-icon"
            />
          ) : (
            <AnimatedImg
              key="openIcon"
              isOpen={isOpen}
              src={images.menuIcon}
              alt="open-menu"
              imgClass="open-icon"
            />
          )}
        </AnimatePresence>
      </div>
      {renderedMenu}
    </StyledNav>
  );
};

Nav.propTypes = {
  isMobile: propTypes.bool,
};

export default Nav;
