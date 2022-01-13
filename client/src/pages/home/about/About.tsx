import { Wrapper } from "./About.styles";
import { Headline, UnderText, Text, SmallText } from "../../../style/text";
import getWindowDimensions from "../../../common/Dimentions";
import { StyledButtonOne, StyledButtonTwo } from "../../../style/buttons";

type Props = {
  title: string;
  undertitle: string;
  image: string;
};

const About: React.FC<Props> = ({ title, undertitle, image }) => {
  const { width } = getWindowDimensions();

  return (
    <Wrapper>
      <div className="about-left">
        <Headline>{title}</Headline>
        <br></br>
        <UnderText>{undertitle}</UnderText>
        <br></br>
        <StyledButtonTwo>Kontakt</StyledButtonTwo>
      </div>

      {width > 800 && (
        <div className="about-right">
          <img src={image} alt={title} />
        </div>
      )}
    </Wrapper>
  );
};

export default About;
