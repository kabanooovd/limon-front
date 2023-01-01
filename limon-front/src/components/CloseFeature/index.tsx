import styled from "styled-components";
import { GrClose } from "react-icons/gr"

const CloseButtonWrapper = styled.div<any>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({theme}) => theme.WHITE};
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  padding: 10px;
`;

export const CloseFeature: React.FC<{onClose?: () => void}> = (props) => {
  return <CloseButtonWrapper onClick={props.onClose}>
    <GrClose size={30}/>
  </CloseButtonWrapper>
}