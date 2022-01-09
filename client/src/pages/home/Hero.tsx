import styled from "styled-components";
import ImageBox from "../../components/ImageBox";
import { Headline, Text, SmallText } from "../../style/text";
import { HERO } from "../../dummydata/dummy";

const Hero = () => {
  return (
    <Container>
      {HERO.map((hero) => (
        <>
          <Headline>{hero.title}</Headline>
          <ImageBox
            src={hero.src}
            title={hero.title}
            details={hero.undertitle}
          />
        </>
      ))}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  min-height: 50vh;
  background: ;
`;
