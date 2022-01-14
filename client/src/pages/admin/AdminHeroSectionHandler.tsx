import { useState } from "react";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import {
  Wrapper,
  Form,
  Label,
  Input,
  ErrorMessage,
  FileInput,
  FileInputContainer,
} from "../../style/forms";
import { Headline, UnderText, Text } from "../../style/text";
import { StyledButtonFive } from "../../style/buttons";

const AdminHeroSectionHandler = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  return (
    <Wrapper>
      <Headline>Hero seksjon</Headline>
      <UnderText>Rediger bilde for hero seksjonen</UnderText>

      <Form style={{ marginTop: "3em" }}>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={() =>
            (document.getElementById("file") as HTMLFormElement).click()
          }
        >
          <Text>Last Opp Bildefilen</Text>
          <FileInput id="file" name="heroimg"></FileInput>
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
