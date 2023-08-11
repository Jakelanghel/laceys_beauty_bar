import { images } from "../../../../constants/images";
import { StyledServiceContainer } from "../styles/ServiceContainer.Styled";
import SwiperCarousel from "../../../../components/carousel/SwiperCarousel";
import propTypes from "prop-types";
import { nanoid } from "nanoid";

const ServicePage = ({ service, isMobile }) => {
  const serviceDetails = service.details.map((d) => (
    <p key={nanoid()} className="detail">
      {d}
    </p>
  ));

  const services = service.services.map((s) => (
    <div key={`service ${s.title}`} className="container-service">
      <h2 className="service-title">{s.title}</h2>
      <p className="description">{s.description}</p>
      <p className="price">{s.price}</p>
    </div>
  ));

  return (
    <StyledServiceContainer>
      <div className="container-copy bs-1">
        <h1 className="copy-title">{service.title}</h1>
        <div>{serviceDetails}</div>
      </div>

      <div className="container-services bs-1">
        <img src={images.logoWhite} alt="logo" className="logo" />
        {services}
      </div>

      <div className="container-carousel">
        <SwiperCarousel isMobile={isMobile} imgArr={service.imgArr} />
      </div>
    </StyledServiceContainer>
  );
};

ServicePage.propTypes = {
  isMobile: propTypes.bool,
  service: propTypes.object,
};

export default ServicePage;
