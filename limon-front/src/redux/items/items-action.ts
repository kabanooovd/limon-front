import { IItem } from "./items-type";

export const SET_ITEMS_DATA = "items/SET_ITEMS_DATA";

export const setItems = (payload: IItem | null) => {
  return { type: SET_ITEMS_DATA, payload } as const
} 