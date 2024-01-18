import styled from "styled-components";

export const StyledInputSlider = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SliderInput = styled.input`
  width: 50%;
  height: 100%;
  appearance: none;
  outline: none;
  background: transparent;
  position: absolute;
  top: 30px;
  left: 40px;
  margin: 0;
  padding: 0;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ff4500;
    border-radius: 4px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: #ff4500;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -4px;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    left: 5%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  text-align: left;
`;

export const PriceText = styled.div`
  color: #ff4500;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ValueName = styled.div`
  color: #999;
`;

export const ParticipantsContainer = styled.div`
  text-align: right;
  margin-top: 10px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ParticipantsNumber = styled.div`
  color: #333;
  font-weight: bold;
  margin-top: 8px;
`;

export const ParticipantsText = styled.div`
  color: #666;
`;

export const DonateButton = styled.button`
  background-color: #e04100;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  width: 190px;

  &:hover {
    background-color: #ff7f50;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    left: 2%;
  }
`;

export const SocialIcon = styled.i`
  font-size: 25px;
  color: #ff4500;
  margin-right: 10px;
`;

export const ProgressBar = styled.div``;
