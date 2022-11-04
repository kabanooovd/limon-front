import React from "react"
import styled from "styled-components"
import { fonts } from "../../styles/stylesConfig"

const StyledNavi = styled.div`
  font-family: ${fonts.copperplate};
  background: grey;
  color: white;
  padding: 10px;
  border-radius: 8px;
  min-width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`

export const Navi = ({onClick, name} : {onClick: () => void, name: string}) => {
  return <StyledNavi onClick={onClick}>{name}</StyledNavi>
}