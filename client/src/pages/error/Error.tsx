//functions/hooks
import { Link as DomLink } from "react-router-dom";
import { ScrollToTop } from "../../common/Functions";
//styles
import { Wrapper } from "./Error.styles";
import { Headline, UnderText } from "../../style/text";
import { StyledBlueButton } from "../../style/buttons";

//components
import SecondNavbar from "../../components/navbar/SecondNavbar";

const Error = () => {
  ScrollToTop();
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
