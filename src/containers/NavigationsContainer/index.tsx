import { navigations } from "../../config"
import React from "react"
import { Navi } from "../../components"
import { onGoToRoute } from "../../utils/onGoToRoute"
import styled from "styled-components"

const StyledNavigationsContainer = styled.div`
  display: flex;
`;

export const NavigationsContainer = () => {
  return <StyledNavigationsContainer>
    {navigations.map(({route, name}) => {
      const onRote = () => {
        onGoToRoute(route)
      }
      return <Navi onClick={onRote} name={name} />
    })}
  </StyledNavigationsContainer>
}