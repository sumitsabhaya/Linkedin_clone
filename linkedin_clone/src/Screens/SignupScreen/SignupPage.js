import { ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import {auth,app} from "../../../firebaseConfig"
import { getFirestore,addDoc,collection, Firestore, documentId} from 'firebase/firestore';      
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useFonts } from 'expo-font';

const logo = require('../../../assets/logo.png')
const SignupPage = ({ navigation }) => {
    let[fontLoaded] = useFonts({
        'Lora': require('../../../assets/fonts/Lora-Italic.ttf'),
        'Poppins': require('../../../assets/fonts/Poppins-LightItalic.ttf'),
        'JosefinSans':require('../../../assets/fonts/JosefinSans-Italic.ttf'),
        'Raleway': require('../../../assets/fonts/Raleway-ExtraBold.ttf')
       
      })
     

    const [Name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [isVisible, setVisible] = useState(false);
    const [text, setText] = React.useState('');
   const db = getFirestore(app)

   const toggleButton = ()=>{
    setVisible(!isVisible)
}

  const submit = async() => {

   
 await createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user",user);

    const usersRef = collection(db,'users') // collectionRef
const userRef = doc(usersRef) // docRef
const id = userRef.id // a docRef has an id property
const userData = {id} 
    const docref = await addDoc (collection(db,"users" ),{
        
        Name: Name,
        phone: phone,
        email: email,
        password: password
      })

    

  

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("asdasdasdas",error);
    // .
})
navigation.navigate('Login')
}

    return (
        <ScrollView>
            <View>
                <View style={{ backgroundColor: '#0077b5', height: 250,justifyContent:'center',alignItems:'center',marginVertical:15}}>
                    <AntDesign onPress={()=>navigation.goBack()} name="arrowleft" size={30} color='#fff' style={{position:'absolute',left:10,top:30 }} />
                        <Image source={logo} style={{ height: 80, width: 300 }} />
                </View>
                <View style={{ backgroundColor: '#EEEDEB', height: 70, alignItems: 'center',justifyContent:'center', paddingVertical: 10, borderRadius: 35, bottom: 45, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, paddingLeft: 5 }}>
                    <Text style={{ fontSize: 18,fontFamily:'JosefinSans' }}>Make the most of your professional life</Text>
                </View >
                <View style={{ backgroundColor: '#fff', height: '100%', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 35, bottom: 50, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, zIndex: 1 }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10, paddingVertical: 10 }}>
                        <TextInput
                            style={{ width: '90%'}}
                            mode="outlined"
                            outlineColor='gray'
                            activeOutlineColor='#0077b5'
                            label="Enter your Name"
                            value={Name}
                            onChangeText={(text)=>{
                                setName(text)
                            }}
                            right={<TextInput.Affix />}
                        />
                        <TextInput
                            style={{ width: '90%' }}
                            mode="outlined"
                            outlineColor='gray'
                            activeOutlineColor='#0077b5'
                            label="phone number"
                            value={phone}
                            onChangeText={(text)=>{
                                setphone(text)
                            }}
                            right={<TextInput.Affix />}
                        />
                        <TextInput
                            style={{ width: '90%' }}
                            mode="outlined"
                            outlineColor='gray'
                            activeOutlineColor='#0077b5'
                            label="Email "
                            value={email}
                            onChangeText={(text)=>{
                                setEmail(text)
                            }}
                            right={<TextInput.Affix />}
                        />
                        <View  style={{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                        <TextInput
                            style={{ width: '90%' }}
                            mode="outlined"
                            outlineColor='gray'
                            secureTextEntry={!isVisible}
                            activeOutlineColor='#0077b5'
                            label="Password "
                            value={password}
                            onChangeText={(text)=>{
                                setpassword(text)
                            }}
                        //     right={<TextInput.Icon style={{backgroundColor:'#000'}}  name={isVisible ? 'eye' : 'eye-off'} onPress={() => toggleButton()} />}
                         />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingVertical: 10,fontstyle: 'italic' }}>
                        <Text style={{fontFamily:'JosefinSans'}}>By clicking Agree & Join or Continue, you agree to the LinkedIn</Text>
                        <View>
                            <Text style={{ color: '#0077b5', fontFamily:'JosefinSans'}}>User Agreement, Privacy Policy, {<Text style={{ color: '#000' }}>and</Text>} Cookie Policy.</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => submit()} style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: '70%', backgroundColor: '#0077b5', borderRadius: 30, marginVertical: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 20,fontFamily:'JosefinSans'}}>Agree & Join</Text>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10, paddingVertical: 15 }}>
                        <View style={{ width: '40%', height: 1, backgroundColor: 'gray', borderRadius: 5 }} />
                        <Text style={{fontFamily:'JosefinSans'}}>OR</Text>
                        <View style={{ width: '40%', height: 1, backgroundColor: 'gray', borderRadius: 5 }} />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', paddingVertical: 10, gap: 10 }}>
                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={{ alignItems: 'center', justifyContent: 'center', gap: 10, flexDirection: 'row', height: 50, width: '90%', backgroundColor: '#ffff', borderWidth: 2, borderRadius: 30 }}>
                            <FontAwesome name="google-plus" size={24} color="black" />
                            <Text style={{fontFamily:'JosefinSans',fontSize:15}}>Continue With Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                        <Text style={{fontFamily:'JosefinSans'}}>Already on Linkedln?</Text>
                        <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
                            <Text style={{ color: '#0077b5',fontFamily:'JosefinSans' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 12, paddingRight: 12, paddingVertical: 10 }}>
                            <Text style={{fontFamily:'JosefinSans'}}>Looking to create a page for a business?{<Text style={{ color: '#0077b5',fontFamily:'JosefinSans' }}>Get help</Text>}</Text>
                        </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignupPage

const styles = StyleSheet.create({
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