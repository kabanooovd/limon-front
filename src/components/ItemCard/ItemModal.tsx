import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../styles/uiToolKit/Modal";
import itemState from '../../store/item'



export const ItemModal = observer(({
  show,
  onClose,
} : {
  show: boolean,
  onClose: () => void,
}) => {

  const { itemId } = useParams()

  const currentItem = toJS(itemState.item)

  React.useEffect(() => {
    if (show && !currentItem) {
      itemState.onGetItemById(itemId)
    }
  }, [itemState, show])

  console.log('==> ', currentItem)

  return <Modal show={show} onClose={onClose}>
    <div>
        Modal header***
      </div>
      <div>
        Modal content***
      </div>
      <div>
        ID: {itemId}
      </div>
  </Modal>
})