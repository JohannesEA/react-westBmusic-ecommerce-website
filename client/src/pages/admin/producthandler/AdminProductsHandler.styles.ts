import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 10em;
    justify-content: space-between;
  }
`;
