import React from 'react'
import styled from 'styled-components'
import { Footer, Header } from '../../components'
import { colors } from '../../styles/stylesConfig'
import { App } from '../../containers'
import { BrowserRouter } from 'react-router-dom'

const StyledAppContainer = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  background: ${colors.appBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainContainer = () => {
  return (
    <StyledAppContainer>
      <Header />
      <App />
      <Footer />
    </StyledAppContainer>
  )
}