import { StyledHome } from "./styles/Home.Styled";
import { renderProfiles } from "./render/renderProfiles";
import { data } from "./data/data";
import { images } from "../../constants/images";
import Hero from "./hero/Hero";
import SwiperCarousel from "../../components/carousel/SwiperCarousel";
import propTypes from "prop-types";
import AnimatedPage from "../../components/motion/page/AnimatedPage";

const Home = ({ isMobile }) => {
  const profileElements = renderProfiles(data);
  const imgArr = [
    images.shopImg_1,
    images.shopImg_2,
    images.shopImg_3,
    images.shopImg_4,
    images.shopImg_5,
    images.shopImg_6,
    images.shopImg_7,
    images.shopImg_8,
  ];
  return (
    <AnimatedPage>
      <StyledHome>
        <Hero />
        <SwiperCarousel isMobile={isMobile} imgArr={imgArr} />
        <div className="container-profiles">
          <h4 className="profiles-title">About Us</h4>
          {profileElements}
        </div>
      </StyledHome>
    </AnimatedPage>
  );
};

Home.propTypes = {
  isMobile: propTypes.bool,
};

export default Home;
