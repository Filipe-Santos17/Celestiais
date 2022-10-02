import * as React from 'react'

//Function Codes
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import Home from '../components/Home/Home'
import Camera from '../components/Camera/Camera'
import Info from '../components/Informacoes/Info'

//Name Components
const homeName = 'Home'
const cameraName = 'Câmera'
const infoName = 'Info'

const Tab = createBottomTabNavigator()

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === cameraName) {
              iconName = focused ? 'camera' : 'camera-outline';

            } else if (rn === infoName) {
              iconName = focused ? 'information-circle' : 'information';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={cameraName} component={Camera}/>
        <Tab.Screen name={homeName} component={Home}/>
        <Tab.Screen name={infoName} component={Info}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
