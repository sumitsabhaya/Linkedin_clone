
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GrowDetailData from '../../Component/GrowDetailData';
import CatchupDetailData from '../../Component/CatchupDetailData';
const Tab = createMaterialTopTabNavigator();

export const Grow =()=>{
    return(
        <View>
           <GrowDetailData/>
        </View>
    )
}
export const CatchUP =()=>{
    return(
        <View>
            <CatchupDetailData/>
        </View>
    )
}

const TopTab = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#16FF00' },
    tabBarStyle: { backgroundColor: '#001524' },
    swipeEnabled:false,
    }}>
    <Tab.Screen name="Grow" component={Grow} options={{tabBarLabelStyle: { fontSize: 15 },
    
    tabBarStyle: { backgroundColor: '#364451' },
    tabBarActiveTintColor:"#16FF00",
    tabBarInactiveTintColor:'#ffffff60'
    }}/>
    
    <Tab.Screen name="Catch up" component={CatchUP} options={{tabBarLabelStyle: { fontSize: 15 },
    tabBarItemStyle: {},
    tabBarStyle: { backgroundColor: '#364451'},
    tabBarActiveTintColor:"#16FF00",
    tabBarInactiveTintColor:'#ffffff60'
    }} />
  </Tab.Navigator>
  
  )
}

export default TopTab

const styles = StyleSheet.create({})