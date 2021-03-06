import styled from "styled-components";

type Custom = {
  image: string;
};
export const Wrapper = styled.div<Custom>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  min-height: 40em;
  margin-bottom: 3em;
  margin-top: 5em;

  @media (max-width: 800px) {
    min-height: 30em;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
  }

  .hero-right {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background: url(${(props) => props.image}) no-repeat;
    background-size: cover;
    object-fit: cover;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 18em;
    max-width: 16em;
  }

  img {
    max-height: 30em;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
