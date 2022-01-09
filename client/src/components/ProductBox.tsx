import styled from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { Text, SmallText } from "../style/text";

const ProductBox = () => {
  const { width } = getWindowDimensions();

  return (
    <Container>
      <Image></Image>
      <Text></Text>
      <SmallText></SmallText>
      <Buttons></Buttons>
    </Container>
  );
};

export default ProductBox;

const Container = styled.div`
  display: grid;
  min-height: 30vh;
  z-index: 1000;
  background-color: var(--color-2);
  grid-template-rows: auto;
`;

const Image = styled.img``;

const Buttons = styled.div`
  width: 100%;
`;
