import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStackNav from './UserStackNav'
import AuthStackNav from './AuthStackNav'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const RootStackNav = () => {

    const isAuth = useSelector((state: RootState) => state.token.token)

    return (
        <NavigationContainer>
            {isAuth ? <UserStackNav />
                : <AuthStackNav />}
        </NavigationContainer>
    )
}

export default RootStackNav