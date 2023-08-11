import styled from "styled-components";

export const StyledServiceContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
  padding-bottom: 5rem;

  .container-copy {
  }

  .container-copy,
  .container-services {
    max-width: 450px;
    margin: 0 auto;
    text-align: center;
    border-radius: 15px;
    padding: 2rem 1rem;
  }

  .container-services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .copy-title,
  .service-title,
  .price {
    color: var(--hot-pink);
  }

  .copy-title {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: solid 2px var(--hot-pink);
  }

  .details {
    font-size: 1.1rem;
    line-height: 1.75rem;
    margin-bottom: 1rem;
  }

  .service-title {
    font-size: 1.35rem;
  }

  .service-title,
  .description {
    margin-bottom: 0.25rem;
  }

  .price {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .logo {
    width: 100%;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8rem;

    .container-copy,
    .container-services {
      margin: 0;
    }

    .container-copy {
    }

    .container-services {
      max-width: 400px;
    }

    .container-carousel {
      width: 100%;
    }
  }
`;
