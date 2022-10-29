import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";
import '../../assets/style.css'

const StylesHeader = styled.div`
  background: ${colors.headerBackground};
  // -webkit-box-shadow: 0px -5px 10px -3px rgb(34 60 80 / 50%) inset;
  // -moz-box-shadow: 0px -5px 10px -3px rgb(34 60 80 / 50%) inset;
  // box-shadow: 0px -5px 10px -3px rgb(34 60 80 / 50%) inset;
  width: 100%;
  height: 50px;
  color: ${colors.white}
`;

export const Header = () => {
  return <StylesHeader>
      sdsd
  </StylesHeader>
}