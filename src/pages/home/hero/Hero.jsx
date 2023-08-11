import { StyledHero } from "./styles/StyledHero";
import { images } from "../../../constants/images";
import BookNowBtn from "../../../components/book-now-btn/BookNowBtn";

const Hero = () => {
  return (
    <StyledHero className="bs-1">
      <div className="container-logo">
        <img src={images.logo} alt="logo" className="logo-img" />
      </div>

      <div className="container">
        <div className="container-contact">
          <a
            href="https://duckduckgo.com/?t=ffab&q=laceys+beuty+bar&ia=web&iaxm=places"
            className="contact-link"
          >
            <img
              src={images.locationIcon}
              alt="address"
              className="address-icon filter-pink"
            />
            1414 7th Ave, Beaver Falls, PA
          </a>

          <a href="tel:+7245131415" className="contact-link">
            <img
              src={images.phoneIcon}
              alt="phone number"
              className="phone-icon filter-pink"
            />
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

        <BookNowBtn />
      </div>
    </StyledHero>
  );
};

export default Hero;
