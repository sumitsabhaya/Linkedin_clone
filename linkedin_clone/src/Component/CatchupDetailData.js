import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const CatchupDetailData = () => {

  let[fontLoaded] = useFonts({
    'Lora': require('../../assets/fonts/Lora-Italic.ttf'),
    'Poppins': require('../../assets/fonts/Poppins-LightItalic.ttf'),
    'JosefinSans':require('../../assets/fonts/JosefinSans-Italic.ttf'),
    'Raleway': require('../../assets/fonts/Raleway-ExtraBold.ttf')
  })

const data = [
    {
        Id:1,
        title: 'All',
    },
    {
        Id:2,
        title: 'Job changes',
    },
    {
        Id:3,
        title: 'Hiring',
    },
    {
        Id:4,
        title: 'Birthdays',
    },
    {
        Id:5,
        title: 'Work anniversaries',
    },
    {
        Id:6,
        title: 'Education',
    },
];
  return (
    <View style={{width:'100%',paddingVertical:10,backgroundColor:'#364451',height:60}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.Id.toString()}
        renderItem={({item}) => 
        <TouchableOpacity style={{borderColor:'#fff',borderWidth:1,borderRadius:15,height:40,justifyContent:'center',alignItems:'center',paddingHorizontal:10,marginRight:15}}>
        <Text style={{fontSize:15,color:'#ffff',fontFamily:'Lora'}}>{item.title}</Text></TouchableOpacity>}
      />
    </View>
  )
}

export default CatchupDetailData

const styles = StyleSheet.create({})