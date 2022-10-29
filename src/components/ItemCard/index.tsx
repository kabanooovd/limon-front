import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";
import { IItem } from "../../types";

const StyledItemCard = styled.div`
  width: 280px;
  height: 300px;
  background: ${colors.white};
  color: green;
  margin: 20px;
  // display: flex;
`;

export const ItemCard = ({ id, name, price } : IItem) => {
  return <StyledItemCard>
    <div>{name}</div>
    <div>{`${price}`}</div>
  </StyledItemCard>
}