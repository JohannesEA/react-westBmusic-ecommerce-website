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
  item: CartItemType;
  // addToCart: (clickedItem: CartItemType) => void;
  // removeFromCart: (id: number) => void;
};

const ProductBox: React.FC<Props> = ({ item }) => {
  const { width } = getWindowDimensions();
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  let path = "";
  const navigate = useNavigate();

  const handleNavigateToProductInfo = (item: CartItemType) => {
    path = "/products/" + item.id;
    navigate(path);
  };

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === item.id);
      if (isItemInCart) {
        alert("Produktet er allerede lagt til i handlekurven.");
        return [...prev, { ...item }];
      } else {
        alert(`Produktet ${prev} er lagt til i handlekurven.`);

        localStorage.setItem(
          "cartItems",
          JSON.stringify([...prev, { ...item }])
        );
        return [...prev, { ...item }];
      }
    });
  };

  console.log(localStorage.getItem("cartItems"));

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={item.image} alt={item.title} />
      </ImageContainer>

      <Text>{item.description}</Text>

      <Text>[{item.category}]</Text>

      <SmallText>Pris: {item.price}</SmallText>
      <br />

      <Buttons>
        <AiOutlineInfoCircle
          fontSize={35}
          onClick={() => handleNavigateToProductInfo(item)}
        ></AiOutlineInfoCircle>
        <AiOutlinePlayCircle fontSize={35} />
        <BsCartPlus onClick={() => handleAddToCart()} fontSize={35} />
      </Buttons>
    </Wrapper>
  );
};

export default ProductBox;
