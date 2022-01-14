import { Wrapper } from "./About.styles";
import { Headline, UnderText, Text, SmallText } from "../../../style/text";
import getWindowDimensions from "../../../common/Dimentions";
import { StyledButtonTwo } from "../../../style/buttons";

type Props = {
  title: string;
  undertitle: string;
  image: string;
};

const About: React.FC<Props> = ({ title, undertitle, image }) => {
  const { width } = getWindowDimensions();

  return (
    <Wrapper id="about">
      <div className="about-left">
        <Headline>{title}</Headline>
        <br></br>
        {width > 800 ? (
          <UnderText>{undertitle}</UnderText>
        ) : (
          <Text>{undertitle}</Text>
        )}{" "}
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
