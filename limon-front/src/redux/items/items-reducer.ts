import { SET_ITEMS_DATA } from "./items-action"
import { IItemsReducerState } from "./items-type"

const initialState: IItemsReducerState = {
  data: null,
  isFetching: false,
}

export const itemsReducer = (state: IItemsReducerState = initialState, action: any): any => {
	switch (action.type) {
    case SET_ITEMS_DATA: 
      return {...state, data: action.payload}
    default: return state

  }

  // thinks
}