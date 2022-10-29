import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";

const StylesFooter = styled.div`
  background: ${colors.footerBackground};
  -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
  width: 100%;
  height: 50px;
`;

export const Footer = () => {
  return <StylesFooter>
    sdsd
  </StylesFooter>
}