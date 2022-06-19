import React, {useEffect} from 'react'
import { Card } from './Card'

import { onCardHoverBackgroundChange} from '../../utilities/BackgroundChange'

export const CardComponent = ({icon}) => {

  useEffect(()=>{
    onCardHoverBackgroundChange();
})

  return (
    <Card icon={icon}/>
  )
}
