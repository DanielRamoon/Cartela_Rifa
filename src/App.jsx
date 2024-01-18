import RotatingBanner from "./components/RotatingBanner/RotatingBanner";
import Counter from "./components/Counter/Counter";
import InputSlider from "./components/InputSlider/InputSlider";
import Form from "./components/Form/Form";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const targetDate = new Date("2024-01-20T23:59:59");

  return (
    <AppContainer>
      <RotatingBanner />
      <Counter targetDate={targetDate} eventName="Ano Novo" />
      <InputSlider />
      <Form />
    </AppContainer>
  );
}

export default App;
