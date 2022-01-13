import styled from "styled-components";

export const Wrapper = styled.div`
  max-height: 40em;
  height: 30em;
  max-width: 25em;
  width: 25em;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0px 0px 4px 2px #d8d8d8;
  margin: 1em auto;
  border-radius: 0.5em;

  @media (max-width: 1300px) {
    width: 23em;
  }

  @media (max-width: 1200px) {
    width: 20em;
  }
  @media (max-width: 1050px) {
    width: 18em;
  }

  @media (max-width: 950px) {
    width: 16em;
  }

  @media (max-width: 850px) {
    width: 80%;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  max-height: 15em;
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const Image = styled.img`
  width: 100%;
  height: 20em;
  max-height: 15em;
  border-radius: 0.5em 0.5em 0 0;

  @media (max-width: 800px) {
    height: 15em;
  }
`;

export const Buttons = styled.div``;
