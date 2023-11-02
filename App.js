import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./view/Login";
import HomeScreen from "./navigation/screens/HomeScreen";
import MainContainer from "./navigation/MainContainer";
import DetailScreen from "./navigation/screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="MainContainer"
          component={MainContainer}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
