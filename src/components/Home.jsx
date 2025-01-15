import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons


const Home = () => {

  const navbtn = useNavigation(); // Get the navigation object



  return (
    <View
      style={{
        backgroundColor: '#fcbf49',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Header with back button */}
      <View style={{ position: 'absolute', top: 60, left: 20 }}>
        <Icon
          name="arrow-back"
          size={30}
          color="#fff"
          onPress={() => navbtn.goBack()} // 
        />
      </View>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Welcome to Your Home Screen
      </Text>
    </View>
  )
}

export default Home