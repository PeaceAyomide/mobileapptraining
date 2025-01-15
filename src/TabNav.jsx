import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

import Home from './components/Home';
import Setting from './components/Setting';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#2E2E2E', // Custom color for the tab bar
        borderTopWidth: 0,
        height: 84,
      },
      tabBarActiveTintColor: '#f5cac3', // Color for the active tab
      tabBarInactiveTintColor: '#C0C0C0', // Color for inactive tabs
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    }}>
    <Tab.Screen name="Home" component={Home} options={{headerShown: false,   tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),}}/>
    <Tab.Screen name="Settings" options={{ headerShown: false,  tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          )}} component={Setting} />
  </Tab.Navigator>
  )
}

export default TabNav