import { images } from "../../constants/images";
import { StyledServiceContainer } from "../../components/service-container/ServiceContainer.Styled";
import SwiperCarousel from "../../components/carousel/SwiperCarousel";
import propTypes from "prop-types";

const Lashes = ({ isMobile }) => {
  const lashImgArr = [
    images.mobileLashesImg_1,
    images.mobileLashesImg_2,
    images.mobileLashesImg_3,
    images.mobileLashesImg_4,
    images.mobileLashesImg_5,
    images.mobileLashesImg_6,
    images.mobileLashesImg_7,
  ];

  return (
    <StyledServiceContainer>
      <div className="container-copy bs-1">
        <h1 className="copy-title">Lashes</h1>
        <div>
          <p className="details">
            At Lacey's Beauty Bar, we know our stuff! Your lash health is the
            most important aspect to us! We take xpride in our ability to
            customize each set to your lashes!
          </p>

          <p className="details">
            We offer different styles of lashes depending on what you're looking
            to get! We offer classic, hybrid, volume and mega volume lash
            extensions. We offer a variety of lengths and curls. We use nothing
            but the best products that the Industry has to offer!
          </p>

          <p className="details">
            We are patient, thorough and trained to properly apply extensions.
            Quality care, quality products and quality service are our main
            goals at LBB!
          </p>
        </div>
      </div>

      <div className="container-services bs-1">
        <img src={images.logoWhite} alt="logo" className="logo" />
        <div className="container-service">
          <h2 className="service-title">Full set of eyelash extensions</h2>
          <p className="description">Classic, Hybrid, Volume, Mega Volume</p>
          <p className="price">$140 - $170</p>
        </div>

        <div className="container-service">
          <h2 className="service-title">
            Full Set of Teen Lashes<span></span>
          </h2>
          <p className="description">18 & Under</p>

          <p className="price">$130</p>
        </div>

        <div className="container-service">
          <h2 className="service-title">Eyelash refill</h2>
          <p className="description">Needed every 2-3 weeks</p>
          <p className="price">$60 - $80</p>
        </div>

        <div className="container-service">
          <h2 className="service-title">Eyelash lift and tint</h2>
          <p className="description">
            Give your natural lashes the perfect curl
          </p>
          <p className="price">$70</p>
        </div>

        <div className="container-service">
          <h2 className="service-title">seven day mini fill</h2>
          <p className="description">
            Give your natural lashes the perfect curl
          </p>
          <p className="price">$50</p>
        </div>
      </div>

      <div className="container-carousel">
        <SwiperCarousel isMobile={isMobile} imgArr={lashImgArr} />
      </div>
    </StyledServiceContainer>
  );
};

Lashes.propTypes = {
  isMobile: propTypes.bool,
};

export default Lashes;
