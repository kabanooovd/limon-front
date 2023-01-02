import { setIsFetchingOrders } from "./orders-actions";

export type OrdersActionsTypes = ReturnType<
  | typeof setIsFetchingOrders
>;