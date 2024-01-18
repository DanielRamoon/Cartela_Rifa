import { useState } from "react";
import {
  NumberCardContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TotalContainer,
  TotalText,
  TotalValue,
} from "./ NumberCardStyles";

function NumberCard() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const valuePerNumber = 200;

  const handleNumberClick = (number) => {
    if (number > 0 && number <= 40) {
      const updatedNumbers = [...selectedNumbers];
      const index = updatedNumbers.indexOf(number);

      if (index !== -1) {
        updatedNumbers.splice(index, 1);
      } else {
        updatedNumbers.push(number);
      }

      setSelectedNumbers(updatedNumbers);
    }
  };

  const totalValue = selectedNumbers.length * valuePerNumber;

  return (
    <NumberCardContainer>
      <p style={{ marginBottom: "20px" }}>Selecione seus números</p>
      <Table>
        <TableBody>
          {[...Array(4).keys()].map((row) => (
            <TableRow key={row}>
              {[...Array(10).keys()].map((col) => {
                const number = row * 10 + col + 1;
                return (
                  <TableCell
                    key={number}
                    onClick={() => handleNumberClick(number)}
                    isSelected={selectedNumbers.includes(number)}
                  >
                    {number}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TotalContainer>
        <TotalText>Total:</TotalText>
        <TotalValue>R$ {totalValue.toFixed(2)}</TotalValue>
      </TotalContainer>
    </NumberCardContainer>
  );
}

export default NumberCard;
