import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { ItemsController } from "../../api/controllers.ts/ItemsController"
import { ERRORS_HANDLER } from "../../config"
import { onToasting } from "../../utils/onToasting"
import { setChosenItem, setIsFetchingItems, setItems, SET_CHOSEN_ITEM, SET_ITEMS_DATA, SET_ITEMS_FETCHING } from "./items-action"
import { ItemsActionsTypes, IItemsReducerState } from "./items-type"

const initialState: IItemsReducerState = {
  itemsList: null,
  chosenItem: null,
  isFetching: false,
}

export const itemsReducer = (state: IItemsReducerState = initialState, action: ItemsActionsTypes): IItemsReducerState => {
	switch (action.type) {
    case SET_ITEMS_DATA: 
      return {...state, itemsList: action.payload}
    case SET_CHOSEN_ITEM: 
      return {...state, chosenItem: action.payload}
    case SET_ITEMS_FETCHING:
      return {...state, isFetching: action.payload}
    default: return state

  }
}

  // thunks

export const onGetItemsList = ({onSuccess} : {onSuccess?: () => void}) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingItems(true))
    const client = new ItemsController()
    try {
      const { data } = await client.onGetAllItems({})
      dispatch(setItems(data.tableData))
      dispatch(setIsFetchingItems(false))
      onSuccess && onSuccess()
    } catch(err) {
			const error = err as AxiosError
			onToasting({type: "error", message: "что-то пошло не так"})
      dispatch(setIsFetchingItems(false))
    }
}

export const obGetItemById = ({id, onSuccess} : {id: string, onSuccess?: () => void}) => async (dispatch: Dispatch) => {
  dispatch(setIsFetchingItems(true))
  const client = new ItemsController()
  try {
    const { data } = await client.onGetItemById({id})
    dispatch(setChosenItem(data))
    dispatch(setIsFetchingItems(false))
    onSuccess && onSuccess()
  } catch(err) {
    const error = err as AxiosError
		onToasting({type: "error", message: "что-то пошло не так"})
    dispatch(setIsFetchingItems(false))
  }
}