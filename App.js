import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screen/Home";
import BookList from "./screen/BookList";
import Author from "./screen/Author";
import BottomNavigation from "./components/BottomNavigation";
import BookDetails from "./screen/BookDetails";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="Author" component={Author} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
