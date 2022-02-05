//Functions/Hooks
import { useState, MouseEvent, useEffect, ChangeEvent } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { getContent, updateContent } from "../../apihandling/apiCalls";

//types
import { Content } from "../../models/Content";

//Styles
import {
  Wrapper,
  Form,
  Label,
  ErrorMessage,
  FileInput,
} from "../../style/forms";
import { Headline, UnderText, SmallText } from "../../style/text";
import { StyledBlueButton } from "../../style/buttons";

const AdminHeroSectionHandler = () => {
  const [errorState, setErrorState] = useState({
    isError: false,
    message: "",
    color: "",
  });
  const [loading, setLoading] = useState({ loading: false, message: "" });
  const [contents, setContents] = useState([] as Content[]);

  useEffect(() => {
    const getAllContent = async () => {
      getContent().then((c) => {
        setContents(c as Content[]);
      });
    };

    getAllContent();
  }, []);

  const [userInput, setUserInput] = useState({
    _id: contents[0]?._id,
    herotitle: contents[0]?.herotitle,
    heroimg: "",
    abouttitle: contents[0]?.abouttitle,
    aboutdesc: contents[0]?.aboutdesc,
    aboutimg: contents[0]?.aboutimg,
    workprocestitle: contents[0]?.workprocestitle,
    workprocessone: contents[0]?.workprocessone,
    workprocesstwo: contents[0]?.workprocesstwo,
    workprocessthree: contents[0]?.workprocessthree,
    workprocessfour: contents[0]?.workprocessfour,
    beatstitle: contents[0]?.beatstitle,
  });
  const stringToBlog = (txt: string) => new Blob([txt]);

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

  const handleSendUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateContent(contents[0]._id, userInput);
    setErrorState({
      isError: true,
      message: "Bildet er lagret i skyen!",
      color: "green",
    });
  };

  return (
    <Wrapper>
      <Headline>Hero</Headline>
      <UnderText>Rediger bilde for hero seksjonen</UnderText>
      <Form style={{ marginTop: "3em" }}>
        <Label>Bilde</Label>
        <SmallText>Last Opp Bilde</SmallText>
        <FileInput
          type="file"
          id="file"
          name="heroimg"
          onChange={handleFileUpload}
        ></FileInput>
        <div>
          <StyledBlueButton onClick={handleSendUpdate}>Send</StyledBlueButton>
        </div>
        {loading.loading && (
          <p style={{ color: "black" }}>Laster opp bildet...</p>
        )}

        {errorState.isError && (
          <ErrorMessage style={{ color: `${errorState.color}` }}>
            {errorState.message}
          </ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default AdminHeroSectionHandler;
