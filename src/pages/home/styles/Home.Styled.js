import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  margin: 0 auto;

  .container-profiles {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .profiles-title {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    font-family: "Charmonman", cursive;
    color: var(--hot-pink);
    padding: 0 1rem;
    padding-bottom: 0.5rem;
    margin: 0 auto;
    border-bottom: solid 2px var(--hot-pink);
  }

  @media (min-width: 1200px) {
    .container-flex {
      display: flex;
    }

    .container-profiles {
      margin: 8rem 0;
      gap: 10rem;
    }
  }
`;
