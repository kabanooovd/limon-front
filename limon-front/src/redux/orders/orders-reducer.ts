import { Dispatch } from "redux"
import { OrdersController } from "../../api/controllers.ts/OrdersController"
import { onToasting } from "../../utils/onToasting"
import { POST_ORDER, setIsFetchingOrders } from "./orders-actions"
import { OrdersActionsTypes } from "./orders-type"

const initialState = {
  orders: null,
  isFetching: false,
}

export const ordersReducer = (state: any = initialState, action: OrdersActionsTypes) => {
  switch(action.type) {
    case POST_ORDER:
      return { ...state, isFetching: action.payload }
    default: return state
  }
}

// thunks

export const onPostDeclaration = ({dto, onSuccess} : {dto: any, onSuccess?: () => void}) => async (dispatch: Dispatch) => {
  dispatch(setIsFetchingOrders(true))
  const client = new OrdersController()
  try {
    await client.onPostOrder({dto})
    dispatch(setIsFetchingOrders(false))
    onSuccess && onSuccess()
  } catch(err) {
    onToasting({type: "error", message: "что-то пошло не так"})
    dispatch(setIsFetchingOrders(false))
  }
}