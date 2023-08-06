import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./styles/Nav.Styled";
import { images } from "../../constants/images";
import Menu from "./menu/Menu";
import MotionImg from "../motion/img/MotionImg";
import propTypes from "prop-types";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = props;

  const toggleMenu = () => {
    setIsOpen((oldState) => !oldState);
  };

  return (
    <StyledNav>
      <NavLink to="/" className="container-brand nav-link">
        <img src={images.eyeIcon} alt="" className="eye-icon filter-pink" />
        <p className="brand ">LBB</p>
      </NavLink>

      <div className="container-menu-icon filter-pink" onClick={toggleMenu}>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <MotionImg
              key="closeIcon"
              isOpen={isOpen}
              src={images.closeIcon}
              alt="close-menu"
              imgClass="close-icon"
            />
          ) : (
            <MotionImg
              key="openIcon"
              isOpen={isOpen}
              src={images.menuIcon}
              alt="open-menu"
              imgClass="open-icon"
            />
          )}
        </AnimatePresence>
        {/* {renderedMenuIcon} */}

        {/* <MotionImg
          isOpen={isOpen}
          openIconSrc={images.menuIcon}
          closeIconSrc={images.closeIcon}
          alt="toggle-menu"
        /> */}
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? <Menu key="menu" isMobile={isMobile} /> : null}
      </AnimatePresence>
    </StyledNav>
  );
};

Nav.propTypes = {
  isMobile: propTypes.bool,
};

export default Nav;
