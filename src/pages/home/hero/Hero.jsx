import { StyledHero } from "./StyledHero";
import { images } from "../../../constants/images";

const Hero = () => {
  return (
    <StyledHero className="bs-1">
      <div className="container-logo">
        <img src={images.logo} alt="logo" className="logo-img" />
      </div>

      <div className="container-contact">
        <a href="https://duckduckgo.com/?t=ffab&q=laceys+beuty+bar&ia=web&iaxm=places">
          1414 7th Ave, Beaver Falls PA
        </a>
        <a href="tel:+7245131415" className="phone-number">
          724-513-1415
        </a>
      </div>

      <div className="container-slogan">
        <h1>
          Premium <span>Services</span>
        </h1>
        <h2>
          High Quality <span>Products</span>
        </h2>
        <h3>
          Experienced <span>Professionals</span>
        </h3>
      </div>
    </StyledHero>
  );
};

export default Hero;
