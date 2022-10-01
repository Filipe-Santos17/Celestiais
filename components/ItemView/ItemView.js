import React from 'react';
import { View, Text, Image } from 'react-native'

export default function ItemView() {
  return (
    <View className="flex-1">
      <View>
        <Image
          className="w-24 h-24" source={require('../../assets/icon.png')}
        />
      </View>
      <View>
        <Text>Tardigrado</Text>
      </View>
    </View>
  )
}
