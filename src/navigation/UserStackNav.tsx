import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/Main';

export type UserStackParams = {
    Main: undefined;
}

const UserStack = createNativeStackNavigator<UserStackParams>();

export const UserStackNav = () => {
    return (
        <UserStack.Navigator initialRouteName='Main'>
            <UserStack.Screen name='Main' component={MainScreen}/>
        </UserStack.Navigator>
    );
}