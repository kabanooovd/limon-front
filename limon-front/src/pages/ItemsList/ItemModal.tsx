import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CloseFeature, Modal } from "../../components"
import { APP_ROUTES } from "../../config";
import { setChosenItem } from "../../redux/items/items-action";
import { IItem } from "../../redux/items/items-type"

const { ITEMS } = APP_ROUTES

const { REACT_APP_PROXY_URL } = process.env

const Header = styled.h2`
  font-size: 22px;
`;

const ImageWrapper = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
`;

const Action = styled.button<any>`
  color: ${({theme}) => theme.WHITE};
  background: ${({theme}) => theme.DARK_BLUE};
  border: none;
  margin: 5px 65px 0;
  padding: 8px;
  border-radius: 4px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemModal: React.FC<{item: IItem, show: boolean}> = (props) => {
  const { item_name, category, id, item_description, item_image, price, rating } = props.item

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ITEM_MODAL_BUTTONS = [
    {title: "Заказать", onClick: () => {}},
  ]

  const onClose = () => {
    dispatch(setChosenItem(null))
    navigate(`/${ITEMS}`)
  }
  return <Modal show={props.show}>
    <CloseFeature onClose={onClose} />
    <Header>{item_name}</Header>
    
    {item_image && <ImageWrapper>
      <img src={`${REACT_APP_PROXY_URL}/${item_image}`} width={450}/>
    </ImageWrapper> }
    <ButtonsWrapper>
      {ITEM_MODAL_BUTTONS && ITEM_MODAL_BUTTONS?.length > 0 && ITEM_MODAL_BUTTONS.map(({title, onClick}) => {
        const onClickHandler = () => {
          onClick()
        }
        return <Action key={id} onClick={onClickHandler}>{title}</Action>
      })}
    </ButtonsWrapper>
  </Modal>
}