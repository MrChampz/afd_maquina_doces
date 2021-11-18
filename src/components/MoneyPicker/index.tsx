import React from "react";

import { Container, FiveReais, OneReal, TwoReais } from "./styles";

interface MoneyPickerProps {
  received: number;
  selectedMoney: string;
  onMoneySelected: (money: string) => void;
}

const MoneyPicker: React.FC<MoneyPickerProps> = (props) => {
  const { received, selectedMoney, onMoneySelected } = props;

  const isMaxMoneyReceived = received >= 10.0;

  return (
    <Container>
      <OneReal
        active={selectedMoney === '1'}
        disabled={isMaxMoneyReceived}
        onClick={() => onMoneySelected('1')}
      />
      <TwoReais
        active={selectedMoney === '2'}
        disabled={isMaxMoneyReceived}
        onClick={() => onMoneySelected('2')}
      />
      <FiveReais
        active={selectedMoney === '5'}
        disabled={isMaxMoneyReceived}
        onClick={() => onMoneySelected('5')}
      />
    </Container>
  );
}

export default MoneyPicker;