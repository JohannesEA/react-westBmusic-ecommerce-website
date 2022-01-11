import styled from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { Text, SmallText } from "../style/text";
import Button from "../components/Button";
import { ButtonStyleOne, ButtonValueOne } from "../style/forms";

interface ImageBoxProps {
  content: {
    id: number;
    src: string;
    title: string;
    undertitle: string;
  }[];
}

const ImageBox = (props: ImageBoxProps) => {
  const { width } = getWindowDimensions();

  return (
    <Container>
      <ImageContainer>
        {" "}
        <Image src={props.content[0].src} alt={props.content[0].title} />
      </ImageContainer>
      <Bottom>
        {" "}
        <Text style={{ marginTop: ".5vh" }}>{props.content[0].title}</Text>
        <SmallText style={{ marginTop: ".5vh" }}>
          {props.content[0].undertitle}
        </SmallText>
        <Buttons>
          <Button style={ButtonStyleOne} value={ButtonValueOne}></Button>
        </Buttons>
      </Bottom>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  max-height: 50em;
  z-index: 1;
  text-align: center;
`;
const ImageContainer = styled.div`
  width: 100%;
  max-height: 30em;
  max-width: 30em;
  margin: 0 auto;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Buttons = styled.div`
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const Bottom = styled.div``;
