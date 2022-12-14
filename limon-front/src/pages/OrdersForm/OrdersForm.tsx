import { FormikValues } from "formik";
import React from "react";
import styled from "styled-components";
import { CheckBoxField, Field, PageTitle, QuantityInput } from "../../components";

const Container = styled.div`
  padding: 30px 60px;
  max-width: 830px;
  margin: 0 auto;

  /* display: flex; */
  /* justify-content: center; */
  /* justify-content: flex-start; */
`;
// 780
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;

`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  color: ${({theme}) => theme.WHITE};
  background: ${({theme}) => theme.RED};

  &:disabled {
    opacity: 0.5;
  }
`;

const CheckBoxWrapper = styled.div`
  margin: 40px 0 10px 0;
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.span`
  margin: 0 0 0 20px;
`;

export const OrdersForm: React.FC<{
  formik: FormikValues
}> = (props) => {
  const {
    formik
  } = props
  return <Container>
    <form onSubmit={formik.handleSubmit}>
      <PageTitle title="Оформить заказ" />
      <Row>
        <Field 
          label="ФИО"
          id="fio"
          name="fio"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fio}
        />
        <Field 
          label="Контактный телефон" 
          id="contact"
          name="contact"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.contact || ""}
        />
      </Row>
      <Row>
        <Field 
          label="Регион проживания"
          id="region"
          name="region"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.region}
        />
        <Field 
          label="Город проживания" 
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city || ""}
        />
      </Row>
      <Row>
        <Field 
          label="Улица проживания"
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.street}
        />
        <Field 
          label="Номер дома проживания" 
          id="house"
          name="house"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.house || ""}
        />
      </Row>
      <Row>
        <Field 
          label="Номер квартиры проживания"
          id="flat"
          name="flat"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.flat}
        />
        <Field 
          label="Почтиовый индекс адреса проживания" 
          id="postolindex"
          name="postolindex"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postolindex || ""}
        />
      </Row>
      <Row>
        <QuantityInput formik={formik} formItem={"quantity"} label={"Укажите колличество товаров"}/>
      </Row>
      <CheckBoxWrapper>
        <CheckBoxField 
          checked={formik.values.isagreewithconditions} 
          formItem={"isagreewithconditions"} 
          onChange={() => formik.setFieldValue("isagreewithconditions", !formik.values.isagreewithconditions)} 
        />
        <CheckBoxLabel>
          Я принимаю условия соглашения
        </CheckBoxLabel>
      </CheckBoxWrapper>
      <Row>
        <SubmitButton disabled={!formik.values.isagreewithconditions}>Заказать</SubmitButton>
      </Row>
    </form>
  </Container>
}