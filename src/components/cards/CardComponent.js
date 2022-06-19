import React from 'react'
import { Card } from './Card'


export const CardComponent = ({icon,mouseHoverListener}) => {

  return (
    <Card icon={icon} onMouseHoverListener={mouseHoverListener}/>
  )
}
