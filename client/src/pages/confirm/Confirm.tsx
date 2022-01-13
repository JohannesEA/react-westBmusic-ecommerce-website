import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Wrapper } from "./Confirm.styles";
import { Headline, UnderText } from "../../style/text";
import { StyledButtonSix } from "../../style/buttons";
import { Link as DomLink } from "react-router-dom";

const Confirm = () => {
  return (
    <Wrapper>
      <SecondNavbar />
      <div className="confirm-container">
        <Headline>Takk for at du ønsker å komme i kontakt med oss.</Headline>
        <UnderText>Vi svarer deg så fort vi kan</UnderText>
        <div>
          {" "}
          <DomLink to="/">
            <StyledButtonSix>Tilbake Til Hovedsiden</StyledButtonSix>
          </DomLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Confirm;
