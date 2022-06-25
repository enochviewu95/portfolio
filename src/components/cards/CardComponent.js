import React from 'react'
import { Card } from './Card'


export const CardComponent = ({ icon, mouseHoverListener, mouseHoverLeave }) => {

  return (
    <Card icon={icon} onMouseHoverListener={mouseHoverListener} onMouseHoverLeave={mouseHoverLeave} />
  )
}
