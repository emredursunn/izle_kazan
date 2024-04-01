import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { AuthStackParams } from '../navigation/AuthStackNav'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux'
// import axios from 'axios'
// import { setToken } from '../../redux/userSlice'

type Props = NativeStackScreenProps<AuthStackParams>

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState("example4@gmail.com")
    const [password, setPassword] = useState("123456")

    const dispatch = useDispatch()

    const handleLogin = async () => {
        // try {
        //     const response = await axios.post("http://reservation.mava.systems/api/auth/user-login", {
        //         "email": email,
        //         "password": password
        //     })
        //     const token = response.data.token
        //     dispatch(setToken(token))
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <ImageBackground source={require('../../assets/main.png')} style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'orange', fontSize: 60, fontWeight: 'bold', shadowOffset: { height: 5, width: 5 }, shadowColor: 'gray', shadowOpacity: 1, }}>İZLE KAZAN</Text>
            </View>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput value={email} onChangeText={setEmail} placeholder='E-mail' placeholderTextColor='#fff' style={{ fontStyle: 'italic', color: '#fff', fontSize: 16, width: '70%', borderWidth: 2, borderRadius: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, padding: 20, marginBottom: 20 }} />
                <TextInput value={password} onChangeText={setPassword} placeholder='Password' placeholderTextColor='#fff' secureTextEntry style={{ fontStyle: 'italic', color: '#fff', fontSize: 16, width: '70%', borderWidth: 2, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1 }} />
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 5, marginRight: 60 }}>
                    <Text style={{ fontStyle: 'italic', color: 'orange' }}>Şifremi unuttum?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogin} style={{ marginTop: 50, borderRadius: 20, borderWidth: 2, padding: 10, paddingHorizontal: 50, backgroundColor: "orange" }}>
                    <Text>
                        Giriş Yap
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ color: '#fff' }}>
                    Hesabınız yok mu?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: 'orange', fontWeight: 'bold', textDecorationLine: 'underline', fontStyle: 'italic' }}>
                        Kaydol
                    </Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default LoginScreen