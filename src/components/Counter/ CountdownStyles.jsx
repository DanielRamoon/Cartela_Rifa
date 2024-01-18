import styled from "styled-components";

export const CountdownWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 10px;

  @media (min-width: 600px) {
    flex-direction: row;
    margin-top: 10px;
    margin-right: 39%;
  }
`;

export const ConsultButton = styled.button`
  border: 2px solid #ff4500;
  border-radius: 12px;
  padding: 10px;
  background-color: transparent;
  color: #ff4500;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  margin-left: 5%;
  margin-top: 10px;
  position: relative;
  top: -10px;

  &:hover {
    background-color: #ff4500;
    color: #fff;
  }

  @media (min-width: 600px) {
    margin-left: 27%;
    margin-top: 25px;
    top: 25px;
  }
`;

export const CountdownItem = styled.div`
  text-align: center;
`;

export const CountdownNumber = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 8px;
  font-size: 34px;
  font-weight: bold;
`;

export const CountdownLabel = styled.span`
  color: #555;
`;

export const CountdownText = styled.div`
  color: #ff4500;
  font-size: 18px;
  margin-right: 5%;
  margin-top: 10px;

  @media (min-width: 600px) {
    margin-right: 39%;
    margin-top: -20px;
  }
`;
