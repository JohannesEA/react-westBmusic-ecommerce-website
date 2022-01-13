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
  ErrorMessage,
  ConfirmMessage,
} from "../../../style/forms";
import { StyledButtonFive } from "../../../style/buttons";
const Contact = () => {
  return (
    <Wrapper>
      <Headline>Kontakt Oss</Headline>
      <br></br>

      <Form>
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
        <Input placeholder="navn" />
        <Label>Epost</Label>
        <Input placeholder="epost" />
        <Label>Mobilnummer</Label>
        <Input placeholder="mobilnummer" />
        <Label>Tittel</Label>
        <Input placeholder="navn" />
        <Label>Melding</Label>
        <Input placeholder="navn" />
        <StyledButtonFive>Send</StyledButtonFive>
      </Form>
    </Wrapper>
  );
};

export default Contact;
