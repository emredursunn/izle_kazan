import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {UserStackNav} from './UserStackNav';
import {AuthStackNav} from './AuthStackNav';

const RootStackNav = () => {
    const isAuth = true //useSelector((state: RootState) => state.token.token);
    return (
        <NavigationContainer>
            {isAuth ? <UserStackNav /> : <AuthStackNav />}
        </NavigationContainer>
    );
}

export default RootStackNav;