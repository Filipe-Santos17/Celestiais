import * as React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { ContainerView, TittleContainer, ScroolView } from "./Home.style"
//https://www.youtube.com/watch?v=1tIBMiuWaOg&ab_channel=UnsureProgrammer

export default function Home() {
  return (
    <ContainerView>
      <TittleContainer>Monera</TittleContainer>
      <ScroolView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{height: 130, width: 130}} >
            <View style={{flex: 2}}>
              <Image source={require('../../assets/tardigrada.png')} style={{flex: 1}}/>
            </View> 
          </View>
        </ScrollView>
      </ScroolView>
    </ContainerView>
  )
}
