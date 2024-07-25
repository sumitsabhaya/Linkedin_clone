import { ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import {auth,app} from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';  
import { Firestore, getFirestore } from 'firebase/firestore';

const logo = require('../../../assets/logo.png')
const LoginPage = ({ navigation }) => {

    let[fontLoaded] = useFonts({
        'Lora': require('../../../assets/fonts/Lora-Italic.ttf'),
        'Poppins': require('../../../assets/fonts/Poppins-LightItalic.ttf'),
        'JosefinSans':require('../../../assets/fonts/JosefinSans-Italic.ttf'),
        'Raleway': require('../../../assets/fonts/Raleway-ExtraBold.ttf')
       
      })

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [isVisible, setVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [text, setText] = React.useState('');
    const db = getFirestore(app)
    
    const toggleButton = ()=>{
        setVisible(!isVisible)
    }

    const submit = () =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("asdasd",user);
    AsyncStorage.setItem('user',JSON.stringify (user));  
    navigation.navigate("DrawerNavigation")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
// useEffect(()=>{
//     sendData();
// },[])
// const sendData=()=>{
//     Firestore().collection('users').doc(auth().currentUser.uid).set({name:"sujal",email:"sujalpatel1502@gmail.com",password:"12345",phone:"8788338061"}).then(()=>console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"))
// }
    return (
        <ScrollView>
            <View  >
                <View style={{ backgroundColor:'#0077b5',height: 250 ,justifyContent:'center',alignItems:'center',marginVertical:15}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={logo} style={{ height: 80, width: 300 }} />
                    </View>
                </View>
                <View style={{backgroundColor: '#EEEDEB', height: 70, alignItems: 'center',justifyContent:'center', paddingVertical: 10, borderRadius: 35, bottom: 45, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, paddingLeft: 5 }}>
                    <Text   style={{ fontSize: 16, fontFamily:'JosefinSans' }}>Sign Up</Text>
                    <View>
                        <Text style={{ fontSize: 18,fontFamily:'JosefinSans'}}>Stay Updated on Your Professional World</Text>
                    </View>
                </View >
                <View style={{ width: '100%', backgroundColor: '#fff', height: '100%', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 35, bottom: 45, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, zIndex: 1, paddingVertical: 10 }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10, }}>
                        <TextInput
                            style={{ width: '90%' }}
                            mode="outlined"
                            outlineColor='gray'
                            activeOutlineColor='#0077b5'
                            label="Email"
                            value={email}
                            onChangeText={(text)=>{
                                setEmail(text)
                            }}
                            right={<TextInput.Affix />}
                        />
                       <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                        <TextInput
                            style={{ width: '90%'}}
                            mode="outlined"
                            outlineColor='gray'
                            secureTextEntry={!isVisible}
                            activeOutlineColor='#0077b5'
                            label="Password"
                            value={password}
                            onChangeText={(text)=>{
                                setpassword(text)
                            }}
                            // right={<TextInput.Icon  style={{backgroundColor:'#000'}} name={isVisible ? 'eye' : 'eye-off'} onPress={() => toggleButton()} />}
                        />
                        </View>
                        <View style={{ flexDirection: 'row',marginBottom: 20, width: '90%', paddingVertical: 10 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#0077b5', fontSize:14,fontFamily:'JosefinSans'}}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => submit()} style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: '70%', backgroundColor: '#0077b5', borderRadius: 30 }}>
                        <Text style={{ color: '#fff',fontFamily:'JosefinSans',fontSize: 22 }}>Sign in</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10, paddingVertical: 15 }}>
                        <View style={{ width: '40%', height: 1, backgroundColor: 'gray', borderRadius: 5 }} />
                        <Text style={{fontFamily:'JosefinSans'}}>OR</Text>
                        <View style={{ width: '40%', height: 1, backgroundColor: 'gray', borderRadius: 5 }} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingVertical: 10 }}>
                        <Text style={{fontFamily:'JosefinSans',fontSize:15}}>By clicking Agree & Join or Continue, you agree to the LinkedIn</Text>
                        <View>
                            <Text style={{ color: '#0077b5', fontFamily:'JosefinSans',fontSize:14}}>User Agreement, Privacy Policy, {<Text style={{ color: '#000',fontFamily:'Lora' }}>and</Text>} Cookie Policy.</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', paddingVertical: 10, gap: 10 }}>
                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={{ alignItems: 'center', justifyContent: 'center', gap: 10, flexDirection: 'row', height: 50, width: '90%', backgroundColor: '#ffff', borderWidth: 2, borderRadius: 30 }}>
                            <FontAwesome name="google-plus" size={24} color="black" />
                            <Text style={{fontFamily:'JosefinSans',fontSize:15}}>Continue With Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={{ alignItems: 'center', justifyContent: 'center',  gap: 10, flexDirection: 'row', height: 50, width: '90%', backgroundColor: '#ffff', borderWidth: 2, borderRadius: 30 }}>
                            <FontAwesome name="apple" size={24} color="black" />
                            <Text style={{fontFamily:'JosefinSans',fontSize:15}}>Sign in With Apple</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={{ alignItems: 'center', justifyContent: 'center',  gap: 10, flexDirection: 'row', height: 50, width: '90%', backgroundColor: '#ffff', borderWidth: 2, borderRadius: 30 }}>
                            <FontAwesome5 name="link" size={24} color="black" />
                            <Text style={{fontFamily:'JosefinSans',fontSize:15}}>Sign in With a one-time link</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical:10, flexDirection: 'row', justifyContent: 'center',gap:10, width: '80%' }}>
                        <Text style={{fontFamily:'JosefinSans',fontSize:15}}>New To linkedin?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: '#0077b5',fontFamily:'JosefinSans' }}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default LoginPage

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: '100%',
    },
    input: {
        height: 48,
        width: '80%',
        borderColor: '#0077b5',
        backgroundColor: '#FFFFEC',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 22,
        bordorRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


