import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Screens/LoginScreen/LoginPage';
import SignupPage from '../Screens/SignupScreen/SignupPage';
import HomePage from '../Screens/HomeScreen/HomePage';
import BottomTab from './BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';  
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';

const Stack = createNativeStackNavigator();



const NavigationHandler = () => {

    const [use,SetUser] = useState()
    useEffect(async()=>{

       const user = await AsyncStorage.getItem('user'); 
       SetUser(user)
       console.log("0p0p0p0p0p0p0p0",user);

    },[])
    return (
            <Stack.Navigator>
            {
                use ? (
                    <>
                    <Stack.Screen options={{headerShown:false}} name="DrawerNavigation" component={DrawerNavigation} />
                    </>
                )
                :(
                    <>
                <Stack.Screen options={{headerShown:false}} name="Login" component={LoginPage} />
                <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignupPage} />
                <Stack.Screen options={{headerShown:false}} name="DrawerNavigation" component={DrawerNavigation} />

                    </>
                )
                
                
            }

               
                     
            </Stack.Navigator>
    )
}

export default NavigationHandler

const styles = StyleSheet.create({})