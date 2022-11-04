import { Icon } from "../../../components/Icon";
import React from "react"
import styled from "styled-components";
import { Flex } from "../index";
import { colors } from "../../stylesConfig";

interface IModalProps {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode,
}

const StyledModal = styled.div<IModalProps>`
  z-index: auto;
  display: ${({show}) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.6);
`;

const ModalContent = styled.div`
  background: #ebebeb;
  min-width: 600px;
  min-height: 400px;
  border-radius: 8px;
  padding: 10px;
  position: relative;
`

const CloseButtonWrapper = styled.div`
  position: absolute;
  right 10px;
  background: ${colors.greyDark};
  border-radius: 30px;
  display: flex;
  cursor: pointer;
`;

export const Modal = (props: IModalProps) => {
  return <StyledModal {...props}>
    <Flex justify="center" align="center" width="100%" height="100%">
      <ModalContent>
        <CloseButtonWrapper onClick={props.onClose}>
          <Icon iconName="close"/>
        </CloseButtonWrapper>
        {props.children}
      </ModalContent>
    </Flex>
  </StyledModal>
}