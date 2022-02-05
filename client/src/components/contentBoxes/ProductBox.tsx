//Functions
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import { Wrapper, ImageContainer, Image, Buttons } from "./ProductBox.styles";
import { Text, SmallText } from "../../style/text";
import {
  AiOutlineInfoCircle,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { PlayMusicAnimation, Circle } from "../../animations/animations";
//Types
import { Product } from "../../models/Product";

type Props = {
  clickedItem: Product;
  addToCart: (clickedItem: Product) => void;
};

const ProductBox: React.FC<Props> = ({ clickedItem, addToCart }) => {
  const [playing, setPlaying] = useState(false);
  let path = "";
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleNavigateToProductInfo = (item: Product) => {
    path = "/products/" + item._id;
    navigate(path);
  };

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const handlePlayPauseSong = () => {
    if (playing) {
      if (audioPlayer.current) {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
        setPlaying(false);
      }
    } else {
      if (audioPlayer.current) {
        setPlaying(true);

        audioPlayer.current.play();
        setPlaying(true);
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
              handlePlayPauseSong();
            }}
          />
        ) : (
          <AiOutlinePauseCircle
            fontSize={35}
            onClick={() => {
              handlePlayPauseSong();
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
