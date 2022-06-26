import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screen/Home";
import Bookmarks from "../../screen/Bookmarks";
import { AntDesign, Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator {...{ screenOptions }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? tabButton : {}}>
              <AntDesign
                name="home"
                size={24}
                color="#ed8037"
                style={{ opacity: focused ? 1 : 0.3 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? tabButton : {}}>
              <Ionicons
                name="reader-outline"
                size={24}
                color="#ed8037"
                style={{ opacity: focused ? 1 : 0.4 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmarks}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? tabBookMartButton : {}}>
              <FontAwesome
                name="bookmark-o"
                size={24}
                color="#ed8037"
                style={{ opacity: focused ? 1 : 0.4 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? tabButton : {}}>
              <Feather
                name="user"
                size={24}
                color="#ed8037"
                style={{ opacity: focused ? 1 : 0.4 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const screenOptions = {
  tabBarShowLabel: false,
  title: "",
  tabBarStyle: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // backgroundColor: "rgba(200, 200, 200, 0.2)",
    elevation: 0,
    // marginBottom: 10,
  },
  // tabBarItemStyle:{
  //     paddingBottom: 20
  // }
};

const tabButton = {
  padding: 5,
  borderWidth: 0.5,
  borderColor: "#ebe6e4",
  borderRadius: 20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  backgroundColor: "white",
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 1,
};

const tabBookMartButton = {
  paddingHorizontal: 8,
  paddingVertical: 5,
  borderWidth: 0.5,
  borderColor: "#ebe6e4",
  borderRadius: 20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  backgroundColor: "white",
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 1,
};
