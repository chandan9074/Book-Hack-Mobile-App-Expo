import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from './screen/Home';
import BottomNavigation from './components/BottomNavigation';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
      initialRouteName="Home"
      >
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

