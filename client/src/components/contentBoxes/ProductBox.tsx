import getWindowDimensions from "../../common/Dimentions";
import { Wrapper, ImageContainer, Image, Buttons } from "./ProductBox.styles";
import { Text, SmallText } from "../../style/text";
import { StyledButtonFour } from "../../style/buttons";
import { AiFillPlayCircle } from "react-icons/ai";

type Props = {
  title: string;
  image: string;
  details: string;
  category: string;
  price: string;
};

const ProductBox: React.FC<Props> = ({
  title,
  image,
  details,
  category,
  price,
}) => {
  const { width } = getWindowDimensions();

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>

      <Text>{details}</Text>

      <Text>[{category}]</Text>

      <SmallText>Pris: {price}</SmallText>
      <br />

      <Buttons className="slider-item-buttons">
        <StyledButtonFour>Mer Info</StyledButtonFour>
        <AiFillPlayCircle fontSize={35} />
      </Buttons>
    </Wrapper>
  );
};

export default ProductBox;
