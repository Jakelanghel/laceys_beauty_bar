import styled from "styled-components";
import { images } from "../../../../constants/images";

export const StyledProfile = styled.div`
  width: 100%;
  .img-container {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-image: url(${images.pinkBg});
    background-size: 50%;
    padding: 2rem;
    border-radius: 25px;
  }

  .profile-img {
    width: 100%;
    width: 315px;
    height: 315px;
    border-radius: 50%;
    object-fit: cover;
  }

  .cailyn,
  .sydni {
    object-position: center top;
  }

  .card {
    max-width: 550px;
    margin: 2rem auto;
    border-radius: 15px;
    padding: 2rem 1rem;
    background-color: var(--white);
  }

  h2 {
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  span {
    display: block;
  }

  .margin-btm {
    margin-bottom: 1rem;
  }

  /* @media screen and (min-width: 400px) {
    .profile-img {
      width: 350px;
      height: 350px;
    }

    .img-container {
      width: 90%;
    }

    .container-card {
      width: 90%;
    }
  }

  @media screen and (min-width: 950px) {
    max-width: 1500px;
    margin: 8rem auto;

    .box-shadow-1 {
      border-radius: 15px;

      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .img-container {
      max-width: 450px;
      margin: 0;
      width: 47%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
    }

    .row {
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      gap: 3rem;
      align-items: center;
    }

    .inverted-container {
      .card {
        order: 1;
      }

      .img-container {
        order: 2;
      }
    }

    .container-card {
      width: 47%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      padding: 3rem 0;
      border-radius: 15px;
    }
  }

  @media screen and (min-width: 1100px) {
    .row {
      gap: 8rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .img-container {
      padding: 2rem;
      width: 47%;
      border-radius: 15px;
    }

    .profile-img {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (min-width: 1500px) {
    .row {
      gap: 12rem;
    }

    .img-container {
      max-width: 550px;
      padding: 3rem;
      width: 47%;
      border-radius: 15px;
    }

    .profile-img {
      width: 450px;
      height: 450px;
    }

    .container-card {
      max-width: 500px;

      padding: 3rem 0;

      .card {
        max-width: 550px;
        padding: 2rem 1.5rem;
      }
    }
  } */
`;
