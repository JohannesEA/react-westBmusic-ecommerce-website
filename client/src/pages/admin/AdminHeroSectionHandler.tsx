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

  const handleUpdateHeroContent = (e: ChangeEvent<HTMLInputElement>) => {
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
          message: "Feil under opplasting av bilde..",
          color: "red",
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserInput({ ...userInput, [name]: downloadURL });
          setErrorState({
            isError: true,
            message: "Bildet er lastet opp!",
            color: "green",
          });
          setLoading({ loading: false, message: "" });
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
        {/* <FileInputContainer
          style={{ marginBottom: "1em" }}
          onClick={() =>
            (document.getElementById("file") as HTMLFormElement).click()
          }
        > */}
        <SmallText>Last Opp Bilde</SmallText>
        <FileInput
          id="file"
          name="heroimg"
          onChange={handleUpdateHeroContent}
        ></FileInput>
        {/* </FileInputContainer> */}

        <div>
          {" "}
          {/* <StyledBlueButton onClick={handleUpdateHeroContent}>
            Last opp
          </StyledBlueButton> */}
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
