import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 5em;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 5em;
  background-color: var(--color-text);
  color: var(--color-1);
  border-radius: 0.5em 0.5em 0 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
`;
