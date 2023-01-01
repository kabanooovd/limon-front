import { IItem } from "./items-type";

export const SET_ITEMS_DATA = "items/SET_ITEMS_DATA";
export const SET_ITEMS_FETCHING = "items/SET_ITEMS_FETCHING";

export const setItems = (payload: IItem[] | null) => {
  return { type: SET_ITEMS_DATA, payload } as const
} 

export const setIsFetchingItems = (payload: boolean) => {
  return { type: SET_ITEMS_FETCHING, payload } as const
}