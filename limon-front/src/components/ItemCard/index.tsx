import styled from "styled-components";
import { IItem } from "../../redux/items/items-type";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  max-width: 350px;
  -webkit-box-shadow: 0px 0px 38px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 38px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 38px 2px rgba(34, 60, 80, 0.2);

  &:hover {
    -webkit-box-shadow: 3px 3px 10px 3px #dddddd;
  -moz-box-shadow: 3px 3px 10px 3px #dddddd;
  box-shadow: 3px 3px 10px 3px #dddddd;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Action = styled.button<any>`
  color: ${({theme}) => theme.WHITE};
  background: ${({theme}) => theme.DARK_BLUE};
  border: none;
  margin: 5px 0 0 0;
  padding: 8px;
  border-radius: 4px;
`;

export const ItemCard: React.FC<IItem & {buttons: {title: string, onClick:(data: IItem) => void}[]}> = ({
  category,
  id,
  item_description,
  item_image,
  item_name,
  price,
  rating,
  buttons,
}) => {
 
  return <Container>
    <h2>
      {item_name}
    </h2>
    <OptionWrapper>
       <span>Категория</span>
       <span>{category}</span>
    </OptionWrapper>
    <OptionWrapper>
       <span>Цена</span>
       <span>{price}</span>
    </OptionWrapper>
    <OptionWrapper>
       <span>Рейтинг</span>
       <span>{rating}</span>
    </OptionWrapper>
    {item_description && <OptionWrapper>
       <span>Описание</span>
       <span>{item_description}</span>
    </OptionWrapper>}
    {item_image && <ImageWrapper>
      <img src={"http://localhost:5000/" + item_image} width={250}/>
    </ImageWrapper>}
    <ButtonsWrapper>
    {buttons && buttons?.length > 0 && buttons.map(({title, onClick}) => {
      const onClickHandler = () => {
        onClick({
          category,
          id,
          item_description,
          item_image,
          item_name,
          price,
          rating,
        })
      }
      return <Action key={id} onClick={onClickHandler}>{title}</Action>
    })}
    </ButtonsWrapper>
  </Container>
}