import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Order, Profile, SignIn, SignUp, SignUpAddress, SplashScreen, SuccessSignUp } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={Home}
            />
            <Tab.Screen 
                name="Order"
                component={Order}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignUpAddress" 
                component={SignUpAddress} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SuccessSignUp" 
                component={SuccessSignUp} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="MainApp" 
                component={MainApp} 
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
    
}

export default Router;
