import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Wrapper } from "./Error.styles";
import { Headline, UnderText } from "../../style/text";
import { StyledButtonSix } from "../../style/buttons";
import { Link as DomLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <SecondNavbar />
      <div className="confirm-container">
        <Headline>Obs</Headline>
        <UnderText>Det har skjedd en feil</UnderText>
        <div>
          <DomLink to="/">
            <StyledButtonSix>Tilbake Til Trygghet!</StyledButtonSix>
          </DomLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;
