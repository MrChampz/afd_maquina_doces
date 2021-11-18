import styled from "styled-components";

import oneReal from "../../assets/one_real.png";
import twoReais from "../../assets/two_reais.png";
import fiveReais from "../../assets/five_reais.png";

export const Container = styled.div`
  width: 100px;
  height: 400px;
  margin: 0 0 15px 15px;
  padding: 10px;

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
  
  background-size: cover;

  cursor: pointer;

  ${props => props.active && `
    outline: 4px solid #fcba03;
  `}
`;

export const OneReal = styled(Money)`
  background-image: url(${oneReal});
`;

export const TwoReais = styled(Money)`
  background-image: url(${twoReais});
`;

export const FiveReais = styled(Money)`
  background-image: url(${fiveReais});
`;