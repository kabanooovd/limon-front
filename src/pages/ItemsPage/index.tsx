import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react"
import styled from "styled-components"
import itemsState from '../../store/items'

const StyledItemsPage = styled.div`
  height: 100%;
`;

export const ItemsPage = observer(() => {
  React.useEffect(() => {
    if (itemsState.items.length < 1) {
      itemsState.onGetItems()
    }
  }, [itemsState])

  return <StyledItemsPage>
    {JSON.stringify(toJS(itemsState.items))}
  </StyledItemsPage>
})