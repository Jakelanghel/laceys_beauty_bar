import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { menuVariants } from "./variants/menuVariants";
import { StyledMenu } from "./styles/Menu.Styled";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const variant = menuVariants(isMobile);
  const MotionMenu = motion(StyledMenu);

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
        to="/services"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Lashes
      </NavLink>
      <NavLink
        to="/clothing"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Evebrows
      </NavLink>
      <NavLink
        to="/clothing"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Skin care
      </NavLink>
      <NavLink
        to="/clothing"
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

export default Menu;
