import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { menuVariants } from "./variants/menuVariants";
import { StyledMenu } from "./styles/Menu.Styled";
import propTypes from "prop-types";

const Menu = (props) => {
  const { isMobile } = props;
  const MotionMenu = motion(StyledMenu);
  const variant = menuVariants(isMobile);

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
      >
        Home
      </NavLink>
      <NavLink
        to="/lashes"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Lashes
      </NavLink>
      <NavLink
        to="/evebrows"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Eyebrows
      </NavLink>
      <NavLink
        to="/skin"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Skin care
      </NavLink>
      <NavLink
        to="/waxing-tanning"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Waxing/Tanning
      </NavLink>
      <NavLink
        to="/clothing"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Clothing
      </NavLink>
    </MotionMenu>
  );
};

Menu.propTypes = {
  isMobile: propTypes.bool,
};

export default Menu;
