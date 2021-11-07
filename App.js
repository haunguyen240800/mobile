import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.red}>

      </View>
      <View style = {styles.blue}>
        
      </View>
      <View style = {styles.green}>
        
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  red: {
    flex: 1,
    backgroundColor: '#463',

  },
  blue: {
    flex: 2,
    backgroundColor: '#a897',
    
  },
  green: {
    flex: 3,
    backgroundColor: 'green',
  }
});
