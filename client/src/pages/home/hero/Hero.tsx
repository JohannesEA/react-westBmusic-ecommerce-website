import { Wrapper } from "./Hero.styles";
// import { Headline, UnderText, Text, SmallText } from "../../../style/text";
// import getWindowDimensions from "../../../common/Dimentions";
import {
  StyledButtonOne,
  StyledButtonTwo,
  StyledButtonThree,
} from "../../../style/buttons";

type Props = {
  title: string;
  undertitle: string;
  image: string;
};

const Hero: React.FC<Props> = ({ title, undertitle, image }) => {
  // const { width } = getWindowDimensions();
  return (
    <Wrapper>
      {/* {width > 800 && (
        <div className="hero-left">
          <Headline>{title}</Headline>
          <br></br>
          <UnderText>{undertitle}</UnderText>
          <br></br>
          <div className="buttons">
            <StyledButtonOne>Kontakt</StyledButtonOne>
            <StyledButtonTwo>Beats</StyledButtonTwo>
          </div>
        </div>
      )} */}

      <div className="hero-right">
        {/* <img src={image} alt={title}></img> */}
        <StyledButtonThree>Beats</StyledButtonThree>
      </div>
    </Wrapper>
  );
};

export default Hero;
