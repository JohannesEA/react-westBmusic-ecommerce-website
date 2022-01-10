import styled from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { SmallText } from "../style/text";

interface ButtonProps {
  backgroundColor: String;
  color: String;
  text: String;
}

const Button = (props: ButtonProps) => {
  const { width } = getWindowDimensions();

  return (
    <Container background-color={props.backgroundColor}>
      <SmallText>{props.text}</SmallText>
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
