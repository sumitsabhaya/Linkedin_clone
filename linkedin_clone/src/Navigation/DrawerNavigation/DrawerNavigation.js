import * as React from 'react';
import {  View ,Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from '../BottomTab';
import GrowDetailData from '../../Component/GrowDetailData';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomDrawer from '../../Component/CustomDrawer';


const Drawer = createDrawerNavigator();

export const Groups=()=>{
  return(
    <View>
    </View>
  )
}

export const Events=()=>{
  return(
    <View>
      <Text>ghj</Text>
    </View>
  )
}
export const Setting=()=>{
  return(
    <View>
      <Text>ghj</Text>
    </View>
  )
}

export default DrawerNavigation =({navigation})=> {
  return (
  
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#fff',
      drawerActiveTintColor: 'black',
      drawerInactiveTintColor: '#fff',
      drawerLabelStyle: {
        fontSize: 15,
      },
    }}>
       <Drawer.Screen
        name="Home"
        component={BottomTab}
       
      />
        <Drawer.Screen options={{
          drawerLabelStyle:{fontSize:20},
          drawerIcon: ({color}) => (
            <MaterialIcons name="groups" size={24} color="black" /> 
          ),
        }} name="Groups" component={Groups} />
        <Drawer.Screen options={{
          drawerLabelStyle:{fontSize:20},
          drawerIcon: ({color}) => (
            <MaterialIcons name="emoji-events" size={24} color="black" />
          ),
        }} name="Events" component={Events} />
        <Drawer.Screen options={{
          drawerLabelStyle:{fontSize:20},
          drawerIcon: ({color}) => (
            <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Feather name="settings" size={24} color="black" /> 
            </TouchableOpacity>
          ),
        }} name="Setting" component={Setting} />
        
      </Drawer.Navigator>
    
  );
}