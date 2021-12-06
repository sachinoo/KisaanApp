import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import KisaanScreen from './KisaanScreen'
import BuyerScreen from './screens/BuyerScreen'
import DistributorScreen from './screens/DistributorScreen'

const Tab = createBottomTabNavigator()

const MainContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Kisaan" component={KisaanScreen} />
      <Tab.Screen name="Distributor" component={DistributorScreen} />
      <Tab.Screen name="Buyer" component={BuyerScreen} />
    </Tab.Navigator>
  )
}

export default MainContainer;
