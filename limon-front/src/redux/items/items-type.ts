import { setChosenItem, setIsFetchingItems, setItems } from "./items-action";

export interface IItemsReducerState {
  itemsList: IItem[] | null;
  chosenItem: IItem | null;
  isFetching: boolean;
}

export interface IItem {
  id: string,
  item_name: string,
  price: number,
  category: string,
  rating: number,
  item_image: string | null,
  item_description: string,
}

// Items Action Types
export type CreditActionsTypes = ReturnType<
	| typeof setItems
  | typeof setChosenItem
  | typeof setIsFetchingItems
>;