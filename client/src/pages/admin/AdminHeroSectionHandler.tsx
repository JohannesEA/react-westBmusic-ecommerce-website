import { useState } from "react";
import {
  Wrapper,
  Form,
  Label,
  ErrorMessage,
  FileInput,
  FileInputContainer,
} from "../../style/forms";
import { Headline, UnderText, SmallText } from "../../style/text";
import { StyledButtonFive } from "../../style/buttons";

const AdminHeroSectionHandler = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  // const [userInput, setUserInput] = useState({ heroImage: "" });

  return (
    <Wrapper>
      <Headline>Hero</Headline>
      <UnderText>Rediger bilde for hero seksjonen</UnderText>

      <Form style={{ marginTop: "3em" }}>
        <Label>Bilde</Label>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={() =>
            (document.getElementById("file") as HTMLFormElement).click()
          }
        >
          <SmallText>Last Opp Bilde</SmallText>
          <FileInput id="file" name="heroImage"></FileInput>
        </FileInputContainer>

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

export default AdminHeroSectionHandler;
