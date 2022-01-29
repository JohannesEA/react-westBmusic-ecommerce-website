//Functions
//Functions and hooks
import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
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
import { StyledBlueButton } from "../../../style/buttons";
// import { Product } from "../../../models/Product";

const CreateProduct = () => {
  const [errorState, setErrorState] = useState({
    isError: false,
    message: "",
    color: "",
  });
  const [loading, setLoading] = useState({ loading: false, message: "" });
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    categories: [""],
    image: "",
    mp3: "",
    price: 0,
  });

  const stringToBlog = (txt: string) => new Blob([txt]);

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

  // const handleImageUpload = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   (document.getElementById("image") as HTMLFormElement).click();
  // };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;

    const fileName = new Date().getTime() + value;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const file = stringToBlog(value);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setLoading({ loading: true, message: "paused" });

        switch (snapshot.state) {
          case "paused":
            setLoading({ loading: true, message: "paused" });
            break;
          case "running":
            setLoading({ loading: true, message: `${progress} % ferdig` });
            break;
        }
      },
      (error) => {
        console.log(error);
        setErrorState({
          isError: true,
          message: "Feil under opplasting av fil..",
          color: "red",
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserInput({ ...userInput, [name]: downloadURL });
          setErrorState({
            isError: true,
            message: "Filen er lastet opp!",
            color: "green",
          });
          setLoading({ loading: false, message: "" });
        });
      }
    );
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
        {/* <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={handleImageUpload}
        >
          <SmallText>Last Opp Bilde</SmallText>
          <FileInput
            id="image"
            name="image"
            onChange={handleChange}
          ></FileInput>
        </FileInputContainer> */}

        <FileInput
          id="image"
          name="image"
          onChange={handleFileUpload}
        ></FileInput>

        <Label>Beat</Label>

        <FileInput id="mp3" name="mp3" onChange={handleFileUpload}></FileInput>
        {/* <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={handleMp3Upload}
        >
          <SmallText>Last Opp Beat</SmallText>
          <FileInput id="mp3" name="mp3" onChange={handleChange}></FileInput>
        </FileInputContainer> */}
        <StyledBlueButton onClick={handleAddNewProduct}>Send</StyledBlueButton>
        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </div>
  );
};

export default CreateProduct;
