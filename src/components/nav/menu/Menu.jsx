import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { menuVariants } from "./variants/menuVariants";
import { StyledMenu } from "./styles/Menu.Styled";
import propTypes from "prop-types";

const Menu = (props) => {
  const { isMobile, setIsOpen } = props;
  const MotionMenu = motion(StyledMenu);
  const variant = menuVariants(isMobile);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <MotionMenu
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        onClick={handleClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/lashes"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        onClick={handleClick}
      >
        Lashes
      </NavLink>
      <NavLink
        to="/eyebrows"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        onClick={handleClick}
      >
        Eyebrows
      </NavLink>
      <NavLink
        to="/skin"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        onClick={handleClick}
      >
        Skin care
      </NavLink>
      <NavLink
        to="/waxing-tanning"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        onClick={handleClick}
      >
        Waxing/Tanning
      </NavLink>
      <a href="https://www.facebook.com/threadandsew1/" className="nav-link">
        Clothing
      </a>
    </MotionMenu>
  );
};

Menu.propTypes = {
  isMobile: propTypes.bool,
  setIsOpen: propTypes.func,
};

export default Menu;
