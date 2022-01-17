//Functions
import { getProducts } from "../../apihandling/apiCalls";
import { useState, useEffect } from "react";

//Components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getWindowDimensions from "../../common/Dimentions";
import ProductBox from "../../components/contentBoxes/ProductBox";
//Styles
import { Product } from "../../models/Product";

//Call api

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const ItemCarouselle: React.FC<Props> = ({ addToCart }) => {
  const { width } = getWindowDimensions();
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    const getAllProducts = async () => {
      getProducts().then((products) => {
        setProducts(products as Product[]);
      });
    };

    getAllProducts();
  }, [products]);

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
        {products?.map((beat) => (
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
