//functions/hooks
import { Link as DomLink } from "react-router-dom";
import { ScrollToTop } from "../../common/Functions";
//styles
import { Wrapper } from "./Confirm.styles";
import { Headline, UnderText } from "../../style/text";
import { StyledBlueButton } from "../../style/buttons";
//components
import SecondNavbar from "../../components/navbar/SecondNavbar";

const Confirm = () => {
  ScrollToTop();
  return (
    <Wrapper>
      <SecondNavbar />
      <div className="confirm-container">
        <Headline>Takk for at du ønsker å komme i kontakt med oss.</Headline>
        <UnderText>Vi svarer deg så fort vi kan</UnderText>
        <div>
          {" "}
          <DomLink to="/">
            <StyledBlueButton>Tilbake Til Hovedsiden</StyledBlueButton>
          </DomLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Confirm;
