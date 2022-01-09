import styled from "styled-components";
import Home from "./pages/home/Home";
import GlobalStyles from "./style/globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div``;
