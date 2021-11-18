import styled from "styled-components";

export const Button = styled.button`
  height: 50px;
  margin: 0 15px 15px 0;
	padding: 0 45px;

	background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	background-color: #2dabf9;
	border: 1px solid #0b0e07;
	border-radius: 3px;
  box-shadow: inset 0px -3px 7px 0px #29bbff;

  cursor: pointer;

	color: #ffffff;
	font-family: Arial;
	font-size: 1.5em;
	text-decoration: none;
	text-shadow: 0px 1px 0px #263666;

  &:hover {
    background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color: #0688fa;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;