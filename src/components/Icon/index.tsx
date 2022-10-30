import React from "react"

interface IIcon {
  iconName: string,
  onClick?: () => void,
  iconWidth?: string
  iconHeight?: string
  iconColor?: string
}

export const Icon = ({
  iconName,
  onClick,
  iconWidth,
  iconHeight,
  iconColor,
}: IIcon) => {
  switch(true) {
    case iconName === 'cart': return <svg width={iconWidth} height={iconHeight} fill={iconColor} onClick={onClick} version="1.1" id="cart" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60 60">
        <path d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z" />
      </svg>
    case iconName === 'burger': return <svg width={iconWidth} height={iconHeight} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill={iconColor}/>
        <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill={iconColor}/>
        <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill={iconColor}/>
      </svg>
    case iconName === 'star': return <svg width={iconWidth} height={iconHeight} fill={iconColor} onClick={onClick} version="1.1" id="svg4619" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15 15">
        <path id="path4749-2-8-2" inkscape:connector-curvature="0" d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5l5,3.5l-2-6l4-3.5h-5L7.5,0z"/>
      </svg> 
    default: return <div>chose icon</div>
  }
}