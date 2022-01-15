import React from "react";

//Components
import { CartItemType } from "../../App";
import Button from "@material-ui/core/Button";

//Styles
import { Wrapper } from "./CartItems.styles";

type Props = {
  item: CartItemType;
  removeFromCart: (item: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({ item, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="informations">
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price.toFixed(2)}</p>
        </div>

        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item)}
          >
            -
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title}></img>
    </Wrapper>
  );
};

export default CartItem;
