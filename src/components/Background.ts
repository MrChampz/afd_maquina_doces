import styled from "styled-components";

import background from "../assets/background.jpg";

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: #7B98FF;
  background-image: url(${background});
  background-size: cover;

  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
`;

export default Background;