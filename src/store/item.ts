import { ControllerItems } from "../api/ControllerItems"
import { makeAutoObservable } from "mobx"
import { IItem } from "../types"

class Item {
  item: IItem | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async onGetItemById(id: string) {
    try {
      const item = await ControllerItems.onGetItemById(id)
      this.item = item
    } catch(error) {
      console.warn('!!! !!! ', error)
    }
  }

}

export default new Item()