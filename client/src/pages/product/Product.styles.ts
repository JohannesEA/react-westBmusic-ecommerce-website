import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 8em;
  margin-bottom: 3em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  width: 80%;
  max-height: 50em;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0px 0px 4px 2px #d8d8d8;
  margin: 1em auto;
  border-radius: 0.5em;
`;

export const ProductDescription = styled.div``;

export const ImageContainer = styled.div`
  max-height: 25em;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  max-height: 25em;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5em 0.5em 0 0;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
