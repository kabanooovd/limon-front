import React from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../styles/uiToolKit/Modal";



export const ItemModal = ({
  show,
  onClose,
} : {
  show: boolean,
  onClose: () => void,
}) => {

  const {itemId} = useParams()

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
}