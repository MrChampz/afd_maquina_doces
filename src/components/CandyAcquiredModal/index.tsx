import React from "react";

import { Modal } from "./styles";

interface CandyAcquiredModalProps {
  change: number;
  isOpen: boolean;
  onClosed: () => void;
}

const CandyAcquiredModal: React.FC<CandyAcquiredModalProps> = (props) => {
  const { change, isOpen, onClosed } = props;

  return (
    <Modal
      isOpen={isOpen}
      onBackgroundClick={() => onClosed()}
      onEscapeKeydown={() => onClosed()}
    >
      <h2>{`Parabéns, retire seu doce e seu troco de R$ ${change}`}</h2>
    </Modal>
  );
}

export default CandyAcquiredModal;