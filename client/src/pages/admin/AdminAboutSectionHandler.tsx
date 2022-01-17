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
import { StyledBlueButton } from "../../style/buttons";

const AdminAboutSectionHandler = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  // const [userInput, setUserInput] = useState({
  //   aboutTitle: "",
  //   aboutDescription: "",
  //   aboutImage: "",
  // });

  return (
    <Wrapper>
      <Headline>Om</Headline>
      <UnderText>Rediger om-seksjonen</UnderText>

      <Form style={{ marginTop: "3em" }}>
        <Label>Tittel</Label>
        <Input name="aboutTitle" placeholder="Om Oss"></Input>
        <Label>Beskrivelse</Label>
        <Input
          name="aboutDescription"
          placeholder="Vi lager beats som er perfekt for dine prosjekter"
        ></Input>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={() =>
            (document.getElementById("file") as HTMLFormElement).click()
          }
        >
          <SmallText>Last Opp Bilde</SmallText>
          <FileInput id="file" name="aboutImage"></FileInput>
        </FileInputContainer>

        <StyledBlueButton
          onClick={() =>
            setErrorState({
              isError: true,
              message: "Feil brukernavn eller passord.",
            })
          }
        >
          Send
        </StyledBlueButton>

        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default AdminAboutSectionHandler;
