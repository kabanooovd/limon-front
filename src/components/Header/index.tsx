import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/stylesConfig";
import '../../assets/style.css'
import { Flex } from "../../styles/uiToolKit";
import { Icon } from "../../components";
import { NavigationsContainer } from "../../containers";
import { onGoToRoute } from "../../utils/onGoToRoute";

const StylesHeader = styled.div`
  background: ${colors.headerBackground};
  // -webkit-box-shadow: 0px -5px 10px -3px rgb(34 60 80 / 50%) inset;
  // -moz-box-shadow: 0px -5px 10px -3px rgb(34 60 80 / 50%) inset;
  // box-shadow: 0px -5px 10px -3px rgb(34 60 80 / 50%) inset;
  width: 100%;
  // min-height: 50px;
  color: ${colors.white}
`;

export const Header = () => {
  const onGetHome = () => onGoToRoute('')
  const onGoToCart = (route: string) => onGoToRoute(route)
  return <StylesHeader>
      <Flex padding="20px" justify="space-between" align="center">
        <Flex onClick={onGetHome}>Logo</Flex>
        <Flex>
          <NavigationsContainer />
        </Flex>
        <Flex staticBackground="grey" BorderRadius="20px" padding="5px" justify="center" align="center" cursor="pointer">
          <Icon iconName="cart2" iconColor={colors.headerBackground} iconWidth="20px" iconHeight="20px" onClick={() => onGoToCart('cart')}/>
        </Flex>
      </Flex>
  </StylesHeader>
}