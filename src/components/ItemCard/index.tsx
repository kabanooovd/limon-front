import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";
import { IItem } from "../../types";
import { Image, Rating } from "../../components";
import { Flex } from "../../styles/uiToolKit";

const StyledItemCard = styled.div`
  padding: 10px;
  border-radius: 8px;
  width: 280px;
  height: 300px;
  background: ${colors.white};
  color: green;
  margin: 20px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  color: grey;
`;

export const ItemCard = ({ id, name, price, rating, image } : IItem) => {
  return <StyledItemCard onClick={() => alert('dfdf')}>
    <ItemHeader>{name}</ItemHeader>
    <Flex direction="column" minHeight="270px" justify="space-between">
      <Flex justify="center">
        <Image image={image} width={'180px'} height={'180px'} />
      </Flex>
      <Flex justify="space-between" align="center">
        <Rating rating={rating} />
        {`${price} ₽`}
      </Flex>
    </Flex>
  </StyledItemCard>
}