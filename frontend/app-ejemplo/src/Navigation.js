import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'list'} component={ListComponent} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'clipboard-list'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'user'}/>
        </Tab.Navigator>
    )
}

export default Navigation