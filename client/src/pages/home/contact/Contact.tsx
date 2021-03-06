import { useState } from "react";

//Styles
import {
  Wrapper,
  ContactContainer,
  ContactInfoContainer,
} from "./Contact.styles";
import { Headline, SmallText } from "../../../style/text";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  Form,
  Label,
  Input,
  TextArea,
  ErrorMessage,
} from "../../../style/forms";

import { StyledBlueButton } from "../../../style/buttons";
const Contact = () => {
  const [messageState, setMessageState] = useState({
    isError: false,
    message: "",
  });

  return (
    <Wrapper id="contact">
      <Headline>Kontakt Oss</Headline>
      <br></br>

      <Form>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <ContactContainer>
          <ContactInfoContainer>
            <BsFillPhoneFill fontSize={30} color="black" />
            <SmallText>+47 99509035</SmallText>
          </ContactInfoContainer>

          <ContactInfoContainer>
            <MdEmail fontSize={30} color="black" />
            <SmallText>westbmusic@gmail.com</SmallText>
          </ContactInfoContainer>
        </ContactContainer>
        <Label>Navn</Label>
        <Input placeholder="Ola normann" />
        <Label>Epost</Label>
        <Input placeholder="olanormann@gmail.com" />
        <Label>Mobilnummer</Label>
        <Input placeholder="+47 99509035" />
        <Label>Tittel</Label>
        <Input placeholder="Bestilling av beat" />
        <Label>Melding</Label>
        <TextArea placeholder="Hei! Jeg ønsker å bestille en beat.." />
        <StyledBlueButton
          onClick={() =>
            setMessageState({ isError: true, message: "Feil i en av feltene" })
          }
        >
          Send
        </StyledBlueButton>

        {messageState.isError && (
          <ErrorMessage>{messageState.message}</ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default Contact;
