import { CloseFeature, Modal } from "../../components"

export const ItemModal: React.FC<any> = (props) => {
  const {} = props
  return <Modal show={true} onClose={() => alert("dimas")}>
    <CloseFeature onClose={() => alert("|Sdsd")} />
    sdsdsd
  </Modal>
}