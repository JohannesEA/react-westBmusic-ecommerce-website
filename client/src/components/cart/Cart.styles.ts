import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  min-width: 20em;

  h1 {
    margin-top: 1.5em;
  }

  @media (max-width: 400px) {
    min-width: 15em;
  }

  @media (max-width: 280px) {
    min-width: auto;
  }
`;

export const Buttons = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 250px) {
    flex-direction: column;
  }
`;
