import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";
import Home from "./screen/Home";
import BookList from "./screen/BookList";
import Author from "./screen/Author";
import BottomNavigation from "./components/BottomNavigation";
import BookDetails from "./screen/BookDetails";
import SingleBook from "./screen/SingleBook";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <StripeProvider publishableKey="pk_test_51KOK6DDwHICDWFJIgFNP5rlR59k5W0DyjfGtaA7V6GTsaaAQCu17l4nkokTFHej5a9U3QCq3PLc62jXO8lW1gHDZ00sVd6tSCV">
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
          <Stack.Screen name="SingleBook" component={SingleBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}
