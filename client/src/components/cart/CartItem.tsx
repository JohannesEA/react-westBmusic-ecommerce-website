import React from "react";

//Components
import { Product } from "../../models/Product";
import Button from "@material-ui/core/Button";

//Styles
import { Wrapper } from "./CartItems.styles";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  item: Product;
  removeFromCart: (item: Product) => void;
};

const CartItem: React.FC<Props> = ({ item, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="informations">
          <p>Price: ${item.price}</p>
        </div>

        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item)}
          >
            <AiOutlineDelete fontSize={20} />
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title}></img>
    </Wrapper>
  );
};

export default CartItem;
