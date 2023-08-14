import { StyledServiceContainer } from "../styles/ServiceContainer.Styled";
import { renderServiceElements } from "../render/render-service-elements/renderServiceElements";
import { images } from "../../../../constants/images";

import AnimatedPage from "../../../../components/motion/page/AnimatedPage";
import propTypes from "prop-types";

const MultiServicePage = ({ service }) => {
  const waxingServices = renderServiceElements(service);
  const tanningServices = renderServiceElements(service);

  return (
    <AnimatedPage>
      <StyledServiceContainer>
        <div className="container">
          <div className="container-copy bs-1">
            <h1 className="copy-title">{service.services[0].title}</h1>
            <div>{service.services[0].details}</div>
          </div>

          <div className="container-services bs-1">
            <img src={images.logoWhite} alt="logo" className="logo" />
            {waxingServices}
          </div>
        </div>

        <div className="container inverse">
          <div className="container-copy bs-1">
            <h1 className="copy-title">{service.services[1].title}</h1>
            <div>{service.services[1].details}</div>
          </div>

          <div className="container-services bs-1">
            <img src={images.logoWhite} alt="logo" className="logo" />
            {tanningServices}
            <p className="price">{service.services[1].price}</p>
          </div>
        </div>
      </StyledServiceContainer>
    </AnimatedPage>
  );
};

MultiServicePage.propTypes = {
  service: propTypes.object,
};

export default MultiServicePage;
