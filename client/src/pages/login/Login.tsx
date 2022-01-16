import { useState, MouseEvent, ChangeEvent } from "react";

//components
import SecondNavbar from "../../components/navbar/SecondNavbar";

//styles
import { Wrapper, Form, Label, Input, ErrorMessage } from "../../style/forms";
import { Text, SmallText } from "../../style/text";
import { StyledButtonFour } from "../../style/buttons";

//functions
import { login } from "../../apihandling/apiCalls";

const Login = () => {
  const [errorState, setErrorState] = useState({ isError: false, message: "" });
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (userInput.password !== "" && userInput.username !== "") {
        login(userInput);
        setErrorState({
          isError: false,
          message: "",
        });
      } else {
        setErrorState({
          isError: true,
          message: "Brukernavn og passord feltene trenger verdier.",
        });
      }
    } catch (error) {
      console.log(error);
      setErrorState({
        isError: true,
        message: "Feil brukernavn eller passord",
      });
    }
  };

  return (
    <Wrapper>
      <SecondNavbar />
      <Form style={{ marginTop: "3em" }}>
        <Text style={{ color: "var(--color-1)" }}>Logg Inn</Text>
        <SmallText style={{ color: "var(--color-1)" }}>
          (Kun for admin)
        </SmallText>
        <Label>Brukernavn</Label>
        <Input
          name="username"
          placeholder="olanormann123"
          onChange={handleChange}
        ></Input>
        <Label>Passord</Label>
        <Input
          name="password"
          placeholder="********"
          onChange={handleChange}
        ></Input>

        <StyledButtonFour
          style={{ margin: "1em auto 0em auto" }}
          onClick={handleLogin}
        >
          Logg Inn
        </StyledButtonFour>

        {errorState.isError && (
          <ErrorMessage>{errorState.message}</ErrorMessage>
        )}
      </Form>
    </Wrapper>
  );
};

export default Login;
