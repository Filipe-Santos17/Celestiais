import React from 'react'

import HeaderComp from '../components/header/Header'
import Learning from '../components/learn/Learning'
import ListCardComp from '../components/listCard/ListCard'

export default function Home() {
  return (
    <>
      <HeaderComp/>
      <ListCardComp/>
      <Learning/>
    </>
  )
}