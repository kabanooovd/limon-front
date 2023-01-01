import { PageWrapper } from "../../components"
import { OrdersForm } from "./OrdersForm"
import { useFormik } from "formik";
import { useParams } from "react-router";

export const OrdersFormContainer = () => {

  const { itemId } = useParams()

  const initialState = {
    userid: null,
    itemId,
    fio: "",
    rating: 3, 
    item_name: "string",
    item_description: null,
    contact: "", 
    region: null,
    city: null,
    street: null,
    postolindex: null,
    house: null,
    flat: null,
    quantity: 4, //
    isagreewithconditions: true
  }

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {

    },
    enableReinitialize: true,
  })

  return (
    <PageWrapper isFetching={false}>
      <OrdersForm formik={formik}/>
    </PageWrapper>
  )
}