import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/Main';
import ProfileScreen from '../screens/Profile';

export type UserStackParams = {
    Main: undefined;
    Profile:undefined
}

const UserStack = createNativeStackNavigator<UserStackParams>();

export const UserStackNav = () => {
    return (
        <UserStack.Navigator initialRouteName='Main' screenOptions={{headerShown:false}}>
            <UserStack.Screen name='Main' component={MainScreen}/>
            <UserStack.Screen name='Profile' component={ProfileScreen}/>
        </UserStack.Navigator>
    );
}