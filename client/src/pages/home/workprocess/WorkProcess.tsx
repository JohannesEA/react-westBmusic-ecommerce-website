import { useState } from "react";
import { Wrapper, Circle, Center } from "./WorkProcess.styles";
import { Headline, UnderText, Text, SmallText } from "../../../style/text";
import getWindowDimensions from "../../../common/Dimentions";
import { StyledButtonOne, StyledButtonTwo } from "../../../style/buttons";

type Props = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  undertitle: string;
};

const WorkProcess: React.FC<Props> = ({
  title,
  p1,
  p2,
  p3,
  p4,
  undertitle,
}) => {
  const { width } = getWindowDimensions();
  const [processText, setProcessText] = useState("Trykk på sirklene");
  const handleFirstStepContent = () => {
    setProcessText(p1);
  };

  const handleSecondStepContent = () => {
    setProcessText(p2);
  };

  const handleThirdStepContent = () => {
    setProcessText(p3);
  };

  const handleFourthStepContent = () => {
    setProcessText(p4);
  };
  return (
    <Wrapper>
      <Headline>{title}</Headline>
      <Center>
        {width > 1000 ? (
          <>
            <Circle onClick={handleFirstStepContent}>1</Circle>{" "}
            ____________________{" "}
            <Circle onClick={handleSecondStepContent}>2</Circle>{" "}
            ____________________{" "}
            <Circle onClick={handleThirdStepContent}>3</Circle>{" "}
            ____________________{" "}
            <Circle onClick={handleFourthStepContent}>4</Circle>
          </>
        ) : (
          <>
            <Circle onClick={handleFirstStepContent}>1</Circle>
            _____
            <Circle onClick={handleSecondStepContent}>2</Circle>
            _____
            <Circle onClick={handleThirdStepContent}>3</Circle>
            _____
            <Circle onClick={handleFourthStepContent}>4</Circle>
          </>
        )}
      </Center>
      <br></br>
      <Text>{processText}</Text>
    </Wrapper>
  );
};

export default WorkProcess;
