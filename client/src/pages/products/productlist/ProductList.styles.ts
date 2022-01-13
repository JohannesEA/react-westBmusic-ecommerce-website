import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3em;
`;

export const ProductListContainer = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
