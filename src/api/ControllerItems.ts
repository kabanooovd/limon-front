import axios from "axios";

import itemsMock from '../wireMoch/items.json'
import itemMock from '../wireMoch/item.json'

// const mochedItems = JSON.parse(data)

export const ControllerItems = {
  onGetItems: () => {
    return Promise.resolve(itemsMock)
  },
  onGetItemById: (id: string) => {
    return Promise.resolve(itemMock)
  }
}