import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='buy' component={``}/>
      <Tab.Screen name='Sell' component={``}/>

      


    </Tab.Navigator>
  )
}

export default Tabs