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
    font-size: 2rem;
    font-weight: 300;
    color: var(--hot-pink);
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 4px;
    padding: 1rem 1.5rem;
  }

  .store-link-container {
    margin-top: auto;
  }

  .store-link {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--white);

    background-color: var(--hot-pink);
    border-radius: 25px;
    padding: 1rem 2.5rem;
  }

  .active {
    font-weight: 500;
    border-bottom: solid 1px var(--hot-pink);
    border-top: solid 1px var(--hot-pink);
  }

  .close-icon {
    width: 60px;
    background-color: transparent;
    border: none;
    margin-left: auto;
    padding: 1rem;
  }

  @media screen and (min-width: 950px) {
    display: none;
  }
`;
