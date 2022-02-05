import { useState, useRef } from "react";
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
import { PlayMusicAnimation, Circle } from "../../animations/animations";

//Types
import { Product } from "../../models/Product";
import { useQuery } from "react-query";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const ProductPage: React.FC<Props> = ({ addToCart }) => {
  const [playing, setPlaying] = useState(false);
  const [item, setItem] = useState({} as Product);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const getProduct = async (): Promise<Product> =>
    await (
      await fetch("https://westbmusic.herokuapp.com/api/products/find/" + id)
    ).json();

  const { data, isLoading, error } = useQuery<Product>("product", getProduct);

  const audioPlayer = useRef<HTMLAudioElement>(null);

  //Convert firebase file to mp3 file.
  //Then play song. 

  const handlePlaySong = (): void => {
    if (playing) {
      if (audioPlayer.current) {
        setPlaying(false);
        audioPlayer.current.pause();
      }
    } else {
      if (audioPlayer.current) {
        setPlaying(true);
        audioPlayer.current.play();
      }
    }
  };

  console.log(data);

  return (
    <Wrapper id="hero">
      <SecondNavbar />
      <audio ref={audioPlayer} src={data?.mp3} preload="metadata"></audio>

      <Headline>{data?.title}</Headline>
      <ProductContainer>
        <ImageContainer>
          <Image src={data?.image} alt={data?.title} />
        </ImageContainer>

        <ProductDescription>
          <Text>Beskrivelse: {data?.description}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Kategori(er): {data?.categories.toString().split(" ", 2)}</Text>
        </ProductDescription>

        <ProductDescription>
          <Text>Pris: {data?.price},- NOK</Text>
        </ProductDescription>

        <Buttons>
          {!playing ? (
            <AiOutlinePlayCircle
              fontSize={50}
              onClick={() => {
                handlePlaySong();
              }}
            />
          ) : (
            <AiOutlinePauseCircle
              fontSize={50}
              onClick={() => {
                handlePlaySong();
              }}
            />
          )}
          <BsCartPlus
            fontSize={50}
            onClick={() => addToCart(data as Product)}
          />
        </Buttons>
        {playing && (
          <PlayMusicAnimation>
            <Circle />
          </PlayMusicAnimation>
        )}
      </ProductContainer>
    </Wrapper>
  );
};

export default ProductPage;
