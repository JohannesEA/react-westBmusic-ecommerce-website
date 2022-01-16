import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Components
import SecondNavbar from "../../components/navbar/SecondNavbar";

//Styles
import {
  Wrapper,
  ProductContainer,
  ImageContainer,
  ProductDescription,
  Image,
  Buttons,
} from "./Product.styles";
import { Headline, Text } from "../../style/text";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
//Types
import { CartItemType } from "../../App";
import { BEATS } from "../../dummydata/dummy";

type Props = {
  addToCart: (clickedItem: CartItemType) => void;
};

const audioUrl = new Audio("/assets/sounds/panda.mp3");

const Product: React.FC<Props> = ({ addToCart }) => {
  const [playing, setPlaying] = useState(false);
  const [item, setItem] = useState({} as CartItemType);
  const location = useLocation();
  const id: number = +location.pathname.split("/")[2];

  const handlePlaySong = (url: string) => {
    if (playing) {
      setPlaying(false);
      audioUrl.pause();
    } else {
      setPlaying(true);
      audioUrl.play();
    }
  };

  useEffect(() => {
    const getProduct = () => {
      try {
        const res = BEATS.filter((x) => x.id === id);
        setItem(res[0]);
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, [id, item]);

  return (
    <Wrapper id="hero">
      <SecondNavbar />
      <Headline>{item.title}</Headline>
      <ProductContainer>
        <ImageContainer>
          <Image src={item.image} alt={item.title} />
        </ImageContainer>

        <ProductDescription>
          <Text>Beskrivelse: {item.description}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Kategori: {item.category}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Pris: {item.price}</Text>
        </ProductDescription>

        <Buttons>
          {!playing ? (
            <AiOutlinePlayCircle
              fontSize={50}
              onClick={() => {
                handlePlaySong("panda.mp3");
              }}
            />
          ) : (
            <AiOutlinePauseCircle
              fontSize={50}
              onClick={() => {
                handlePlaySong("panda.mp3");
              }}
            />
          )}
          <BsCartPlus fontSize={50} onClick={() => addToCart(item)} />
        </Buttons>
      </ProductContainer>
    </Wrapper>
  );
};

export default Product;
