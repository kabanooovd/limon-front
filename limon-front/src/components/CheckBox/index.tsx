import React, { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import styled from "styled-components";




const CheckboxContainer = styled.div<{margin?: string}>`
  margin: ${({margin}) => margin || "0"};
  display: flex;
  align-items: center;

  label{
    font-size: 14px;
    cursor: pointer;
    display: flex;
    background-color: ${({theme}) => theme.FIELD_BACKGROUND};
    &:hover{
      &::before{
        background-color: ${({theme}) => theme.FIELD_BACKGROUND};
      };
    };
  };

  input{
    cursor: pointer;
    opacity: 0;
    position: absolute;
  };

  input:checked{
    &+label::before{
      content: "\\002714";
      background-color: ${({theme}) => theme.CHECK_BOX_CHECKED_BACKGROUND};
      border: 2px solid transparent;
      color: white;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    };
  };

  input:focus{
    &+label::before{
      box-shadow: 0 0 5px black;
    };
  };

  label::before{
    content: "";
    border: 2px solid #F2F4F7;
    width: 24px;
    height: 24px;
    border-radius: 3px;
  };
`;


export const CheckBoxField: React.FC<{
  formItem: string;
  label?: string;
  margin?: string;
  checked: boolean;
  onChange: () => void;
}> = (props) => {
  const {formItem, label, checked, onChange, margin} = props
  return <CheckboxContainer margin={margin}>
    <input type="checkbox" id={formItem} checked={checked} onChange={onChange} />
    <label htmlFor={formItem}>{label || ""}</label>
  </CheckboxContainer>
}

