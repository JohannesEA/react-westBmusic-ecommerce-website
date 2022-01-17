import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Wrapper } from "./Error.styles";
import { Headline, UnderText } from "../../style/text";
import { StyledBlueButton } from "../../style/buttons";
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
            <StyledBlueButton>Tilbake Til Trygghet!</StyledBlueButton>
          </DomLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;
