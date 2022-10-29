import { makeAutoObservable } from 'mobx'
import { ControllerItems } from '../api/ControllerItems'
import { IItem } from '../types'

class Items {
  items: IItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async onGetItems() {
    try {
      const items = await ControllerItems.onGetItems()
      this.items = items
    } catch(error) {
      console.warn('!!! !!! ', error)
    }
  }

}

export default new Items()