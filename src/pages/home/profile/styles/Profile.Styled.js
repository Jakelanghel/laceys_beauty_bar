import styled from "styled-components";
import { images } from "../../../../constants/images";

export const StyledProfile = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  .img-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-image: url(${images.pinkBg});
    background-size: 50%;
    padding: 2rem;
    border-radius: 25px;
  }

  .profile-img {
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
    margin: 2rem auto;
    border-radius: 15px;
    padding: 2rem 1rem;
    background-color: var(--white);
  }

  h2 {
    font-family: "Charmonman", cursive;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--hot-pink);
    text-transform: capitalize;
  }

  span {
    display: block;
  }

  .margin-btm {
    margin-bottom: 1rem;
  }

  @media (min-width: 800px) {
    max-width: 500px;
    .profile-img {
      width: 400px;
      height: 400px;
    }

    h2 {
      font-size: 2.25rem;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .card {
      font-size: 1.15rem;
      line-height: 2rem;
      letter-spacing: 1px;
      padding: 3rem;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1300px;

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .inverted-container {
      flex-direction: row-reverse;
    }

    .img-container {
      width: 45%;
      max-width: 500px;
      margin: 0;
    }

    .card {
      width: 45%;
      max-width: 600px;
      margin: 0;
    }
  }
`;
