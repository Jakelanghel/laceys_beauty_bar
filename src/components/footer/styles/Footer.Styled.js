import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 95%;
  max-width: 700px;
  padding: 1rem 1rem;
  margin: 0 auto;
  margin-top: auto;
  background-color: var(--white);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .container-soc-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .soc-link {
    width: 50px;
    padding: 0.5rem 1rem;
  }

  .insta {
    width: 60px;
  }

  .fb {
    width: 49px;
  }

  .phone {
    width: 55px;
  }

  .loc {
    width: 52px;
  }
`;
