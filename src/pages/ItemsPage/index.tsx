import { ItemModal } from "../../components/ItemCard/ItemModal";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react"
import styled from "styled-components"
import { ItemCard } from '../../components';
import itemsState from '../../store/items'
import { useNavigate } from "react-router-dom";

const StyledItemsPage = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemsPage = observer(() => {
  const currentItems = toJS(itemsState.items)

  const navigate = useNavigate()

  const [isShowModal, setIsShowModal] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (currentItems.length < 1) {
      itemsState.onGetItems()
    }
  }, [itemsState])

  const onOpenModal = (itemId: string) => {
    setIsShowModal(true)
    navigate(itemId)
  }

  const onCloseModal = () => {
    setIsShowModal(false)
    navigate(-1)
  }

  return <> 
  <StyledItemsPage>    
    {currentItems.map(({id, name, price, rating, image, category}) => {
      return <ItemCard 
              key={id} 
              id={id} 
              name={name} 
              price={price} 
              rating={rating} 
              image={image}
              category={category}
              onOpen={onOpenModal} 
            />
    })}
  </StyledItemsPage>
  <ItemModal show={isShowModal} onClose={onCloseModal}/>
  </>
})