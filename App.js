import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./view/Login";
import HomeScreen from "./navigation/screens/HomeScreen";
import MainContainer from "./navigation/MainContainer";
import PictureList from "./navigation/screens/PictureList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PictureList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="MainContainer"
          component={MainContainer}
        />
        {/* <Stack.Screen name="PictureList" component={PictureList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
