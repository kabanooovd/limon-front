import React from "react"
import styled, { css, keyframes } from "styled-components";

interface IModalProps {
  show: boolean,
  // onClose: () => void,
  children: React.ReactNode,
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Heading = keyframes`
  0% { top: -16.125em; }
  100% { top: 0; }
`;

const StyledModal = styled.div<IModalProps>`
  z-index: auto;
  display: ${({show}) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(5px) saturate(20%) contrast(100%);
`;

const ModalContent = styled.div<any>`
  background: ${({theme}) => theme.WHITE};
  min-width: 600px;
  min-height: 400px;
  max-height: 90%;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  overflow: auto;
  animation: ${Heading};
  animation-duration: .5s;
  animation-fill-mode: forwards;
`



export const Modal = (props: IModalProps) => {
  return <StyledModal {...props}>
    <Container>
      <ModalContent>
        {props.children}
      </ModalContent>
    </Container>
  </StyledModal>
}