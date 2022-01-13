import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  min-height: 20em;
  margin-bottom: 5em;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`;
export const Circle = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  font-size: 1.5rem;
  height: 1em;
  width: 1em;
  color: var(--color-1);
  border-radius: 100%;
  background-color: var(--color-text);
  padding: 0.5em;
  &:hover {
    border-radius: 0.5em;
    background-color: var(--color-text-hover);
  }
`;
