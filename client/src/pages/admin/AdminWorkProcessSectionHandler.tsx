//Functions and hooks
import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import { getContent, updateContent } from "../../apihandling/apiCalls";

//styles
import { Wrapper, Form, Label, Input, ErrorMessage } from "../../style/forms";
import { Headline, UnderText } from "../../style/text";
import { StyledBlueButton } from "../../style/buttons";

//types
import { Content } from "../../models/Content";

const AdminWorkProcessSectionHandler = () => {
  const [errorState, setErrorState] = useState({
    isError: false,
    message: "",
    color: "",
  });
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
    heroimg: contents[0]?.heroimg,
    abouttitle: contents[0]?.abouttitle,
    aboutdesc: contents[0]?.aboutdesc,
    aboutimg: contents[0]?.aboutimg,
    workprocestitle: "",
    workprocessone: "",
    workprocesstwo: "",
    workprocessthree: "",
    workprocessfour: "",
    beatstitle: contents[0]?.beatstitle,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSendUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateContent(contents[0]._id, userInput);
    setErrorState({
      isError: true,
      message: "Innholdet er lagret i skyen!",
      color: "green",
    });
  };

  return (
    <Wrapper>
      <Headline>Jobbprosess</Headline>
      <UnderText>Rediger jobbprosess-seksjonen</UnderText>

      <Form style={{ marginTop: "3em" }}>
        <Label>Tittel</Label>
        <Input
          type="text"
          name="workprocestitle"
          placeholder="Hvordan Vi Jobber"
          onChange={handleChange}
        ></Input>
        <Label>Punkt 1</Label>
        <Input
          type="text"
          name="workprocessone"
          placeholder="Tekst for første del av prosessen"
          onChange={handleChange}
        ></Input>
        <Label>Punkt 2</Label>
        <Input
          type="text"
          name="workprocesstwo"
          placeholder="Tekst for andre del av prosessen"
          onChange={handleChange}
        ></Input>{" "}
        <Label>Punkt 3</Label>
        <Input
          type="text"
          name="workprocessthree"
          placeholder="Tekst for tredje del av prosessen"
          onChange={handleChange}
        ></Input>{" "}
        <Label>Punkt 4</Label>
        <Input
          type="text"
          name="workprocessfour"
          placeholder="Tekst for fjerde del av prosessen"
          onChange={handleChange}
        ></Input>
        <StyledBlueButton onClick={handleSendUpdate}>Send</StyledBlueButton>
        {errorState.isError && (
          <ErrorMessage style={{ color: `${errorState.color}` }}>
            {errorState.message}
          </ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default AdminWorkProcessSectionHandler;
