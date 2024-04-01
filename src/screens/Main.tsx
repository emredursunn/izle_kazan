import { View, Text, TouchableOpacity, ActivityIndicator, Animated, Dimensions, ImageBackground, Alert, TextInput, Modal, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Octicons } from '@expo/vector-icons';
import isValidUrl from 'valid-url';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserStackParams } from '../navigation/UserStackNav';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<UserStackParams>

const MainScreen = ({ navigation }: Props) => {

  const [joinCount, setJoinCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [giftUrl, setGiftUrl] = useState("");
  const [helpVisible, setHelpVisible] = useState(false)
  const [welcomeVisible, setWelcomeVisible] = useState(false)
  const [editable, setEditable] = useState(false)

  const limit = 500

  const dimensions = Dimensions.get("screen");


  const handleWatchAd = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setJoinCount(prev => prev + 1);
    }, 100);
  };

  const handleCheckUrl = () => {
    if (isValidUrl.isUri(giftUrl)) {
      return true;
    } else {
      return false;
    }
  };

  const handleConfirmGift = () => {
    if (handleCheckUrl()) {
      setEditable(false)
      Alert.alert("Hediyeniz Kaydedildi. Adresinizi girdiğinizden emin olun. Bol şanslar :)")
    } else {
      Alert.alert("Hediyeniz bulunamadı. Kurallara uygun olduğundan emin olun. ? ile bilgi alabilirsiniz.")
    }
  }


  return (
    <ImageBackground source={require('../../assets/main.png')} resizeMode='cover' style={{ flex: 1, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 20, marginTop:'20%', flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => setHelpVisible(true)} style={{alignItems:'center'}}>
          <MaterialCommunityIcons name="head-question-outline" size={50} color="#fff" />
          <Text style={{ fontSize: 24, color: '#fff', fontStyle: 'italic', textDecorationLine: 'underline', marginBottom: 10, fontWeight: 'bold' }}>Nasıl Katılırım?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ alignItems: 'center' }}>
          <AntDesign name="user" size={50} color="#fff" />
          <Text style={{ fontSize: 24, color: '#fff', fontStyle: 'italic', textDecorationLine: 'underline', marginBottom: 10, fontWeight: 'bold' }}>Profilim</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 40, fontStyle: 'italic', color: 'orange', alignSelf: 'center', marginBottom: 20, fontWeight: 'bold' }}>İZLE KAZAN</Text>

      <Text style={{ fontSize: 20, fontStyle: 'italic', color: '#fff', marginBottom: 20 }}>Toplam {joinCount} kez katıldın!</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <TouchableOpacity onPress={handleWatchAd} style={{ padding: 10, backgroundColor: 'orange', flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#fff', fontSize: 18, marginRight: 10 }}>KATIL</Text>
            <Octicons name="video" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ width: '100%', marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 10, fontStyle: 'italic' }}>Hediyeniz - MAKSİMUM {limit} TL</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {editable ?
            <TouchableOpacity onPress={handleConfirmGift} style={{ marginHorizontal: 5 }}>
              <FontAwesome5 name="check" size={26} color="white" />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setEditable(true)} style={{ marginHorizontal: 5 }}>
              <Feather name="edit-2" size={26} color="white" />
            </TouchableOpacity>
          }
          <TextInput
            style={{ flex: 1, borderWidth: 1, borderColor: '#fff', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5, color: '#fff' }}
            value={giftUrl}
            onChangeText={(text) => setGiftUrl(text)}
            editable={editable}
            placeholder="Hediye URL'sini buraya yapıştırın"
            placeholderTextColor="#fff"
          />
        </View>
        <Text style={{ fontSize: 16, color: '#fff', marginTop: 10, fontStyle: 'italic' }}>Örnek: https://www.trendyol.com/erkek/ayakkabi</Text>
      </View>

      <Text style={{ color: '#fff', marginBottom: 8 }}>Aklına hediye gelmiyor mu : {'>'} ) </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={{ marginHorizontal: 5, width: 90, height: 50, borderRadius: 30, backgroundColor: '#fff', padding: 2 }} onPress={() => console.log('Item 1')}>
          <Image source={require('../../assets/trendyol.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5, width: 90, height: 50, borderRadius: 30, backgroundColor: '#fff', padding: 2 }} onPress={() => console.log('Item 2')}>
          <Image source={require('../../assets/hepsiburada.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5, width: 90, height: 50, borderRadius: 30, backgroundColor: '#fff', padding: 2 }} onPress={() => console.log('Item 3')}>
          <Image source={require('../../assets/n11.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontStyle: 'italic', fontSize: 16 }}> Her pazar 19:00 instagram canlı yayınıyla açıklanır.</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#fff', fontStyle: 'italic', fontSize: 20 }}> İnstagram: </Text>
          <Text style={{ color: 'orange', fontStyle: 'italic', fontSize: 20 }}> @izlekazann </Text>
        </View>
        <TouchableOpacity style={{ marginTop: 8, width: 90, height: 50 }} onPress={() => console.log('Item 1')}>
          <Image source={require('../../assets/instagram.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>



      <Modal
        animationType="slide"
        transparent={true}
        visible={welcomeVisible}
        onRequestClose={() => setWelcomeVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Modal içeriği buraya gelecek.</Text>
            <TouchableOpacity onPress={() => setWelcomeVisible(false)}>
              <Text style={{ marginTop: 20, color: 'blue' }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={helpVisible}
        onRequestClose={() => setHelpVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Modal içeriği buraya gelecek.</Text>
            <TouchableOpacity onPress={() => setHelpVisible(false)}>
              <Text style={{ marginTop: 20, color: 'blue' }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default MainScreen;


/* 
<Animated.View style={{ justifyContent: 'center', alignItems: 'center', flex: 3, opacity: giveawayOpacity }}>
<Text style={{ fontSize: 16, fontStyle: 'italic', fontWeight: 'bold' }}>500 TL'YE KADAR İSTEDİĞİNİZ HEDİYENİN LİNKİNİ BURAYA YAPIŞTIRIN</Text>
<TextInput editable={giveawayEnabled} value={giftUrl} onChangeText={(text) => setGiftUrl(text)} style={{ width: '75%', borderWidth: 1, borderColor: 'blue', padding: 5 }} />
<TouchableOpacity onPress={giveawayEnabled ? handleUseKeys : undefined} style={{ marginVertical: 10, padding: 10, backgroundColor: 'green' }}>
<Text style={{ color: 'white', fontSize: 18 }}>ÇEKİLİŞE KATIL</Text>
</TouchableOpacity>
</Animated.View> 
*/

/*
 useEffect(() => {
   // Fetch data from AsyncStorage when the component mounts
   const fetchData = async () => {
     try {
       const collectedKeys = await AsyncStorage.getItem("keys");
       if (collectedKeys !== null) {
         setKeys(parseInt(collectedKeys));
       }
     } catch (error) {
       console.log("AsyncStorage error:", error);
     }
   };
   fetchData();
 }, []);

 useEffect(() => {
   // Update progress bar when 'keys' state changes
   Animated.timing(progress, {
     toValue: keys / neededKeys, // Percentage of keys
     duration: 500, // Animation duration
     useNativeDriver: false,
   }).start();

   // Store 'keys' in AsyncStorage whenever it changes
   AsyncStorage.setItem("keys", keys.toString())
     .catch(error => console.log("AsyncStorage error:", error));

   // Enable or disable giveaway based on collected keys
   if (keys >= neededKeys) {
     enableGiveaway();
   } else {
     disableGiveaway();
   }
 }, [keys]);

 const enableGiveaway = () => {
   Animated.timing(giveawayOpacity, {
     toValue: 1,
     duration: 500,
     useNativeDriver: true,
   }).start();
   setGiveawayEnabled(true);
 };

 const disableGiveaway = () => {
   Animated.timing(giveawayOpacity, {
     toValue: 0,
     duration: 500,
     useNativeDriver: true,
   }).start();
   setGiveawayEnabled(false);
 };
*/

/*
STORAGE SİLME
const removeFromStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.log("storagedan silerken hata oldu")
  }
}
*/