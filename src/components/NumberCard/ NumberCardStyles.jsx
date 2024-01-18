import styled from "styled-components";

export const NumberCardContainer = styled.div`
  margin-top: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-right: 15px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 15px;
  background-color: ${(props) => (props.isTotal ? "#333" : "#f0f0f0")};
  color: ${(props) =>
    props.isTotal ? "#fff" : props.isSelected ? "#ff4500" : "#000"};
  cursor: ${(props) => (props.isTotal ? "auto" : "pointer")};

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 10px;
    position: relative;
    right: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  background-color: #cecece;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const TotalText = styled.span`
  color: #777;

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const TotalValue = styled.span`
  color: #777;
`;

export const MobileNumberGroup = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;

export const MobileNumber = styled.div`
  @media (max-width: 600px) {
    width: 25%;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
  }
`;
