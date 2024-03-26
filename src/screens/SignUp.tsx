import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams } from '../navigation/AuthStackNav';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../../redux/userSlice';


const SignUpScreen = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const dispatch = useDispatch()

    const BASE_URL = "http://reservation.mava.systems/"

    const handleRegister = async () => {
        // try {
        //     const response = await axios.post(`${BASE_URL}/api/auth/${role}`, {
        //         "name": firstname,
        //         "email": email,
        //         "password": password,
        //         "password_confirmation": password
        //     }
        //     )
        //     console.log(response.data)
        //     const token = response.data.token
        //     dispatch(setToken(token))
        // } catch (error) {
        //     console.log(error)
        // }
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 25, marginBottom: 40, shadowOffset: { height: 1, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, }}>Hesap Oluştur</Text>
            <TextInput onChangeText={setFirstname} value={firstname} placeholder='Firstname' style={{ width: '80%', borderWidth: 1, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setLastname} value={lastname} placeholder='Lastname' style={{ width: '80%', borderWidth: 1, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setEmail} value={email} placeholder='E-mail Adress' style={{ width: '80%', borderWidth: 1, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setPassword} value={password} placeholder='Password' style={{ width: '80%', borderWidth: 1, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TouchableOpacity onPress={handleRegister} style={{ marginTop: 50, marginBottom: 25, borderRadius: 20, borderWidth: 2, padding: 10, paddingHorizontal: 50, backgroundColor: "orange" }}>
                <Text>
                    Kaydol
                </Text>
            </TouchableOpacity>
            <Text>
                Google hesabını kullan
            </Text>
            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, marginTop: 15, padding: 10 }}>
                <AntDesign name="google" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen