import React from 'react'
import { SectionCard } from './ListCard.style'
import Human from "../../assets/cards/Human.png"

export default function Card() {
  return (
    <SectionCard>
      <div className='imgCard'>
          <img src={Human} alt="Human" />
      </div>
      <div className='textCard'>
          <h4>Humano</h4>
          <ul>
            <li>Habilidade 1</li>
            <li>Habilidade 2</li>
          </ul>
      </div>
    </SectionCard>
  )
}
