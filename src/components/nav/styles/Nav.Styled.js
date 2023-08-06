import { styled } from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container-brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .eye-icon {
    width: 30px;
  }

  .brand {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--hot-pink);
  }

  .nav-link {
    text-decoration: none;
  }

  .nav-link:hover,
  .container-menu-icon:hover,
  .container-brand:hover {
    cursor: pointer;
  }

  .container-menu-icon,
  .container-brand {
    padding: 1.5rem;
  }

  .container-menu-icon {
    z-index: 90000;
  }

  .open-icon {
    width: 30px;
  }

  .close-icon {
    width: 25px;
  }
`;