import axios from "axios";

import data from '../wireMoch/items.json'

// const mochedItems = JSON.parse(data)

export const ControllerItems = {
  onGetItems: () => {
    return Promise.resolve(data)
  },
}