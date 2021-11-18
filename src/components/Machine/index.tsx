import React from "react";

import { AddMoneyButton, AButton, BButton, CButton, Container, Panel, Visor } from "./styles";

interface MachineProps {
  received: number;
  onMoneyAdded: (money: string) => void;
  onCandyClicked: (candy: string) => void;
  selectedMoney: string;
}

const Machine: React.FC<MachineProps> = (props) => {
  const { received, onMoneyAdded, onCandyClicked, selectedMoney } = props;

  const handleMoneyAdded = () => {
    if (received < 10.0 && (
       (received <= 9.0 && selectedMoney === '1') ||
       (received <= 8.0 && selectedMoney === '2') ||
       (received <= 5.0 && selectedMoney === '5'))) {
      onMoneyAdded(selectedMoney);
    }
  }

  return (
    <Container>
      <Panel>
        <Visor>{`R$ ${received}`}</Visor>
        <AddMoneyButton onClick={handleMoneyAdded} />
        <AButton onClick={() => onCandyClicked('a')} />
        <BButton onClick={() => onCandyClicked('b')} />
        <CButton onClick={() => onCandyClicked('c')} />
      </Panel>
    </Container>
  );
}

export default Machine;