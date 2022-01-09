import styled from "styled-components";
import ImageBox from "../../components/ImageBox";
import { Headline, Text, SmallText } from "../../style/text";
import { ABOUT } from "../../dummydata/dummy";

const About = () => {
  return (
    <Container>
      {ABOUT.map((about) => (
        <>
          <Left>
            <Headline>{about.title}</Headline>
          </Left>
          <Right>
            <ImageBox
              src={about.src}
              title={about.title}
              details={about.undertitle}
            />
          </Right>
        </>
      ))}
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  min-height: 50vh;
  background: ;
`;

const Left = styled.div``;
const Right = styled.div``;
