import { IItem } from "./items-type";

export const SET_ITEMS_DATA = "items/SET_ITEMS_DATA";
export const SET_CHOSEN_ITEM = "items/SET_CHOSEN_ITEM";
export const SET_ITEMS_FETCHING = "items/SET_ITEMS_FETCHING";

export const setItems = (payload: IItem[] | null) => {
  return { type: SET_ITEMS_DATA, payload } as const
} 

export const setChosenItem = (payload: IItem | null) => {
  return { type: SET_CHOSEN_ITEM, payload } as const
}

export const setIsFetchingItems = (payload: boolean) => {
  return { type: SET_ITEMS_FETCHING, payload } as const
}
