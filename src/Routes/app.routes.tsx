import React from "react"
import { Platform } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'

import { Dashboard } from "../Screen/Dashboard";
import { Register } from "../Screen/Register";

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle:{
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                }
            }}
        >

            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            size={size}
                            color={color}
                            name="format-list-bulleted"
                        />)
                }}
                
            />

            
            <Screen
                name="Register"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            size={size}
                            color={color}
                            name="attach-money"
                        />)
                }}
            />

            <Screen
                name="Grafico"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            size={size}
                            color={color}
                            name="pie-chart"
                        />)
                }}
            />

        </Navigator>
    )
}

