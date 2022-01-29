//functions
import { useState, useEffect } from "react";
import { Link as DomLink } from "react-router-dom";

//styles
import { Wrapper } from "./Hero.styles";
import { StyledTransparentButton } from "../../../style/buttons";

export type Props = {
  image: string;
};

const Hero: React.FC<Props> = ({ image }) => {
  return (
    <Wrapper id="hero" image={image}>
      <div className="hero-right">
        <DomLink to="/products" style={{ width: "100%" }}>
          <StyledTransparentButton>Beats</StyledTransparentButton>
        </DomLink>
      </div>
    </Wrapper>
  );
};

export default Hero;
