import React from 'react'
import { SectionCard } from './ListCard.style'

export default function Card({ImgF,Label,Strong,Weak}) {
  return (
    <SectionCard>
      <div className='imgCard'>
          <img src={ImgF} alt={Label} />
      </div>
      <div className='textCard'>
          <h4>{Label}</h4>
          <ul>
            <li>{Strong}</li>
            <li>{Weak}</li>
          </ul>
      </div>
    </SectionCard>
  )
}
