import styled from "styled-components";
import { Headline, Text, SmallText } from "../../style/text";

const WorkProcess = () => {
  return (
    <Container>
      <Headline>For deg som liker muysikk</Headline>
    </Container>
  );
};

export default WorkProcess;

const Container = styled.div`
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  min-height: 50vh;
  background: ;
`;
