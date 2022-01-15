import { useState } from "react";
import getWindowDimensions from "../../common/Dimentions";
import { Wrapper, ImageContainer, Image, Buttons } from "./ProductBox.styles";
import { Text, SmallText } from "../../style/text";
import { StyledButtonSeven } from "../../style/buttons";
import {
  AiFillPlayCircle,
  AiOutlineInfoCircle,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { CartItemType } from "../../App";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

type Props = {
  clickedItem: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  // removeFromCart: (id: number) => void;
};

const ProductBox: React.FC<Props> = ({ clickedItem, addToCart }) => {
  const { width } = getWindowDimensions();
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  let path = "";
  const navigate = useNavigate();

  const handleNavigateToProductInfo = (item: CartItemType) => {
    path = "/products/" + item.id;
    navigate(path);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={clickedItem.image} alt={clickedItem.title} />
      </ImageContainer>

      <Text>{clickedItem.description}</Text>

      <Text>[{clickedItem.category}]</Text>

      <SmallText>Pris: {clickedItem.price}</SmallText>
      <br />

      <Buttons>
        <AiOutlineInfoCircle
          fontSize={35}
          onClick={() => handleNavigateToProductInfo(clickedItem)}
        ></AiOutlineInfoCircle>
        <AiOutlinePlayCircle fontSize={35} />
        <BsCartPlus onClick={() => addToCart(clickedItem)} fontSize={35} />
      </Buttons>
    </Wrapper>
  );
};

export default ProductBox;
