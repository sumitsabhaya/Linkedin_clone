import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationHandler from './src/Navigation/NavigationHandler';
import { useFonts} from 'expo-font';




// Define a style to apply to all Text components to disable font scaling
// const styles = StyleSheet.create({
//   noFontScaling: {
//     fontSize: 30, 
//     allowFontScaling: false,
//   },
// });

// CustomText component to disable font scaling
// const CustomText = (props) => (
//   <Text {...props} style={[styles.noFontScaling, props.style]}>
//     {props.children}
//   </Text>
// );


const App = () => {
  return (
    <NavigationContainer>
      <NavigationHandler />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


// export { CustomText, App as default };
