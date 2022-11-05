import React from "react"
import styled from "styled-components";
import { colors } from "../../styles/stylesConfig";
import { IButton } from "../../types";

interface IButtonProps extends IButton {
  width?: string,
  height?: string,
  borderRadius?: string,
}

const StyledButton = styled.button<IButtonProps>`
  color: ${colors.headerBackground};
  background: ${colors.reatingStar};
  border: none;
  margin: 0 5px;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '2px'};
  cursor: pointer;
`;

export const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.name.toUpperCase()}</StyledButton>
}