import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BEATS } from "../../dummydata/dummy";
import getWindowDimensions from "../../common/Dimentions";
import ProductBox from "../../components/contentBoxes/ProductBox";

const ItemCarouselle = () => {
  const { width } = getWindowDimensions();

  const showSlides = () => {
    if (width > 2000) {
      return 5;
    } else if (width < 2000 && width > 1500) {
      return 4;
    } else if (width < 1500 && width > 800) {
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
            title={beat.title}
            image={beat.image}
            details={beat.details}
            category={beat.category}
            price={beat.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ItemCarouselle;
