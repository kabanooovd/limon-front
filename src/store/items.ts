import { makeAutoObservable } from 'mobx'
import { ControllerItems } from '../api/ControllerItems'
import { IItems } from '../types'

class Items {
  items: IItems[] = []

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