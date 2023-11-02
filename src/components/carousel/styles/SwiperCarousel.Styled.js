import styled from "styled-components";

export const StyledSwiperCarousel = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 15px;

  .slide-img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 15px;
  }

  .swiper-wrapper {
    border-radius: 15px;
    background-color: rgba(3, 247, 235, 0.1);
  }

  @media (min-width: 800px) {
    max-width: 900px;

    .slide-img {
      width: 100%;
      height: 900px;
    }
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: none;

    .slide-img {
      height: 700px;
    }
  }
`;
