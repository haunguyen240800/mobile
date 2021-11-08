import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import TabButton from './src/navigations/TabButton';
import HomeScreen from './src/screens/home/HomeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <RootComponent></RootComponent>

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={TabButton} />
          <Stack.Screen name="HomeTabs" component={TabButton} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
