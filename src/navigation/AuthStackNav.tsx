import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';

export type AuthStackParams = {
    Login: undefined;
    SignUp: undefined;
}

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNav = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name='Login' component={LoginScreen} />
            <AuthStack.Screen name='SignUp' component={SignUpScreen} />
        </AuthStack.Navigator>
    );
}

export default AuthStackNav;
