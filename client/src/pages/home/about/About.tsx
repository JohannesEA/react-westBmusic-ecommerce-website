import { Wrapper } from "./About.styles";
import { Headline, UnderText, Text } from "../../../style/text";
import getWindowDimensions from "../../../common/Dimentions";
import { StyledBlueButton } from "../../../style/buttons";
import { Link } from "react-scroll";

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
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
        >
          <StyledBlueButton>Kontakt</StyledBlueButton>
        </Link>
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
