import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import { Modal, Flex } from "../../styles/uiToolKit";
import itemsState from '../../store/items'
import { IItem } from "../../types";
import styled from "styled-components";
import { Image, Rating } from "../../components";

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

  const { itemId } = useParams()

  const currentItem: IItem | null = toJS(itemsState.item)

  React.useEffect(() => {
    if (!currentItem && !show && !!itemId) {
      onOpen(itemId)
    }
  }, [show, itemId, onOpen])
  console.log('==> ', currentItem)
  const onGetModalById = React.useCallback(() => {
    if (show && !currentItem) {
      itemsState.onGetItemById(itemId)
    }
  }, [itemsState, show])

  React.useEffect(onGetModalById, [onGetModalById])

  return <Modal show={show} onClose={onClose}>
      {currentItem && <StyledModalHeader>
        {currentItem.name}
      </StyledModalHeader>}
      {currentItem && <Flex direction="column" minHeight="200px" justify="space-between">
        <Flex justify="center">
          <Image image={currentItem.image} width={'180px'} height={'180px'} />
        </Flex>
        <Flex>
          <span>Категория: {currentItem.category}</span>
        </Flex>
        <Flex justify="space-between" align="center">
          <Rating rating={currentItem.rating} />
          <span>{`${currentItem.price} ₽`}</span>
        </Flex>
      </Flex>}
      {currentItem && <div>Description</div>}
  </Modal>
})