//Components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getWindowDimensions from "../../common/Dimentions";
import ProductBox from "../../components/contentBoxes/ProductBox";
//Styles
import { CartItemType } from "../../App";
import { useQuery } from "react-query";

//Call api
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://westbmusic.herokuapp.com/api/products")).json();

type Props = {
  addToCart: (clickedItem: CartItemType) => void;
};

const ItemCarouselle: React.FC<Props> = ({ addToCart }) => {
  const { width } = getWindowDimensions();
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const showSlides = () => {
    if (width > 2500) {
      return 5;
    } else if (width < 2500 && width > 2000) {
      return 4;
    } else if (width < 2000 && width > 800) {
      return 3;
    } else if (width < 800 && width > 500) {
      return 2;
    } else {
      return 1;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: showSlides(),
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      style={{ minHeight: "30em", padding: " 0 1em 3em 1em", color: "white" }}
    >
      <Slider {...settings}>
        {data?.map((beat) => (
          <ProductBox
            key={beat.title}
            clickedItem={beat}
            addToCart={addToCart}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ItemCarouselle;
