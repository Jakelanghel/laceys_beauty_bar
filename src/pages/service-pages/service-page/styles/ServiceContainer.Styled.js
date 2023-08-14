import styled from "styled-components";

export const StyledServiceContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 5rem;

  .container-copy,
  .container-services {
    max-width: 450px;

    margin: 0 auto;
    text-align: center;
    border-radius: 15px;
    padding: 2rem 1rem;
  }

  .detail {
    margin-bottom: 1rem;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 800px) {
    .container-copy {
      padding: 2rem;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .container-copy,
    .container-services {
      padding: 3rem 2rem;
      margin: 0;
    }

    .container-copy {
      max-width: 500px;
      line-height: 2.25rem;
    }

    .copy-title {
      width: 300px;
      margin: 0 auto;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: solid 2px var(--hot-pink);
    }

    .details {
      margin-bottom: 2rem;
    }

    .container-services {
      max-width: 400px;
      font-size: 1.15rem;
    }

    .container-carousel {
      width: 100%;
    }

    .container {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10rem;
    }

    .inverse {
      .container-copy {
        order: 2;
      }

      .container-services {
        order: 1;
      }
    }
  }

  @media (min-width: 1600px) {
    max-width: 1200px;
    margin: 0 auto;

    .container-copy,
    .container-services {
      max-width: 550px;
      padding: 2rem 1rem;
    }
    .container-services {
      max-width: 400px;
      font-size: 1.15rem;
    }
  }
`;
