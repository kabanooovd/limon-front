import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";
import '../../assets/style.css'
import { Flex } from "../../styles/uiToolKit";
import { Icon } from "../../components";
import { NavigationsContainer } from "../../containers";
import { onGoToRoute } from "../../utils/onGoToRoute";
import { Logo } from "../../assets/Logo";

const StylesHeader = styled.div`
  background: ${colors.headerBackground};
  width: 100%;
  color: ${colors.white}
`;

export const Header = () => {
  const onGetHome = () => onGoToRoute('')
  const onGoToCart = (route: string) => onGoToRoute(route)
  return <StylesHeader>
      <Flex padding="10px" justify="space-between" align="center">
        <Flex onClick={onGetHome} >
          <Logo />
        </Flex>
        <Flex>
          <NavigationsContainer />
        </Flex>
        <Flex staticBackground="grey" BorderRadius="20px" padding="5px" justify="center" align="center" cursor="pointer">
          <Icon iconName="cart2" iconColor={colors.headerBackground} iconWidth="20px" iconHeight="20px" onClick={() => onGoToCart('cart')}/>
        </Flex>
      </Flex>
  </StylesHeader>
}