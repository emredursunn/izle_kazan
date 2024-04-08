import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';


const ProfileScreen = () => {
    const [firstname, setFirstname] = useState("Emre")
    const [lastname, setLastname] = useState("Dursun")
    const [email, setEmail] = useState("izlekazan@gmail.com")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")

    const handleSave = async () => {
        Alert.alert("Değişiklikler kaydedildi.")
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
        <ImageBackground source={require('../../assets/profilekrani.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:34, fontStyle:'italic', color:'#00916e', marginBottom:20, fontWeight:'bold'}}>PROFİLİM</Text>
            <TextInput onChangeText={setFirstname} value={firstname} placeholder='Ad' placeholderTextColor='#fff' style={{ fontStyle: 'italic', fontSize: 16, color: '#fff', width: '80%', borderWidth: 2, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setLastname} value={lastname} placeholder='Soyad' placeholderTextColor='#fff' style={{ fontStyle: 'italic', fontSize: 16, color: '#fff', width: '80%', borderWidth: 2, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setEmail} value={email} placeholder='E-mail' placeholderTextColor='#fff' style={{ fontStyle: 'italic', fontSize: 16, color: '#fff', width: '80%', borderWidth: 2, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setNumber} value={number} placeholder='Telefon' placeholderTextColor='#fff' style={{ fontStyle: 'italic', fontSize: 16, color: '#fff', width: '80%', borderWidth: 2, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TextInput onChangeText={setAddress} value={address} placeholder='TAM ADRES' placeholderTextColor='#fff' style={{ fontStyle: 'italic', fontSize: 16, color: '#fff', width: '80%', borderWidth: 2, borderRadius: 20, padding: 20, shadowOffset: { height: 2, width: 0 }, shadowColor: 'gray', shadowOpacity: 1, marginBottom: 15 }} />
            <TouchableOpacity onPress={handleSave} style={{ marginTop: 50, marginBottom: 25, borderRadius: 20, borderWidth: 2, padding: 10, paddingHorizontal: 50, backgroundColor: "#00916e" }}>
                <Text style={{color:'#fff'}}>
                    Kaydet
                </Text>
            </TouchableOpacity>
            <Text style={{color:'#fff', fontSize:16}}>
                Telefon ve Adres bilgileri eksiksiz doldurulmalıdır.
            </Text>
        </ImageBackground>
    )
}

export default ProfileScreen