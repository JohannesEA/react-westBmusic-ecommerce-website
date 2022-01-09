import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em 1em 0.5em 1em;
  box-shadow: 0px 0px 4px 2px #d8d8d8;
  width: 80%;
  border-radius: 0.5em;
`;
export const Label = styled.label`
  font-size: 0.8rem;
  color: black;
  margin: 0em auto 0em 5%;
`;
export const Input = styled.input`
  width: 90%;
  margin: 0.5em auto;
  min-height: 2.5em;
`;
export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  margin: 0.5em auto;
`;
export const ConfirmMessage = styled.p`
  font-size: 1.2rem;
  color: blue;
  margin: 0.5em auto;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  margin: 0.5em auto;
  min-height: 2.5em;
  margin-top: 2em;
`;
