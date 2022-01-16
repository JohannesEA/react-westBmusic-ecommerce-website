import { useState, useRef } from "react";
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
import { PlayMusicAnimation, Circle } from "../../animations/animations";

type Props = {
  clickedItem: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  // removeFromCart: (id: number) => void;
};

const ProductBox: React.FC<Props> = ({ clickedItem, addToCart }) => {
  const [playing, setPlaying] = useState(false);
  let path = "";
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleNavigateToProductInfo = (item: CartItemType) => {
    path = "/products/" + item._id;
    navigate(path);
  };

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const handlePlaySong = () => {
    if (playing) {
      if (audioPlayer.current) {
        setPlaying(false);
        setIsActive(false);
        audioPlayer.current.pause();
      }
    } else {
      if (audioPlayer.current) {
        setPlaying(true);
        setIsActive(true);
        audioPlayer.current.play();
      }
    }
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={clickedItem.image} alt={clickedItem.title + "-bilde"} />
      </ImageContainer>

      <audio ref={audioPlayer} src={clickedItem.mp3} preload="metadata"></audio>

      <Text>{clickedItem.title}</Text>

      <Text>[{clickedItem.categories.toString().split(" ", 2)}]</Text>

      <SmallText>Pris: {clickedItem.price} NOK</SmallText>
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
              handlePlaySong();
            }}
          />
        ) : (
          <AiOutlinePauseCircle
            fontSize={35}
            onClick={() => {
              handlePlaySong();
            }}
          />
        )}

        <BsCartPlus onClick={() => addToCart(clickedItem)} fontSize={35} />
      </Buttons>

      {playing && (
        <PlayMusicAnimation>
          <Circle />
        </PlayMusicAnimation>
      )}
    </Wrapper>
  );
};

export default ProductBox;
