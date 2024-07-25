import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Notifications = ({navigation}) => {
  return (
    <View style={{ height: '100%', paddingTop: 50, paddingHorizontal: 10, backgroundColor: '#191919' }}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 10 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="face-man-profile" size={35} color="#ffff" />
        </TouchableOpacity>
        <View style={{ borderWidth: 1, backgroundColor: '#364451', width: '65%', borderRadius: 5, padding: 3, flexDirection: 'row' }}>
          <Feather name="search" size={25} color="white" />
          <TextInput
            style={{ width: '75%' }}
            placeholderTextColor={"#fff"}
            placeholder="Search..."
          />
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between',gap:8}}>
          <AntDesign name="setting" size={30} color="#ffff" />
        <TouchableOpacity >
          <AntDesign name="message1" size={30} color="#ffff" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})