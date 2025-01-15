import React from 'react'
import { View, Text } from 'react-native';

const Setting = () => {
  return (
    <View
      style={{
        backgroundColor: '#f4a261',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
      This is the Settings Room
      </Text>
    </View>
  )
}

export default Setting