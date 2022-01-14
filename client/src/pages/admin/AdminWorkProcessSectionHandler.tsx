import { useState } from "react";
import {
  Wrapper,
  Form,
  Label,
  Input,
  ErrorMessage,
  FileInput,
  FileInputContainer,
} from "../../style/forms";
import { Headline, UnderText, SmallText } from "../../style/text";
import { StyledButtonFive } from "../../style/buttons";

const AdminWorkProcessSectionHandler = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [userInput, setUserInput] = useState({
    aboutTitle: "",
    aboutDescription: "",
    aboutImage: "",
  });

  return (
    <Wrapper>
      <Headline>Jobbprosess</Headline>
      <UnderText>Rediger jobbprosess-seksjonen</UnderText>

      <Form style={{ marginTop: "3em" }}>
        <Label>Tittel</Label>
        <Input name="workProcessTitle" placeholder="Hvordan Vi Jobber"></Input>
        <Label>Beskrivelse</Label>
        <Input
          name="workProcessDescription"
          placeholder="Trykk på sirklene"
        ></Input>
        <Label>Punkt 1</Label>
        <Input
          name="workProcessP1"
          placeholder="Tekst for første del av prosessen"
        ></Input>
        <Label>Punkt 2</Label>
        <Input
          name="workProcessP2"
          placeholder="Tekst for andre del av prosessen"
        ></Input>{" "}
        <Label>Punkt 3</Label>
        <Input
          name="workProcessP3"
          placeholder="Tekst for tredje del av prosessen"
        ></Input>{" "}
        <Label>Punkt 4</Label>
        <Input
          name="workProcessP4"
          placeholder="Tekst for fjerde del av prosessen"
        ></Input>
        <StyledButtonFive
          onClick={() =>
            setErrorState({
              isError: true,
              message: "Feil brukernavn eller passord.",
            })
          }
        >
          Send
        </StyledButtonFive>
        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default AdminWorkProcessSectionHandler;
