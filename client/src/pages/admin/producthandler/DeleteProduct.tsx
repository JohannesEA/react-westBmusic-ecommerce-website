import { useState } from "react";
import { Form, Label, ErrorMessage, Select } from "../../../style/forms";
import { StyledButtonFive } from "../../../style/buttons";
import { BEATS } from "../../../dummydata/dummy";

const DeleteProduct = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [productToDelete, setProductToDelete] = useState();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Form style={{ marginTop: "3em" }}>
        <Label>Velg det produktet du ønsker å slette</Label>
        <Select style={{ margin: ".5em auto 3em auto" }}>
          {BEATS.map((beat) => (
            <option key={beat.id}>
              {beat.id}: {beat.title}, {beat.category}, {beat.price}
            </option>
          ))}
        </Select>

        <StyledButtonFive
          onClick={() =>
            setErrorState({
              isError: true,
              message: "Feil brukernavn eller passord.",
            })
          }
        >
          Send
        </StyledButtonFive>
        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </div>
  );
};

export default DeleteProduct;
