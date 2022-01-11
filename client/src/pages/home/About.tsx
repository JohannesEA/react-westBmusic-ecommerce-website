import styled from "styled-components";
import ImageBox from "../../components/ImageBox";
import { Headline, Text, SmallText } from "../../style/text";
import { ABOUT } from "../../dummydata/dummy";
import Button from "../../components/Button";
import { ButtonStyleOne, ButtonValueTwo } from "../../style/forms";
import getWindowDimensions from "../../common/Dimentions";

interface IProps {
  content: {
    id: number;
    src: string;
    title: string;
    undertitle: string;
  }[];
}

const About = (props: IProps) => {
  const { width } = getWindowDimensions();

  return (
    <Container>
      <Left>
        <Headline>{props.content[0].title}</Headline>
        <Text>{props.content[0].undertitle}</Text>
        {width > 800 ? (
          <Buttons>
            {" "}
            <Button style={ButtonStyleOne} value={ButtonValueTwo}></Button>
          </Buttons>
        ) : (
          <br></br>
        )}
      </Left>
      <Right>
        <ImageBox content={ABOUT} />
      </Right>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  min-height: 50vh;
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-height: 35.2em;
  transition: all 0.5s ease;

  @media (max-width: 950px) {
    grid-template-columns: auto;
    max-height: 31em;
  }
`;
const Right = styled.div``;

const Buttons = styled.div``;
