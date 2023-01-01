import styled from "styled-components"

const StyledTitle = styled.h3<any>`
  color: ${({theme}) => theme.PAGE_TITLE_COLOR};

`;

export const PageTitle: React.FC<{title: string}> = (props) => {
  return <StyledTitle>{props.title}</StyledTitle>
}