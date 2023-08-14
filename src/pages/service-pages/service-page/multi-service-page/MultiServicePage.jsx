import { images } from "../../../../constants/images";
import { StyledServiceContainer } from "../styles/ServiceContainer.Styled";
import propTypes from "prop-types";
import AnimatedPage from "../../../../components/motion/page/AnimatedPage";

const MultiServicePage = ({ service }) => {
  const waxingServices = service.services[0].services.map((s) => {
    return (
      <div key={`service ${s.title}`} className="container-service">
        <h2 className="service-title">{s.title}</h2>
        <p className="description">{s.description}</p>
        <p className="price">{s.price}</p>
      </div>
    );
  });
  const tanningServices = service.services[1].services.map((s) => {
    return (
      <div key={`service ${s.title}`} className="container-service">
        <h2 className="service-title">{s.title}</h2>
        <p className="description">{s.description}</p>
        <p className="price">{s.price}</p>
      </div>
    );
  });

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
