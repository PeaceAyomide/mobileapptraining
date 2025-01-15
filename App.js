import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './src/TabNav';
import FirstPage from './src/components/FirstPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="FirstPage">
   <Stack.Screen name="FirstPage" options={{ headerShown: false }} component={FirstPage} />
    <Stack.Screen name="TabNav" options={{ headerShown: false }} component={TabNav} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App