import React, { Children } from "react"
import styled from "styled-components";
import { Flex } from "../index";

interface IMpdalProps {
  show: boolean
}

const StyledModal = styled.div<IMpdalProps>`
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
`

export const Modal = (props: IMpdalProps) => {
  return <StyledModal {...props}>
    <Flex justify="center" align="center" width="100%" height="100%">
      <ModalContent>sdsd</ModalContent>
    </Flex>
  </StyledModal>
}