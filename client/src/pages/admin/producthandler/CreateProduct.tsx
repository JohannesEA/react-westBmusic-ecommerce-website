//Functions
import { useState, MouseEvent, ChangeEvent } from "react";
import { addProduct } from "../../../apihandling/apiCalls";

//Styles
import {
  // Wrapper,
  Form,
  Label,
  Input,
  ErrorMessage,
  FileInput,
  FileInputContainer,
} from "../../../style/forms";
import { SmallText } from "../../../style/text";
import { StyledButtonFive } from "../../../style/buttons";
// import { Product } from "../../../models/Product";

const CreateProduct = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    categories: [""],
    image: "",
    mp3: "",
    price: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    let value = e.target.value;
    let name = e.target.name;

    switch (name) {
      case "price":
        setUserInput({ ...userInput, [name]: Number(value) });
        break;
      case "categories":
        setUserInput({ ...userInput, [name]: value.split(",") });
        break;
      default:
        setUserInput({ ...userInput, [name]: value });
    }
  };

  const handleImageUpload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    (document.getElementById("image") as HTMLFormElement).click();
  };

  const handleMp3Upload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    (document.getElementById("mp3") as HTMLFormElement).click();
  };

  const handleAddNewProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Product: ", userInput);
    addProduct(userInput);
    // setSuccess(true)
  };

  return (
    <div>
      <Form style={{ marginTop: "3em" }}>
        <Label>Tittel</Label>
        <Input
          type="text"
          name="title"
          placeholder="Beat 1"
          onChange={handleChange}
        />
        <Label>Beskrivelse</Label>
        <Input
          type="text"
          name="description"
          placeholder="Denne beaten er nydelig.."
          onChange={handleChange}
        />
        <Label>Kategorier</Label>
        <Input
          type="text"
          name="categories"
          placeholder="House, HipHop, Raggae"
          onChange={handleChange}
        />
        <Label>Pris</Label>
        <Input
          type="number"
          name="price"
          placeholder="500"
          onChange={handleChange}
        />
        <Label>Bilde</Label>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={handleImageUpload}
        >
          <SmallText>Last Opp Bilde</SmallText>
          <FileInput
            id="image"
            name="image"
            onChange={handleChange}
          ></FileInput>
        </FileInputContainer>

        <Label>Beat</Label>
        <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={handleMp3Upload}
        >
          <SmallText>Last Opp Beat</SmallText>
          <FileInput id="mp3" name="mp3" onChange={handleChange}></FileInput>
        </FileInputContainer>
        <StyledButtonFive onClick={handleAddNewProduct}>Send</StyledButtonFive>
        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </div>
  );
};

export default CreateProduct;
