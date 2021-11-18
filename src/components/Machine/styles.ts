import styled from "styled-components";

import machineBackground from "../../assets/machine.svg";
import addMoneyButton from "../../assets/add_money_button.svg";
import aButton from "../../assets/a_button.svg";
import bButton from "../../assets/b_button.svg";
import cButton from "../../assets/c_button.svg";

export const Container = styled.div`
  width: 450px;
  height: 480px;

  background-image: url(${machineBackground});
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: stretch;
`;

export const Panel = styled.div`
  width: 111px;
  margin: 37px 21px 0 0;
  padding: 9px 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Visor = styled.div`
  width: 100%;
  height: 85px;
  margin-bottom: 12px;

  font-size: 2em;
  font-family: Arial;
  line-height: 85px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 23px;
  padding: 0;
  
  cursor: pointer;
  
  background-size: cover;
  background-position: 50% 50%;
	background-color: transparent;
  box-shadow: none;
	border: none;
`;

export const AddMoneyButton = styled(Button)`
  margin-bottom: 51px;
  background-image: url(${addMoneyButton});
  background-position: 68% 90%;
`;

export const AButton = styled(Button)`
  background-image: url(${aButton});
`;

export const BButton = styled(Button)`
  background-image: url(${bButton});
`;

export const CButton = styled(Button)`
  background-image: url(${cButton});
`;