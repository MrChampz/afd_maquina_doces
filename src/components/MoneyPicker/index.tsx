import React from "react";

import { Container, Money } from "./styles";

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
      <Money
        active={selectedMoney === '1'}
        disabled={isMaxMoneyReceived}
        onClick={() => onMoneySelected('1')}
      >
        R$ 1,00
      </Money>
      <Money
        active={selectedMoney === '2'}
        disabled={isMaxMoneyReceived}
        onClick={() => onMoneySelected('2')}
      >
        R$ 2,00
      </Money>
      <Money
        active={selectedMoney === '5'}
        disabled={isMaxMoneyReceived}
        onClick={() => onMoneySelected('5')}
      >
        R$ 5,00
      </Money>
    </Container>
  );
}

export default MoneyPicker;