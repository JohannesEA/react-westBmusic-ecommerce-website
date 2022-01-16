import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import { Form, Label, ErrorMessage, Select } from "../../../style/forms";
import { StyledButtonFive } from "../../../style/buttons";
import { deleteProduct } from "../../../apihandling/apiCalls";
import { BEATS } from "../../../dummydata/dummy";
import { useQuery } from "react-query";
import { Product } from "../../../models/Product";

const getProducts = async (): Promise<Product[]> =>
  await (await fetch("https://westbmusic.herokuapp.com/api/products")).json();

const DeleteProduct = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [productToDelete, setProductToDelete] = useState<string>();
  const { data } = useQuery<Product[]>("products", getProducts);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setProductToDelete(value);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = productToDelete as string;
    deleteProduct(id);
  };

  return (
    <div>
      <Form style={{ marginTop: "3em" }}>
        <Label>Velg det produktet du ønsker å slette</Label>
        <Select
          style={{ margin: ".5em auto 3em auto" }}
          onChange={handleChange}
        >
          {data?.map((beat) => (
            <option key={beat._id} value={beat._id}>
              {beat._id}: {beat.title}, {beat.categories}, {beat.price}
            </option>
          ))}
        </Select>

        <StyledButtonFive onClick={handleDelete}>Send</StyledButtonFive>
        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </div>
  );
};

export default DeleteProduct;
