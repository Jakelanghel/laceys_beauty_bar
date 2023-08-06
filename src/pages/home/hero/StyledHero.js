import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  text-align: center;
  border-radius: 15px;
  padding: 2rem 1rem;

  /* box-shadow: 12px -5px 25px 1px rgba(3, 247, 235, 0.4),
    12px 10px 25px 1px rgba(255, 96, 181, 0.4),
    -10px 10px 25px 1px rgba(255, 96, 181, 0.4); */

  h1,
  h2,
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .container-contact {
    margin: 0.5rem 0;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: pointer;
  }

  .container-logo {
    width: 100%;
  }

  .logo-img {
    width: 100%;
  }

  span {
    color: var(--hot-pink);
  }
`;
