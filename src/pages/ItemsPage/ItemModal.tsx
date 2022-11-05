import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import { Modal, Flex } from "../../styles/uiToolKit";
import itemsState from '../../store/items'
import { IButton, IItem } from "../../types";
import styled from "styled-components";
import { Image, Rating, CollapsedContainer } from "../../components";

const StyledModalHeader = styled.h1`

`;

export const ItemModal = observer(({
  show,
  onClose,
  onOpen,
} : {
  show: boolean,
  onClose: () => void,
  onOpen: (itemId: string) => void,
}) => {

  const modalButtons: IButton[] = [
    {name: 'заказать', onClick: () => alert('TEST')},
    {name: 'В корзину', onClick: () => alert('TEST 222')},
  ]

  const getButtons = (array: IButton[]) => { // TODO Функция предназначена для того чтобы доработать в зависимости от ролёвки
    let buttons: IButton[] = []
    array.forEach(item => {
      if (true) {
        buttons = [...buttons, item]
      }
    })
    return buttons
  }

  const _buttons: IButton[] = getButtons(modalButtons)

  const { itemId } = useParams()

  const currentItem: IItem | null = toJS(itemsState.item)

  React.useEffect(() => {
    if (!currentItem && !show && !!itemId) {
      onOpen(itemId)
    }
  }, [show, itemId, onOpen])

  const onGetModalById = React.useCallback(() => {
    if (show && !currentItem) {
      itemsState.onGetItemById(itemId)
    }
  }, [itemsState, show])

  React.useEffect(onGetModalById, [onGetModalById])

  return <Modal show={show} onClose={onClose} buttons={_buttons}>
      {currentItem && <StyledModalHeader>
        {currentItem.name}
      </StyledModalHeader>}
      {currentItem && <Flex direction="column" minHeight="200px" justify="space-between">
        <Flex justify="center">
          <Image image={currentItem.image} width={'200px'} height={'auto'} />
        </Flex>
      </Flex>}
      {currentItem && <Flex padding="10px 0">
        <CollapsedContainer containerHeader={"Подробнее"}>
          <Flex  justify="space-between"  padding="10px 0">
            <span>Категория:</span>
            <span>{currentItem.category}</span>
          </Flex>
          <Flex  justify="space-between"  padding="10px 0">
            <span>Рейтинг:</span>
            <Rating rating={currentItem.rating} />
          </Flex>
          <Flex  justify="space-between"  padding="10px 0">
            <span>Цена:</span>
            <span>{`${currentItem.price} ₽`}</span>
          </Flex>
          <p>
            <span>Описание: </span>
            {currentItem.description}
          </p>
        </CollapsedContainer>
      </Flex>}
  </Modal>
})  