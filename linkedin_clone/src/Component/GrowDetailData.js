import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const GrowDetailData = () => {

    let[fontLoaded] = useFonts({
        'Lora': require('../../assets/fonts/Lora-Italic.ttf'),
        'Poppins': require('../../assets/fonts/Poppins-LightItalic.ttf'),
        'JosefinSans':require('../../assets/fonts/JosefinSans-Italic.ttf'),
        'Raleway': require('../../assets/fonts/Raleway-ExtraBold.ttf')
      })

    const data = [
        {
            Id: 1,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Sumit',
            Text: 'React Native Developer ',
        },
        {
            Id: 2,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Harshil',
            Text: 'VMC Operater',
        },
        {
            Id: 3,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Diya',
            Text: 'Student at Atmiya University',
        },
        {
            Id: 4,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Henil',
            Text: 'Student at Litas stare School',
        },
        {
            Id: 5,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Kunj',
            Text: 'Student at TGS School',
        },
        {
            Id: 6,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Paras',
            Text: 'VMC / CNC Designer',
        },
        {
            Id: 7,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Prushti',
            Text: 'Student at parul University',
        },
        {
            Id: 8,
            Image: require('../../assets/profile.png'),
            Name: 'Rola Hardik',
            Text: 'Shree Radhe EnterPrise ',
        },
        {
            Id: 9,
            Image: require('../../assets/profile.png'),
            Name: 'Donga Rahul',
            Text: 'Shree Radhe Industry',
        },
        {
            Id: 10,
            Image: require('../../assets/profile.png'),
            Name: 'Akshay Dhameliya',
            Text: 'Shive coten & Shree Radhe borwell',
        },
        {
            Id: 11,
            Image: require('../../assets/profile.png'),
            Name: 'Akabari Viral',
            Text: 'Akshar Dhosa Point',
        },
        {
            Id: 12,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya Hardik',
            Text: 'Shree Radhe Finance',
        },
        {
            Id: 13,
            Image: require('../../assets/profile.png'),
            Name: 'Sabhaya harsh',
            Text: 'Star Industry',
        },
      
    ];

    return (
        <View style={{ width: '100%', paddingVertical: 10, backgroundColor: '#364451', height: '100%',paddingHorizontal:10 }}>
            <FlatList
                data={data}
                keyExtractor={item => item.Id.toString()}
                renderItem={({ item }) =>
                    <View style={{ borderColor: '#fff', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',marginVertical:10 }}>
                        <Image source={item.Image} style={{ height: 50, width: 50,borderRadius: 30 }} />
                        <View style={{ width: 200}}>
                            <Text style={{ fontSize: 15, color: '#ffff',fontFamily:'Lora' }}>{item.Name}</Text>
                            <Text style={{ fontSize: 12, color: '#ffff',fontFamily:'Lora' }}>{item.Text}</Text>
                        </View>
                        <View style={{ flexDirection: 'row',gap:15}}>
                            <AntDesign name="closecircleo" size={30} color="#ffff" />
                            <AntDesign name="checkcircleo" size={30} color="#ffff" />
                        </View>
                    </View>}
            />
        </View>
    )
}

export default GrowDetailData

const styles = StyleSheet.create({})