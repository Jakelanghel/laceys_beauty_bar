import { images } from "../../constants/images";
import { StyledFooter } from "./styles/Footer.Styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-soc-links filter-pink">
        <a href="https://www.instagram.com/laceysbeautybar/">
          <img src={images.instagramIcon} alt="" className="soc-link insta" />
        </a>
        <a href="https://www.facebook.com/laceysbeautybar/">
          <img src={images.facebookIcon} alt="" className="soc-link fb" />
        </a>
        <a href="tel:724-513-1415">
          <img src={images.phoneIcon} alt="" className="soc-link phone" />
        </a>
        <a href="https://www.google.com/maps/place/Lacey%E2%80%99s+Beauty+Bar+LLC/@40.7554898,-80.3191505,15z/data=!4m6!3m5!1s0x883471311d06923b:0xcfa671488a4d69dd!8m2!3d40.7554898!4d-80.3191505!16s%2Fg%2F11sgxp2jn2?entry=ttu">
          <img src={images.locationIcon} alt="" className="soc-link loc" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
