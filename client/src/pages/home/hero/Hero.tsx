import { Wrapper } from "./Hero.styles";
import { StyledTransparentButton } from "../../../style/buttons";
import { Link as DomLink } from "react-router-dom";
import djEventImg from "/assets/images/img1.jpg";

export type Props = {
  image: string;
};

const Hero: React.FC<Props> = ({ image }) => {
  return (
    <Wrapper id="hero" image={image}>
      <div className="hero-right">
        <DomLink to="/products" style={{ width: "100%" }}>
          <StyledTransparentButton>Beats</StyledTransparentButton>
        </DomLink>
      </div>
    </Wrapper>
  );
};

export default Hero;
