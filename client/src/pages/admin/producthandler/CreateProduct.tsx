import { useState } from "react";
import {
  Wrapper,
  Form,
  Label,
  Input,
  ErrorMessage,
  FileInput,
  FileInputContainer,
} from "../../../style/forms";
import { Headline, UnderText, SmallText } from "../../../style/text";
import { StyledButtonFive } from "../../../style/buttons";

const CreateProduct = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [userInput, setUserInput] = useState({
    aboutTitle: "",
    aboutDescription: "",
    aboutImage: "",
  });

  return (
    <div>
      <Form style={{ marginTop: "3em" }}>
        <Label>Tittel</Label>
        <Input type="text" name="title" placeholder="Beat 1" />
        <Label>Beskrivelse</Label>
        <Input
          type="text"
          name="description"
          placeholder="Denne beaten er nydelig.."
        />
        <Label>Kategorier</Label>
        <Input
          type="text"
          name="categories"
          placeholder="House, HipHop, Raggae"
        />
        <Label>Pris</Label>
        <Input type="number" name="price" placeholder="500" />
        <Label>Bilde</Label>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={() =>
            (document.getElementById("file") as HTMLFormElement).click()
          }
        >
          <SmallText>Last Opp Bilde</SmallText>
          <FileInput id="file" name="image"></FileInput>
        </FileInputContainer>

        <Label>Beat</Label>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={() =>
            (document.getElementById("file") as HTMLFormElement).click()
          }
        >
          <SmallText>Last Opp Beat</SmallText>
          <FileInput id="file" name="mp3"></FileInput>
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
    </div>
  );
};

export default CreateProduct;
