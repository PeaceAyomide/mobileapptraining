import React from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: '#2E2E2E',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        Welcome! Click below to start.
      </Text>
      <View
        style={{
          width: '40%',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
         <TouchableOpacity
          style={{
            backgroundColor: '#FF6347',  // This sets the background color
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('TabNav')} // Navigate to the tab navigator
        >
          <Text
            style={{
              color: '#FFFFFF',  // This sets the text color
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Go to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FirstPage