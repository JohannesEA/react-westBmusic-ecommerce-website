import styled from "styled-components";
import getWindowDimensions from "../common/Dimentions";
import { SmallText } from "../style/text";

interface ButtonProps {
  style: {
    backgroundColor?: String;
    color?: String;
  };
  value: {
    text?: String;
  };
}

const Button = (props: ButtonProps) => {
  const { width } = getWindowDimensions();

  return (
    <Container
      style={{
        backgroundColor: `${props.style.backgroundColor}`,
        color: `${props.style.color}`,
      }}
    >
      <SmallText>{props.value.text}</SmallText>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: 100%;
  border-radius: 0.5em;
  z-index: 1000;
  min-width: 10vh;
  max-width: 20vh;
  padding: 0.3em;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    border-radius: 0;
  }
`;
