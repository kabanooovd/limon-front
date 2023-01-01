import styled from "styled-components";
import { Preloader } from "../Preloader";



const StyledContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const StyledHeader = styled.div<any>`
  background: ${({theme}) => theme.HEADER_BACKGROUND};
  min-height: 80px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFooter = styled.div`
  background: ${({theme}) => theme.FOOTER_BACKGROUND};
  color: ${({theme}) => theme.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledContent = styled.div`
  height: 100%;
`;

export const PageWrapper: React.FC<{isFetching: boolean}> = (props) => {
  const {isFetching} = props
  return (
    <StyledContainer>
      {isFetching && <Preloader />}
      <StyledHeader>
        <h1>Logo</h1>
        <div>navigations</div>
        <div>control</div>
      </StyledHeader>
      <StyledContent>
      {props.children}
      </StyledContent>
      <StyledFooter>Все права защищены </StyledFooter>
    </StyledContainer>
  )
}