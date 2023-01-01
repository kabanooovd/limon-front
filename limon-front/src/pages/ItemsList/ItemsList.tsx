import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ItemCard } from "../../components";
import { obGetItemById } from "../../redux/items/items-reducer";
import { IItem } from "../../redux/items/items-type";

interface IItemsList {
  itemsList: IItem[];
}

const Container = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemsList: React.FC<IItemsList> = (props) => {
  const { itemsList } = props

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onHadleAction = (data: IItem) => {
    const { id } = data
    dispatch(obGetItemById({id, onSuccess: () => {
      navigate(`${id}`)
    }}))
  }

  const buttons = [
    {title: "Подробнее", onClick: onHadleAction},
  ]
  return <Container>
    {itemsList.map((item) => {
      return <ItemCard key={item.id} {...item} buttons={buttons}/>
    })}
  </Container>
}
