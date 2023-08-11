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
        <a href="https://www.google.com/maps?q=Lacey%E2%80%99s+Beauty+Bar+LLC&ftid=0x883471311d06923b:0xcfa671488a4d69dd">
          <img src={images.locationIcon} alt="" className="soc-link loc" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
