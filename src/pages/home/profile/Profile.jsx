import { StyledProfile } from "./styles/Profile.Styled";
import { motion } from "framer-motion";
import propTypes from "prop-types";

const Profile = ({ bio, inverted, img, name }) => {
  const MotionProfile = motion(StyledProfile);
  const bioElements = bio.map((p) => (
    <p key={p} className="margin-btm">
      {p}
    </p>
  ));
  return (
    <MotionProfile>
      <div className={inverted ? "inverted-container row" : "row"}>
        <div className="img-container bs-blue">
          <img src={img} alt="profile" className={`profile-img ${name}`} />
        </div>

        <div className="card bs-pink">
          <h2>{name}</h2>
          {bioElements}
        </div>
      </div>
    </MotionProfile>
  );
};

Profile.propTypes = {
  bio: propTypes.array,
  inverted: propTypes.bool,
  img: propTypes.string,
  name: propTypes.string,
};

export default Profile;
