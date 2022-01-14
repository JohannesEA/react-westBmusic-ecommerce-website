import { useState } from "react";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Wrapper, Form, Label, Input, ErrorMessage } from "../../style/forms";
import { Text, SmallText } from "../../style/text";
import { StyledButtonFive } from "../../style/buttons";

const Login = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  //   const handleChange = (e: { preventDefault: () => void }) => {
  //     const value = e.target.value;
  //     setUserInput({ ...userInput, [name]: value });
  //   };

  return (
    <Wrapper>
      <SecondNavbar />
      <Form style={{ marginTop: "3em" }}>
        <Text style={{ color: "var(--color-1)" }}>Logg Inn</Text>
        <SmallText style={{ color: "var(--color-1)" }}>
          (Kun for admin)
        </SmallText>
        <Label>Brukernavn</Label>
        <Input name="username" placeholder="olanormann123"></Input>
        <Label>Passowrd</Label>
        <Input name="password" placeholder="********"></Input>
        <StyledButtonFive
          onClick={() =>
            setErrorState({
              isError: true,
              message: "Feil brukernavn eller passord.",
            })
          }
        >
          Logg Inn
        </StyledButtonFive>

        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default Login;
