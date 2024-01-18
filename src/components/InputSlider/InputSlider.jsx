import {
  StyledInputSlider,
  SliderContainer,
  SliderInput,
  InfoContainer,
  InfoWrapper,
  PriceText,
  ValueName,
  ParticipantsContainer,
  ParticipantsNumber,
  ParticipantsText,
  DonateButton,
  SocialIconsContainer,
  SocialIcon,
  ProgressBar,
} from "./InputSliderStyles";
import "@fortawesome/fontawesome-free/css/all.min.css";

const InputSlider = () => {
  return (
    <StyledInputSlider>
      <SliderContainer>
        <ProgressBar progress={50} />
        <SliderInput type="range" min="0" max="100" />
      </SliderContainer>
      <InfoContainer>
        <InfoWrapper>
          <PriceText>R$ 200,00</PriceText>
          <ValueName>Valor de cada número</ValueName>
        </InfoWrapper>
        <ParticipantsContainer>
          <ParticipantsNumber>251</ParticipantsNumber>
          <ParticipantsText>Participantes</ParticipantsText>
        </ParticipantsContainer>
        <DonateButton>Doe e Concorra</DonateButton>
        <SocialIconsContainer>
          <SocialIcon className="fab fa-instagram"></SocialIcon>
          <SocialIcon className="fab fa-facebook"></SocialIcon>
          <SocialIcon className="fab fa-twitter"></SocialIcon>
        </SocialIconsContainer>
      </InfoContainer>
    </StyledInputSlider>
  );
};

export default InputSlider;
