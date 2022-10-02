import React from 'react'
import Card from './Card'
import { ListCard } from './ListCard.style'
import Carousel from 'react-elastic-carousel'

export default function ListCardComp() {

  const breakPoint = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1220, itemsToShow: 4},
    {width: 1720, itemsToShow: 4},
    {width: 2220, itemsToShow: 4},
  ]

  return (
    <ListCard>
      <h3>Conheça nossas cartas</h3>
      <Carousel className='allCards' breakPoints={breakPoint}>
        <Card/>      
        <Card/>      
        <Card/>      
        <Card/>      
        <Card/>      
        <Card/>      
        <Card/>      
        <Card/>      
      </Carousel>
    </ListCard>
  )
}
