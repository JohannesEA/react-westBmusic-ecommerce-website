import { useState } from "react";
import { Buttons } from "./AdminProductsHandler.styles";
import { Headline, UnderText } from "../../../style/text";
import { StyledBlueButton } from "../../../style/buttons";
import { Wrapper } from "../../../style/forms";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const AdminProductsHandler = () => {
  const [state, setState] = useState({
    create: false,
    edit: false,
    delete: false,
  });

  // const handleTest = () => {
  //   setState({ create: false, edit: false, delete: true });

  //   console.log(state);
  // };

  return (
    <Wrapper>
      <Headline>Produkt</Headline>
      <UnderText>Last opp, endre eller slett ett produkt</UnderText>
      <Buttons>
        <StyledBlueButton
          onClick={() => setState({ create: true, edit: false, delete: false })}
        >
          Lag
        </StyledBlueButton>
        <StyledBlueButton
          onClick={() => setState({ create: false, edit: true, delete: false })}
        >
          Endre
        </StyledBlueButton>
        <StyledBlueButton
          onClick={() => setState({ create: false, edit: false, delete: true })}
        >
          Slett
        </StyledBlueButton>
      </Buttons>
      {state.create && <CreateProduct />}
      {state.edit && <EditProduct />}
      {state.delete && <DeleteProduct />}
    </Wrapper>
  );
};

export default AdminProductsHandler;
