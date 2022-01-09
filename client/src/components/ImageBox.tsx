import styled from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { Text, SmallText } from "../style/text";

interface ImageBoxProps {
  src: string;
  title: string;
  details: string;
}

const ImageBox = (props: ImageBoxProps) => {
  const { width } = getWindowDimensions();

  return (
    <Container>
      <Image></Image>
      <Text></Text>
      <SmallText></SmallText>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  display: grid;
  min-height: 30vh;
  z-index: 1;
  background-color: var(--color-2);
  grid-template-rows: auto;
`;

const Image = styled.img``;
