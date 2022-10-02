import React from 'react'
import { Header, Banner } from './Header.style'

import Banne from "../../assets/Survivors.png"
import tadigrado from "../../assets/tadigrado.png"

export default function HeaderComp() {
  return (
    <>
      <Header>
        <h1>Celestiais</h1>
        <ul>
          <li>Conheça os Animais</li>
          <li>Crie o seu Super Herói</li>
        </ul>
      </Header>
      <Banner>
        <img src={Banne}  alt="Survivors Banner"/>
        <div className='tard'>
          <img src={tadigrado} className="tard-img" alt="tadigrado"/>
          <div className='tard-text'>
            <h3>Survivors</h3>
            <p>Crie a nova criatura que dominiará o universo</p>
          </div>
        </div>
      </Banner>
    </>
  )
}
