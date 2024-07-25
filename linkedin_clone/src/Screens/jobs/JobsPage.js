import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const JobsPage = ({navigation}) => {

  let[fontLoaded] = useFonts({
    'Lora': require('../../../assets/fonts/Lora-Italic.ttf'),
    'Poppins': require('../../../assets/fonts/Poppins-LightItalic.ttf'),
    'JosefinSans':require('../../../assets/fonts/JosefinSans-Italic.ttf'),
    'Raleway': require('../../../assets/fonts/Raleway-ExtraBold.ttf')
   
  })

  return (
    <View style={{ height: '100%', paddingTop: 50, paddingHorizontal: 10, backgroundColor: '#191919' }}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 10 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="face-man-profile" size={35} color='white' />
        </TouchableOpacity>
        <View style={{ borderWidth: 1, backgroundColor: '#364451', width: '75%', borderRadius: 5, padding: 3, flexDirection: 'row' }}>
          <Feather name="search" size={25} color="white" style={{}} />
          <TextInput
            style={{ width: '75%', }}
            placeholderTextColor={"#fff"}
            placeholder="Search..."
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
          <Entypo name="dots-three-vertical" size={30} color="#ffff" />
          <TouchableOpacity >
            <AntDesign name="message1" size={30} color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between',paddingHorizontal:10}}>
        <TouchableOpacity style={{borderColor:'#fff',borderWidth:1,borderRadius:15,height:30,justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>
          <Text style={{fontSize:15,color:'#ffff',fontFamily:'Lora'}}>My jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:'#fff',borderWidth:1,borderRadius:15,height:30,justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>

          <Text style={{fontSize:15,color:'#ffff',fontFamily:'Lora'}}>Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:'#fff',borderWidth:1,borderRadius:15,height:30,justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>

          <Text style={{fontSize:15,color:'#ffff',fontFamily:'Lora'}}>Post a Free job</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default JobsPage

const styles = StyleSheet.create({})