import { StyledHome } from "./styles/Home.Styled";
import { data } from "./data/data";
import { renderProfiles } from "./render/renderProfiles";
import Hero from "./hero/Hero";

const Home = () => {
  const profileElements = renderProfiles(data);
  return (
    <StyledHome>
      <Hero />
      <div className="container-profiles">{profileElements}</div>
    </StyledHome>
  );
};

export default Home;
