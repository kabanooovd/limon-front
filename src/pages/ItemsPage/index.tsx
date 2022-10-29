import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react"
import styled from "styled-components"
import { Icon, ItemCard } from '../../components/index';
import itemsState from '../../store/items'

const StyledItemsPage = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemsPage = observer(() => {
  const currentItems = toJS(itemsState.items)
  React.useEffect(() => {
    if (currentItems.length < 1) {
      itemsState.onGetItems()
    }
  }, [itemsState])
  return <StyledItemsPage>
    <div>
      <Icon iconName="cart" iconWidth={'50px'} iconHeight={'50px'} iconColor={'red'} onClick={() => alert('cart')} />
      <Icon iconName="burger" iconWidth={'50px'} iconHeight={'50px'} iconColor={'grey'} onClick={() => alert('burger')} />
    </div>
      
    {currentItems.map(({id, name, price}) => {
      return <ItemCard key={id} id={id} name={name} price={price} />
    })}
  </StyledItemsPage>
})