import React from "react";
import { View,Text } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";

const Tab=createBottomTabNavigator()

const Navigation=()=>{
    return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Menu}/>
    </Tab.Navigator>
    )
}

export default Navigation