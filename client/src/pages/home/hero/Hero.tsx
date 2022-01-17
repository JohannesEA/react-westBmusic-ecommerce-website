import { Wrapper } from "./Hero.styles";
import { StyledTransparentButton } from "../../../style/buttons";
import { Link as DomLink } from "react-router-dom";

type Props = {
  title: string;
  undertitle: string;
  image: string;
};

const Hero: React.FC<Props> = ({ title, undertitle, image }) => {
  return (
    <Wrapper id="hero">
      <div className="hero-right">
        <DomLink to="/products" style={{ width: "100%" }}>
          <StyledTransparentButton>Beats</StyledTransparentButton>
        </DomLink>
      </div>
    </Wrapper>
  );
};

export default Hero;
