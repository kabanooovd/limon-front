import { instance } from "../interceptors";

export class ItemsController {
  onGetAllItems() {
    return instance.get(`/items`)
  }
}