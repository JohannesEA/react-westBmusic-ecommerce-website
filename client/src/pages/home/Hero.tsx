import styled from "styled-components";

interface IProps {
  content: {
    id: number;
    title: string;
    undertitle: string;
    src: string;
  }[];
}

const Hero = (props: IProps) => {
  return (
    <Container
      id="hero"
      style={{
        backgroundImage: `url(${props.content[0].src})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10101c;
  text-align: center;
  color: white;
  min-height: 60vh;

  @media (max-width: 350px) {
    background-size: "cover";
  }
  /* background-image: linear-gradient(
    to right top,
    #10101c,
    #2f3742,
    #19191a,
    #a3a177,
    #fcf160
  ); */
`;
