import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const BannerImage = styled.img`
  width: 50%;
  max-height: 300px;
  margin: 0 auto;
  display: block;
  margin-top: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    width: 100%;
    max-height: 200px;
  }
`;

const BannerTitle = styled.h1`
  color: transparent;
  background: linear-gradient(to right, #ff4500, #ff8c00);
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export default {
  BannerContainer,
  BannerImage,
  BannerTitle,
};
