import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BEATS } from "../../dummydata/dummy";
import "./itemcarouselle.css";
import { StyledButtonFour } from "../../style/buttons";
import { AiFillPlayCircle } from "react-icons/ai";
import getWindowDimensions from "../../common/Dimentions";
import { Text, SmallText } from "../../style/text";

const ItemCarouselle = () => {
  const { width } = getWindowDimensions();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 800 ? 3 : 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {BEATS.map((beat) => (
          <div key={beat.id} className="slider-item-container">
            <div className="img-container">
              <img
                className="slider-item-img"
                src={beat.image}
                alt={beat.title}
              />
            </div>
            <br />
            <Text>{beat.details}</Text>
            <br />

            <SmallText>Pris: {beat.price}</SmallText>
            <br />

            <div className="slider-item-buttons">
              <StyledButtonFour>Mer Info</StyledButtonFour>
              <AiFillPlayCircle fontSize={35} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ItemCarouselle;
