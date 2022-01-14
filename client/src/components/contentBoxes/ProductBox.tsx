import { useState } from "react";
import getWindowDimensions from "../../common/Dimentions";
import { Wrapper, ImageContainer, Image, Buttons } from "./ProductBox.styles";
import { Text, SmallText } from "../../style/text";
import { StyledButtonFour } from "../../style/buttons";
import { AiFillPlayCircle } from "react-icons/ai";
import { CartItemType } from "../../App";
import { useNavigate } from "react-router-dom";

type Props = {
  item: CartItemType;
  // addToCart: (clickedItem: CartItemType) => void;
  // removeFromCart: (id: number) => void;
};

const ProductBox: React.FC<Props> = ({ item }) => {
  const { width } = getWindowDimensions();
  const [selectedProd, setSelectedProd] = useState({});
  let path = "";
  const navigate = useNavigate();

  const handleClick = (item: CartItemType) => {
    path = "/products/" + item.id;
    navigate(path);
  };
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={item.image} alt={item.title} />
      </ImageContainer>

      <Text>{item.description}</Text>

      <Text>[{item.category}]</Text>

      <SmallText>Pris: {item.price}</SmallText>
      <br />

      <Buttons className="slider-item-buttons">
        <StyledButtonFour onClick={() => handleClick(item)}>
          Mer Info
        </StyledButtonFour>
        <AiFillPlayCircle fontSize={35} />
      </Buttons>
    </Wrapper>
  );
};

export default ProductBox;
