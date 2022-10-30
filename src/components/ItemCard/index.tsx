import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";
import { IItem } from "../../types";
import { Rating } from "../../components";

const StyledItemCard = styled.div`
  width: 280px;
  height: 300px;
  background: ${colors.white};
  color: green;
  margin: 20px;
  // display: flex;
`;

export const ItemCard = ({ id, name, price, rating, image } : IItem) => {
  console.log('==> ', '/public/temp.jpg')
  return <StyledItemCard>
    <div>{name}</div>
    <div>{`${price}`}</div>
    <img src={image} width={'150px'} height={'150px'} alt='image' />
    <Rating rating={rating} />
  </StyledItemCard>
}