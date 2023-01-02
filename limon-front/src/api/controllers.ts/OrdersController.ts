import { APP_ROUTES } from "../../config";
import { instance } from "../interceptors";

const { ORDERS } = APP_ROUTES
export class OrdersController {
  onPostOrder({dto, queries} : {dto: any, queries?: string}) {
    const _queries = queries ? `?${queries}` : ""
    return instance.post(`${ORDERS}${_queries}`, dto)
  }
}