import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}) => {
  

   const user = route.params.user
  
    return (
      <HomeScreen user={user}></HomeScreen>
    )
}

export default BottomTabNavigator

const style = StyleSheet.create({})