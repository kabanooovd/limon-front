import { PageWrapper } from "../../components"
import { OrdersForm } from "./OrdersForm"
import { useFormik } from "formik";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { onPostDeclaration } from "../../redux/orders/orders-reducer";

export const OrdersFormContainer = () => {

  const { itemId } = useParams()
  const dispatch = useDispatch()

  const initialState = {
    userid: null,
    itemId,
    fio: null,
    contact: null, 
    region: null,
    city: null,
    street: null,
    postolindex: null,
    house: null,
    flat: null,
    quantity: 1, 
    isAgreeWithConditions: false
  }

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      dispatch(onPostDeclaration({dto: values}))
    },
    enableReinitialize: true,
  })

  return (
    <PageWrapper isFetching={false}>
      <OrdersForm formik={formik}/>
    </PageWrapper>
  )
}