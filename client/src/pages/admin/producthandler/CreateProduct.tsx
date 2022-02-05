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

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const uploadedFile = e.currentTarget.files;
    const fileName = new Date().getTime() + uploadedFile![0].name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, uploadedFile![0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            setLoading({ loading: false, message: "Opplastingen pauset" });
            break;
          case "running":
            setLoading({ loading: true, message: "Laster opp filen" });
            break;
          default:
            setLoading({ loading: false, message: "" });
        }
      },
      (error) => {
        setLoading({ loading: false, message: "An error has occured" });
        setErrorState({
          isError: true,
          message: "Feil under opplasting av fil..",
          color: "red",
        });
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserInput({ ...userInput, [e.target.name]: downloadURL });
        });
        setLoading({ loading: false, message: "Filen er lastet opp!" });
        setErrorState({
          isError: true,
          message: "Filen er lastet opp!",
          color: "green",
        });
      }
    );
  };

  const handleAddNewProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Product: ", userInput);
    addProduct(userInput);
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
        <FileInput
          type="file"
          id="image"
          name="image"
          onChange={handleFileUpload}
        ></FileInput>
        <Label>Beat</Label>
        <FileInput
          type="file"
          id="mp3"
          name="mp3"
          onChange={handleFileUpload}
        ></FileInput>
        <StyledBlueButton onClick={handleAddNewProduct}>Send</StyledBlueButton>
        {loading && <p>{loading.message}</p>}
        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </div>
  );
};

export default CreateProduct;
