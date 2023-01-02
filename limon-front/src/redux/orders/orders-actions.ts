export const POST_ORDER = "orders/POST_ORDER";

export const setIsFetchingOrders = (payload: boolean) => {
  return { type: POST_ORDER, payload } as const
}
