import React from "react"
import { Icon } from "../../components";
import styled, { css, keyframes } from "styled-components";
import { Flex } from "../../styles/uiToolKit";
import { colors } from "../../styles/stylesConfig";

interface ICollapsedContainerProps {
  containerHeader: string;
  children: React.ReactNode,
}

const openAnimation = keyframes`
  0% { height: 0; }
  100% { height: 100px; }
`
const StyledCollapsedContainer = styled.div`
  background: ${colors.greyLight};
  width: 100%;
  border-radius: 8px;
`;

const CollapsedData = styled.div`
  border-radius: 8px;

  padding: 10px;

  background: ${colors.greyLight};

  animation-name: ${openAnimation};
  animation-duration: 1s;

  height: 100px;
  overflow: auto;
`;


export const CollapsedContainer = (props: ICollapsedContainerProps) => {

  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return <StyledCollapsedContainer>
    <Flex justify="space-between" align="center" padding="10px">
      <span>{props.containerHeader}</span>
      <Icon iconName="toggle-arrow" onClick={() => setIsCollapsed(!isCollapsed)}/>
    </Flex>
    {isCollapsed && <CollapsedData>
      {props.children}
    </CollapsedData>}
  </StyledCollapsedContainer>
}