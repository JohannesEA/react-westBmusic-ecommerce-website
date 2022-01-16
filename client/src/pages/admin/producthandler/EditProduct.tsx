import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import {
  Form,
  Label,
  Input,
  ErrorMessage,
  FileInput,
  FileInputContainer,
  Select,
} from "../../../style/forms";
import { SmallText } from "../../../style/text";
import { StyledButtonFive } from "../../../style/buttons";
import { BEATS } from "../../../dummydata/dummy";
import { useQuery } from "react-query";
import { Product } from "../../../models/Product";
import { updateProduct } from "../../../apihandling/apiCalls";

const getProducts = async (): Promise<Product[]> =>
  await (await fetch("https://westbmusic.herokuapp.com/api/products")).json();

const EditProduct = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [productToDelete, setProductToDelete] = useState<string>();
  const { data } = useQuery<Product[]>("products", getProducts);

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    categories: [""],
    image: "",
    mp3: "",
    price: 0,
  });

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setProductToDelete(value);
  };
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

  const handleUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = productToDelete as string;
    updateProduct(id, userInput);
  };

  return (
    <div>
      <Form style={{ marginTop: "3em" }}>
        <Label>Velg det produktet du ønsker å endre</Label>
        <Select
          style={{ margin: ".5em auto 3em auto" }}
          onChange={handleSelectChange}
        >
          {data?.map((beat) => (
            <option key={beat._id} value={beat._id}>
              {beat._id}: {beat.title}, {beat.categories}, {beat.price}
            </option>
          ))}
        </Select>
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

export default EditProduct;
