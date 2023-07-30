import { styled } from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  padding-left: 2rem;

  .nav-link {
    text-decoration: none;
  }

  .nav-link:hover {
    cursor: pointer;
  }

  .eye-icon {
    width: 40px;
  }

  .brand {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--hot-pink);
  }

  .menu-icon {
    width: 100px;
    padding: 2rem;
  }
`;
