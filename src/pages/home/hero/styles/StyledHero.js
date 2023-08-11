import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  border-radius: 15px;
  padding: 2rem 1rem;

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

  .contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .address-icon,
  .phone-icon {
    width: 15px;
  }

  .container-logo {
    width: 100%;
  }

  .logo-img {
    width: 100%;
  }

  .container-slogan {
    margin-bottom: 1rem;
  }

  span {
    color: var(--hot-pink);
  }

  @media (min-width: 800px) {
    max-width: 500px;
    .container-contact {
      font-size: 1.25rem;
    }
    h1,
    h2,
    h3 {
      font-size: 2rem;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 3rem;
    margin-bottom: 5rem;

    .contact-link {
      justify-content: flex-start;
    }

    .container-logo {
      width: 55%;
    }

    .container-contact {
      margin: 0;
    }

    .container-contact,
    .container-slogan {
      text-align: left;
    }

    .container-slogan {
      line-height: 3.5rem;
      h1,
      h2,
      h3 {
        font-size: 2rem;
      }
      margin: 3.5rem 0;
    }

    .container {
      width: 40%;
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 1400px) {
    .container-slogan {
      h1,
      h2,
      h3 {
        font-size: 2.25rem;
      }
    }
  }
`;
