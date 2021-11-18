import { useEffect, useState } from "react";
import { ModalProvider } from "styled-react-modal";

import GlobalStyle from "./components/GlobalStyle";
import Background from "./components/Background";
import MoneyPicker from "./components/MoneyPicker";
import Machine from "./components/Machine";
import ResetButton from "./components/ResetButton";

import useAFD from "./hooks/useAFD";
import CandyAcquiredModal from "./components/CandyAcquiredModal";

function App() {
  const afd = useAFD();

  const [selectedMoney, setSelectedMoney] = useState('1');
  const [isCandyAcquiredModalOpen, setCandyAcquiredModalOpen] = useState(false);

  useEffect(() => {
    if (afd.accepted) {
      setCandyAcquiredModalOpen(true);
    }
  }, [afd.accepted]);

  return (
    <ModalProvider>
      <GlobalStyle />
      <Background>
        <MoneyPicker
          received={afd.received}
          selectedMoney={selectedMoney}
          onMoneySelected={money => setSelectedMoney(money)}
        />
        <Machine
          received={afd.received}
          selectedMoney={selectedMoney}
          onMoneyAdded={money => afd.consume(money)}
          onCandyClicked={candy => afd.consume(candy)}
        />
        <ResetButton onClick={() => afd.reset()} />
        <CandyAcquiredModal
          change={afd.change}
          isOpen={isCandyAcquiredModalOpen}
          onClosed={() => {
            afd.reset();
            setCandyAcquiredModalOpen(false);
          }}
        />
      </Background>
    </ModalProvider>
  );
}

export default App;
