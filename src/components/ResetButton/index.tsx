import React from "react";

import { Button } from "./styles";

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = (props) => {
  return (
    <Button {...props}>Resetar</Button>
  );
}

export default ResetButton;