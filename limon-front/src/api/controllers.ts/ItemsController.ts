import { APP_ROUTES } from "../../config";
import { instance } from "../interceptors";

const { ITEMS } = APP_ROUTES
export class ItemsController {
  onGetAllItems({queries} : {queries?: string}) {
    const _queries = queries ? `?${queries}` : ""
    return instance.get(`${ITEMS}${_queries}`)
  }

  onGetItemById({id, queries} : {id: string, queries?: string}) {
    const _queries = queries ? `?${queries}` : ""
    return instance.get(`${ITEMS}/${id}${_queries}`)
  }
}