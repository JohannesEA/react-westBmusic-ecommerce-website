import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 20em;
  margin-bottom: 5em;

  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr;
  }

  .about-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    max-height: 25em;
    padding-top: 2em;
    text-align: center;
  }

  .about-right {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-height: 20em;
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
    object-fit: cover;
    max-height: 20em;
    border-radius: 0.5em;
  }
`;
