import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddItemButton, ItemCard } from "../../components";
import { obGetItemById } from "../../redux/items/items-reducer";
import { IItem } from "../../redux/items/items-type";

interface IItemsList {
  itemsList: IItem[];
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemsListWrapper = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemsList: React.FC<IItemsList> = (props) => {
  const { itemsList } = props

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  React.useEffect(() => {
    id && dispatch(obGetItemById({id}))
  } ,[])

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
    <Centered>
      <AddItemButton padding="10px 20px" onClick={() => alert("sd")}>Добавить Товар</AddItemButton>
    </Centered>
    <ItemsListWrapper>
      {itemsList.map((item) => {
        return <ItemCard key={item.id} {...item} buttons={buttons}/>
      })}
    </ItemsListWrapper>
  </Container>
}
