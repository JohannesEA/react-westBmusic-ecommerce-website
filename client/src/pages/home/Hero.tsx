import { useState } from "react";
import styled from "styled-components";
// import ImageBox from "../../components/ImageBox";
import { Headline, Text, SmallText } from "../../style/text";
import { HERO } from "../../dummydata/dummy";

const Hero = () => {
  console.log(HERO);
  return (
    <Container hero-img={HERO[0].src}>
      <Headline>{HERO[0].title}</Headline>
      {/* <ImageBox
        src={HERO[0].src}
        title={HERO[0].title}
        details={HERO[0].undertitle}
      /> */}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  min-height: 60vh;
  background-image: linear-gradient(
    to right top,
    #10101c,
    #2f3742,
    #505254,
    #a3a177,
    #fcf160
  );
`;
