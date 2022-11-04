import React from "react";
import { Modal } from "../../styles/uiToolKit/Modal";



export const ItemModal = ({
  show,
  onClose,
} : {
  show: boolean,
  onClose: () => void,
}) => {
  return <Modal show={show} onClose={onClose}>
    <div>
        Modal header***
      </div>
      <div>
        Modal content***
      </div>
  </Modal>
}