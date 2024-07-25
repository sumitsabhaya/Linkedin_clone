import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const CustomDrawer = props => {
  return (
    <View style={{flex: 1,backgroundColor:'#364451'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor:'black'}}>
        <ImageBackground
          style={{backgroundColor:'#364451',padding: 25}}>
          <Image
            source={require('../../assets/profile.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              marginBottom: 5,
            }}>
            Sabhaya Sumit
          </Text>
          <View style={{flexDirection: 'row',paddingVertical:10}}>
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}>
                View Profile
            </Text>
            <Entypo name="pencil" size={24} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ borderTopWidth: 2, borderTopColor: '#ccc'}}></View>
        <View style={{flex: 1, backgroundColor: '#364451', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 2, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="workspace-premium" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 15,
                color:'#fff',
                marginLeft: 5,
              }}>
               Try Premium for ₹0
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="sign-out" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 15,
                color:'#fff',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;