import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BEATS } from "../../dummydata/dummy";
import getWindowDimensions from "../../common/Dimentions";
import ProductBox from "../../components/contentBoxes/ProductBox";
import { CartItemType } from "../../App";

type Props = {
  addToCart: (clickedItem: CartItemType) => void;
};

const ItemCarouselle: React.FC<Props> = ({ addToCart }) => {
  const { width } = getWindowDimensions();

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
        {BEATS.map((beat) => (
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
