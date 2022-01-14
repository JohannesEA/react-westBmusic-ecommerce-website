import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5em;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3em;
  background-color: var(--color-1);
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em 1em 0.5em 1em;
  box-shadow: 0px 0px 4px 2px #d8d8d8;
  width: 80%;
  border-radius: 0.5em;
  background-color: #fff;
  height: auto;
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
  font-family: "Luxurious Roman", cursive;
  border: 1px solid #d8d8d8;
  border-radius: 0.5em;
`;

export const TextArea = styled.textarea`
  width: 90%;
  margin: 0.5em auto;
  min-height: 5em;
  font-family: "Luxurious Roman", cursive;
  border: 1px solid #d8d8d8;
  border-radius: 0.5em;
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

export const FileInput = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const FileInputContainer = styled.button`
  background-color: var(--color-6-hover);
  color: var(--color-text);
  height: 6em;
  width: 90%;
  margin: 0 auto;
  border-radius: 0.5em;

  &:hover {
    background-color: var(--color-6);
  }
`;

export const Select = styled.select`
  width: 90%;
  height: 5em;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid var(--color-1);
  margin-left: 10px;
  border-radius: 0.5em;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
