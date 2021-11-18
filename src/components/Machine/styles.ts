import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 300px;

  background: blue;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: stretch;
`;

export const Panel = styled.div`
  width: 90px;
  padding: 10px;

  background: yellow;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Visor = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  
  background: red;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;

  background: red;
`;

export const AddMoneyButton = styled(Button)`
  margin-bottom: 40px;
`;

export const AButton = styled(Button)``;

export const BButton = styled(Button)``;

export const CButton = styled(Button)``;