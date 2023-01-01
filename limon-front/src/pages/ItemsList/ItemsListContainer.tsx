import { useSelector } from "react-redux"
import styled from "styled-components"
import { PageWrapper } from "../../components"
import { IItem } from "../../redux/items/items-type"
import { AppRootStateType } from "../../redux/store"
import { ItemModal } from "./ItemModal"
import { ItemsList } from "./ItemsList"

export const ItemsListContainer = () => {

  const itemsList = useSelector<AppRootStateType, IItem[] | null>(state => state.itemsReducer.itemsList)
  const isFetching = useSelector<AppRootStateType, boolean>(state => state.itemsReducer.isFetching)

  return (
    <PageWrapper isFetching={isFetching}>
      <ItemModal />
      {itemsList && <ItemsList itemsList={itemsList}/>}
    </PageWrapper>
  )
}