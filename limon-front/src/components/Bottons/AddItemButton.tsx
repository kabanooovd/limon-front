import styled from "styled-components";

const StyledAddItemButton = styled.button<{
    width?: string
    padding?: string
    margin?: string
  }>`
  background: ${({theme}) => theme.RED};
  color: ${({theme}) => theme.WHITE};
  width: ${({width}) => width || "auto"};
  padding: ${({padding}) => padding || "auto"};
  margin: ${({margin}) => margin || "auto"};
  cursor: pointer;
  border: none;
  border-radius: 4px;

`;

export const AddItemButton: React.FC<{
    width?: string;
    padding?: string;
    margin?: string;
    onClick?: () => void;
  }> = (props) => {
  return <StyledAddItemButton {...props} />
}