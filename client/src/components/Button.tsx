import styled from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { SmallText } from "../style/text";

const Button = () => {
  const { width } = getWindowDimensions();

  return (
    <Container>
      <SmallText></SmallText>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: grid;
  min-height: 30vh;
  z-index: 1000;
  background-color: var(--color-2);
  grid-template-rows: auto;
`;
