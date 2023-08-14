// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { images } from "../../constants/images";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSwiperCarousel } from "./styles/SwiperCarousel.Styled";
import propTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperCarousel = ({ isMobile, imgArr }) => {
  const slidesPer = isMobile ? 1 : 3;
  const spacing = isMobile ? 30 : 20;

  const slides = imgArr.map((img) => {
    return (
      <SwiperSlide key={nanoid()}>
        <img src={img} alt="shop-img" className="slide-img bs-blue" />
      </SwiperSlide>
    );
  });

  return (
    <StyledSwiperCarousel className="bs-blue">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spacing}
        slidesPerView={slidesPer}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {slides}
      </Swiper>
    </StyledSwiperCarousel>
  );
};

SwiperCarousel.propTypes = {
  isMobile: propTypes.bool,
  imgArr: propTypes.array,
};
export default SwiperCarousel;
