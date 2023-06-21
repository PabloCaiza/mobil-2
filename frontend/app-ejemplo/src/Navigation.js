import React from "react";
import { View,Text } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab=createBottomTabNavigator()

const Navigation=()=>{
    return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Menu} />
    </Tab.Navigator>
    )
}

export default Navigation