import { StyledServiceContainer } from "../styles/ServiceContainer.Styled";
import { renderServiceElements } from "../render/render-service-elements/renderServiceElements";
import { renderDetailElements } from "../render/render-detail-elements/renderDetailElements";
import { images } from "../../../../constants/images";

import AnimatedPage from "../../../../components/motion/page/AnimatedPage";
import SwiperCarousel from "../../../../components/carousel/SwiperCarousel";
import propTypes from "prop-types";

const ServicePage = ({ service, isMobile }) => {
  const detailElement = renderDetailElements(service);
  const serviceElements = renderServiceElements(service);

  return (
    <AnimatedPage>
      <StyledServiceContainer>
        <div className="container-copy bs-1">
          <h1 className="copy-title">{service.title}</h1>
          <div>{detailElement}</div>
        </div>

        <div className="container-services bs-1">
          <img src={images.logoWhite} alt="logo" className="logo" />
          {serviceElements}
        </div>

        <div className="container-carousel">
          <SwiperCarousel isMobile={isMobile} imgArr={service.imgArr} />
        </div>
      </StyledServiceContainer>
    </AnimatedPage>
  );
};

ServicePage.propTypes = {
  isMobile: propTypes.bool,
  service: propTypes.object,
};

export default ServicePage;
