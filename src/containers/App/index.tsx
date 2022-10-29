import React from "react"
import styled from "styled-components"
import { RoutesComponent } from "../Routes/Routes"

const StyledApp = styled.div`
  // width: 100%;
  height: 100%;
`

export const App = () => {
  return <StyledApp>
      <RoutesComponent />
  </StyledApp>
}