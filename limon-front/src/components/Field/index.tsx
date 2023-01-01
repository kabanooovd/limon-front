import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0;
  width: auto;
  @media (max-width: 780px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const StyledField = styled.input<any>`
  width: 330px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: ${({theme}) => theme.FIELD_BACKGROUND};
  color: ${({theme}) => theme.FIELD_TEXT_COLOR};
  font-size: 22px;
  font-family: 'Formular';
  padding: 0 50px 0 10px;
  &:focus {}

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const Span = styled.span<any>`
  color: ${({theme}) => theme.FIELD_LABEL_COLOR};
  position: absolute;

  transition-duration: 500ms;
  transform: translate();

  top: ${({top}) => top};
  left: ${({left}) => left};

  font-size: 12px;
  font-weight: bold;
`;

export const Field: React.FC<{
  label: string
  value: string

  id: string
  name: string
  type: string
  onChange: any
}> = (props) => {
  const { label, value, onChange, id, name } = props

  const [top, setTop] = React.useState(value ? "-20px" : "16px")
  const [left, setLeft] = React.useState("16px")

  return(
    <Container>
      <Span top={top} left={left}>{label}</Span>
      <StyledField
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        onFocus={() => {
          setTop("-20px")
          setLeft("16px")
        }}
        onBlur={() => {
          if (!value) {
            setTop("16px")
            setLeft("16px")
          }
        }}
      />
    </Container>
  )
}