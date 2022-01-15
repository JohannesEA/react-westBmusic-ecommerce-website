import { useState, useEffect, useRef } from "react";
import getWindowDimensions from "../../common/Dimentions";
import { Wrapper, ImageContainer, Image, Buttons } from "./ProductBox.styles";
import { Text, SmallText } from "../../style/text";
import {
  AiOutlineInfoCircle,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { CartItemType } from "../../App";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AudioPlay } from "./AudioPlay";

type Props = {
  clickedItem: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  // removeFromCart: (id: number) => void;
};

const audioUrl = new Audio("/assets/sounds/panda.mp3");

const ProductBox: React.FC<Props> = ({ clickedItem, addToCart }) => {
  const { width } = getWindowDimensions();
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [playing, setPlaying] = useState(false);
  let path = "";
  const navigate = useNavigate();

  const handleNavigateToProductInfo = (item: CartItemType) => {
    path = "/products/" + item.id;
    navigate(path);
  };

  const handlePlaySong = (url: string) => {
    if (playing) {
      setPlaying(false);
      audioUrl.pause();
    } else {
      setPlaying(true);
      audioUrl.play();
    }
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

        {!playing ? (
          <AiOutlinePlayCircle
            fontSize={35}
            onClick={() => {
              handlePlaySong("panda.mp3");
            }}
          />
        ) : (
          <AiOutlinePauseCircle
            fontSize={35}
            onClick={() => {
              handlePlaySong("panda.mp3");
            }}
          />
        )}

        <BsCartPlus onClick={() => addToCart(clickedItem)} fontSize={35} />
      </Buttons>
    </Wrapper>
  );
};

export default ProductBox;
