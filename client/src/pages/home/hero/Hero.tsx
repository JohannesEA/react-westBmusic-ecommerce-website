import { Wrapper } from "./Hero.styles";
import { StyledButtonThree } from "../../../style/buttons";
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
        <DomLink to="/products">
          <StyledButtonThree>Beats</StyledButtonThree>
        </DomLink>
      </div>
    </Wrapper>
  );
};

export default Hero;
