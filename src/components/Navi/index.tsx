import React from "react"
import styled from "styled-components"

const StyledNavi = styled.div`
  font-family: "Roboto", sans-serif;
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