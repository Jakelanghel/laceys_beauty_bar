import Profile from "../profile/Profile";
import propTypes from "prop-types";

export const renderProfiles = (data) => {
  return data.map((profile) => {
    return (
      <Profile
        key={profile.name}
        bio={profile.bio}
        inverted={profile.inverted}
        img={profile.img}
        name={profile.name}
      />
    );
  });
};

renderProfiles.propTypes = {
  data: propTypes.array,
};
