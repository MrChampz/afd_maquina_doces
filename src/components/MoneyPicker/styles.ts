import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 400px;
  margin: 0 0 15px 15px;
  padding: 10px;

  background: yellow;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export interface MoneyProps {
  active: boolean;
}

export const Money = styled.button<MoneyProps>`
  flex: 1;

  width: 100%;
  height: 40px;
  background: purple;

  ${props => props.active && `
    background: green;
  `}
`;