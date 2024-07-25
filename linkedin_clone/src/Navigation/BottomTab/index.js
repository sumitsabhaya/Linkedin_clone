
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../Screens/HomeScreen/HomePage';
import MyNetwork from '../../Screens/MyNetworkScreen/MyNetwork';
import PostPage from '../../Screens/PostScreen/PostPage';
import Notifications from '../../Screens/Notificatons/Notifications';
import JobsPage from '../../Screens/jobs/JobsPage';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor: '#364451',
            tabBarLabelStyle:{color:'#ffff'},
            height:60
            
          }
        }}>
            <Tab.Screen  name="HomePage" component={HomePage} options={{ headerShown:false,
          tabBarLabel: 'Home',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'gray',
          tabBarLabelStyle:{fontSize:14},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={20} color="#ffff" />
          ),
        }}
       /> 
            <Tab.Screen name="MyNetwork" component={MyNetwork} options={{headerShown:false,
          tabBarLabel: 'MyNetWork',
          tabBarActiveTintColor:'#fff',
          tabBarLabelStyle:{fontSize:14},
          tabBarInactiveTintColor:'gray',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="network-wired" size={20} color="#ffff" />
          ),
        }}
       /> 
            <Tab.Screen name="PostPage" component={PostPage} options={{headerShown:false,
          tabBarLabel: 'Post',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'gray',
          tabBarLabelStyle:{fontSize:14},
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="post-add" size={20} color="#ffff" />
          ),
        }}
       />  
            <Tab.Screen name="Notification" component={Notifications} options={{headerShown:false,
          tabBarLabel: 'Notification',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'gray',
          tabBarLabelStyle:{fontSize:14},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={20} color="#ffff" />
          ),
        }}
       /> 
            <Tab.Screen name="JobsPage" component={JobsPage} options={{headerShown:false,
          tabBarLabel: 'Jobs',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'gray',
          tabBarLabelStyle:{fontSize:14},
          tabBarIcon: ({}) => (
            <FontAwesome5 name="shopping-bag" size={20} color="#ffff" />
          ),
        }}
       /> 
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})