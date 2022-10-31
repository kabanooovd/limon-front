import React from "react"

export const Image = ({ image, width, height } : {image: string, width: string, height: string}) => {
  return <img src={image} width={width} height={height} alt='image' />
}