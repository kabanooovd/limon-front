import { makeAutoObservable } from 'mobx'
import { ControllerItems } from '../api/ControllerItems'
import { IItem, IItems } from '../types'

class Items {
  items: IItems[] = []
  item: IItem | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async onGetItems() {
    try {
      const items = await ControllerItems.onGetItems()
      this.setItemsList(items)
    } catch(error) {
      console.warn('items ', error)
    }
  }

  async onGetItemById(id: string) {
    try {
      const item = await ControllerItems.onGetItemById(id)
      this.setItem(item)
    } catch(error) {
      console.warn('item ', error)
    }
  }

  setItemsList(list: IItems[]) {
    this.items = list
  }

  setItem(item: IItem | null) {
    this.item = item
  }

}

export default new Items()