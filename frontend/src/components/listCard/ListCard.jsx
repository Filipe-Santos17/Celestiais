import React from 'react'
import Card from './Card'
import { ListCard } from './ListCard.style'
import Carousel from 'react-elastic-carousel'

import Human from "../../assets/cards/Human.png"
import pine from "../../assets/cards/pine.png"
import davidi from "../../assets/cards/davidi.png"
import tardig from "../../assets/cards/tardig.png"
import dinoc from "../../assets/cards/dinoc.png"

console.log(Human)

export default function ListCardComp() {

  const breakPoint = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1220, itemsToShow: 4},
    {width: 1720, itemsToShow: 4},
  ]

  return (
    <ListCard id="cards">
      <h3>Conheça nossas cartas</h3>
      <Carousel className='allCards' breakPoints={breakPoint}>
        <Card ImgF={Human} Label="Human" Strong="Evolute" Weak=""/>      
        <Card ImgF={tardig} Label="Tardigrade" Strong="Evolute" Weak=""/>      
        <Card ImgF={davidi} Label="P. davidi" Strong="Evolute" Weak=""/>      
        <Card ImgF={pine} Label="Pine" Strong="Longevity" Weak=""/>      
        <Card ImgF={dinoc} Label="D. radiodurans" Strong="Evolute" Weak=""/>      
      </Carousel>
    </ListCard>
  )
}
