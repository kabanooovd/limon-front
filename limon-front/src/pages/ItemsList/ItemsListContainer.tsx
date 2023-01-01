import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { PageWrapper } from "../../components"
import { onGetItemsList } from "../../redux/items/items-reducer"
import { IItem } from "../../redux/items/items-type"
import { AppRootStateType } from "../../redux/store"
import { ItemModal } from "./ItemModal"
import { ItemsList } from "./ItemsList"

export const ItemsListContainer = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const itemsList = useSelector<AppRootStateType, IItem[] | null>(state => state.itemsReducer.itemsList)
  const chosenItem = useSelector<AppRootStateType, IItem | null>(state => state.itemsReducer.chosenItem)
  const isFetching = useSelector<AppRootStateType, boolean>(state => state.itemsReducer.isFetching)

  const _onGetItemsList = React.useCallback(() => {
    if (!itemsList) {
      dispatch(onGetItemsList({}))
    }
  }, [itemsList])

  React.useEffect(_onGetItemsList)

  return (
    <PageWrapper isFetching={isFetching}>
      {chosenItem && <ItemModal item={chosenItem} show={chosenItem.id === id}/>}
      {itemsList && <ItemsList itemsList={itemsList}/>}
      {!chosenItem && !itemsList && <h1>Что-то пощло не так</h1>}
    </PageWrapper>
  )
}