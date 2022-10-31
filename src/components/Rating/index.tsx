import React, { ReactElement } from "react"
import * as config from "../../config"
import styled from "styled-components"
import { Icon } from "../../components/index";
import { colors } from "../../styles/stylesConfig";

const StyledRating = styled.div`
  
`;

interface IRating {
  rating: number
}

export const Rating = ({ rating }: IRating) => {

  const starsHandler = React.useCallback((rating) => {
    const stars: ReactElement[] = []
      for (let idx = config.MINIMAL_RATING; idx <= config.MAXIMAL_RATING; idx++) {
        stars.push(<Icon key={idx} iconName="star" iconWidth={'20px'} iconHeight={'20px'} iconColor={idx <= rating ? colors.reatingStar : colors.greyDark} />)
      }
    return stars
  }, [rating])
  return <StyledRating>{starsHandler(rating)}</StyledRating>
  
}