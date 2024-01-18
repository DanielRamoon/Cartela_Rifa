import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  CountdownContainer,
  CountdownItem,
  CountdownNumber,
  CountdownLabel,
  CountdownWrapper,
  CountdownText,
  ConsultButton,
} from "./ CountdownStyles";

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

const padNumber = (number) => {
  return String(number).padStart(2, "0");
};

const Countdown = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const differenceDays = differenceInDays(targetDate, now);
      const differenceHours = differenceInHours(targetDate, now) % 24;
      const differenceMinutes = differenceInMinutes(targetDate, now) % 60;

      setDays(padNumber(differenceDays));
      setHours(padNumber(differenceHours));
      setMinutes(padNumber(differenceMinutes));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <CountdownWrapper>
      <ConsultButton>Consultar Número da Sorte</ConsultButton>
      <CountdownText>Não perca tempo</CountdownText>
      <CountdownContainer>
        <CountdownItem>
          <CountdownNumber>{days}</CountdownNumber>
          <CountdownLabel>{days === "01" ? "dia" : "dias"}</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{hours}</CountdownNumber>
          <CountdownLabel>{hours === "01" ? "hora" : "horas"}</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{minutes}</CountdownNumber>
          <CountdownLabel>
            {minutes === "01" ? "minuto" : "minutos"}
          </CountdownLabel>
        </CountdownItem>
      </CountdownContainer>
    </CountdownWrapper>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  eventName: PropTypes.string.isRequired,
};

export default Countdown;
