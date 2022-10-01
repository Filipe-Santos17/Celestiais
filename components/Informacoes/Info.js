import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native'
import {ContainerView, TitleView, BodyPage, TitleContainer} from './Info.style'

export default function Info() {

  const [ showContent, setShowContent ] = React.useState(false)
  const animationClick = React.useRef(new Animated.Value(0)).current
  
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true
    };
    Animated.timing(animationClick, config).start()
    setShowContent(!showContent)
  }

  const arrowTransform = animationClick.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg','90deg']
  })

  //Falta uma seta de icon
  return (
    <ContainerView>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <TitleContainer>
          <TitleView>Info</TitleView>
          <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
            
          </Animated.View>
        </TitleContainer>
      </TouchableOpacity>
      {showContent && (
        <BodyPage>
          <Text>dlkasdjsadjasdjasioduiasodjiasdjasidjasdjaskldjaslkdjaslkdjaskl</Text>
       </BodyPage>
      )}
    </ContainerView>
  )
}
