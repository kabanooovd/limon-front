import { FormikValues } from 'formik';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomQuantityInputWrapper = styled.div<ICustomQuantityInput>`
	border-radius: 4px;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({theme}) => theme.FIELD_TEXT_COLOR};
  background: ${({theme}) => theme.FIELD_BACKGROUND};
  border: 2px solid transparent;
	font-family: "Formular";
	font-size: 28px;
	position: relative;
  /* @media (max-width: 780px) {
    width: 100%;
  } */
`;

const Plus = styled.div`
	position: absolute;
	top: 4px;
	right: 10px;
	cursor: pointer;
`;

const Minus = styled.div`
	position: absolute;
	top: 4px;
	left: 10px;
	cursor: pointer;
`;

const Span = styled.span<any>`
  color: ${({theme}) => theme.FIELD_LABEL_COLOR};
  margin: 0 0 2px 16px;
  font-size: 12px;
  font-weight: bold;
`;

interface ICustomQuantityInput {
	formik: FormikValues;
	formItem: string;
	label?: string;
}

export const QuantityInput: React.FC<ICustomQuantityInput> = (props) => {
	const { formik, formItem, label } = props;
	const plusHandler = () => {
		formik.setFieldValue(formItem, formik.values[formItem] + 1);
	};
	const minusHandler = () => {
		if (formik.values[formItem] > 0) {
			formik.setFieldValue(formItem, formik.values[formItem] - 1);
		}
	};
	return (
		<Container>
			{label && <Span>{label}</Span>}
			<CustomQuantityInputWrapper {...props}>
				<Minus onClick={minusHandler}>-</Minus>
				{formik.values[formItem]}
				<Plus onClick={plusHandler}>+</Plus>
			</CustomQuantityInputWrapper>
		</Container>
	);
};