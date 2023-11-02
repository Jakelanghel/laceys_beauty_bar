import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: var(--translucent-black);
  padding-top: 5rem;

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Charmonman", cursive;
    font-size: 2rem;
    font-weight: 400;
    color: var(--hot-pink);
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 4px;
    padding: 1rem 1.5rem;
  }

  .nav-link:hover {
    transform: scale(1.1);
  }

  .active {
    font-size: 2.25rem;
    font-weight: 700;
    border-bottom: solid 1px var(--hot-pink);
  }

  .active:hover {
    transform: none;
  }

  .close-icon {
    width: 60px;
    background-color: transparent;
    border: none;
    margin-left: auto;
    padding: 1rem;
  }

  @media screen and (min-width: 1200px) {
    position: static;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    background-color: transparent;
    padding-top: 0;

    .nav-link {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--hot-pink);
      text-decoration: none;
      text-transform: capitalize;
      letter-spacing: 4px;
      padding: 1rem 1.5rem;
    }
  }

  @media screen and (min-width: 1300px) {
    .nav-link {
      font-size: 1.55rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .nav-link {
      font-size: 1.65rem;
    }
  }
`;
