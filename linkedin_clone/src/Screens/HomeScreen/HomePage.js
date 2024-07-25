import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Image,Alert,ActivityIndicator } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import {  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll} from"firebase/storage"

import * as ImagePicker from "expo-image-picker";
import { auth, firebaseConfig } from "../../../firebaseConfig";
import { initializeApp } from 'firebase/app';
import DrawerNavigation from '../../Navigation/DrawerNavigation/DrawerNavigation';



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

const HomePage = ({navigation}) => {

 

  const [data, setData] = useState([]);
    const[name,setname]=useState('');
    const [process, setProcess] = useState("");
    const [files, setFiles] = useState([]);
    const [feedData,setFeedData]=useState([]);
    const todoRef = collection(db, "manav");
    const currentUser = auth.currentUser;
    console.log("currentuserrrrrrr",currentUser);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2500);
      return () => clearTimeout(timeout);
      }, []);

    useEffect(() => {
        readData();
    }, []);
    
useEffect(()=>{
    const ref=collection(db,"Feed");
    onSnapshot(ref,(Feed)=>
    setFeedData(Feed.docs.map((cat)=>({
      id:cat.id,
      data:cat.data()
    })))
    
    )
},[])
console.log("dhiohdiohdiodhiodhiodhiodhioh",feedData);
    async function readData() {
        try {
            const querySnapshot = await getDocs(todoRef);
            const newData = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    Picture: doc.data().Pictures,
                    Name: doc.data().Name,

                };
            });
            setData(newData);
            console.log("gfgrffrfrf",newData);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    
    const uploadToFirebase = async (uri, name, onProgress) => {
      const fetchResponse = await fetch(uri);
      const theBlob = await fetchResponse.blob();
    
      const imageRef = ref(storage, `images/${name}`);
    
      const uploadTask = uploadBytesResumable(imageRef, theBlob);
    
      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress && onProgress(progress);
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            reject(error);
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({
              downloadUrl,
              metadata: uploadTask.snapshot.metadata,
            });
          }
        );
      });
    };

    const listFiles = async () => {
      const storage = getStorage();
    
      // Create a reference under which you want to list
      const listRef = ref(storage, "images");
    
      // Find all the prefixes and items.
      const listResp = await listAll(listRef);
      return listResp.items;
    };
    const pickImage = async (type) => {
      try {
        if (!result.canceled) {
          const { uri } = result.assets[0];
          const fileName = uri.split("/").pop();
          console.log("asdasdasd",fileName);
          const uploadResp = await uploadToFirebase(uri, fileName, (v) =>
            console.log("check",v)
          );
          console.log("upload",uploadResp);
  
          listFiles().then((listResp) => {
            console.log("aas",listResp);
            const files = listResp.map((value) => {
              return { name: value.fullPath };
            });
  
            setFiles(files);
          });
        }
      } catch (e) {
        Alert.alert("Error Uploading Image " + e.message);
      }

    }


  let[fontLoaded] = useFonts({
    'Lora': require('../../../assets/fonts/Lora-Italic.ttf'),
    'Poppins': require('../../../assets/fonts/Poppins-LightItalic.ttf'),
    'JosefinSans':require('../../../assets/fonts/JosefinSans-Italic.ttf'),
    'Raleway': require('../../../assets/fonts/Raleway-ExtraBold.ttf')
   
  })

  const [Count,setCount]=useState(0);
  const data12 = [
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={25} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'chirag abhangi',
      icon: <MaterialIcons name="follow-the-signs" size={25} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'rahul dong',
      icon: <MaterialIcons name="follow-the-signs" size={25} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'paras sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={25} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'jay patel',
      icon: <MaterialIcons name="follow-the-signs" size={25} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'Savan Savaliya',
      icon: <MaterialIcons name="follow-the-signs" size={25} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'Akshay Dhameliya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'sumit sabhaya',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
    {
      profile: require('../../../assets/profile.png'),
      Image: require('../../../assets/bg1.png'),
      Name: 'mana patel',
      icon: <MaterialIcons name="follow-the-signs" size={15} color="white" />
    },
  ];
  return (
    <>
      {loading ? <ActivityIndicator size="large" style={{justifyContent:'center',alignItems:'center',height:'100%'}} /> : <View style={{ height: '100%', paddingTop: 50, paddingHorizontal: 10, backgroundColor: '#191919' }}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 10 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="face-man-profile" size={35} color='white' />
        </TouchableOpacity>
        <View style={{ borderWidth: 1, backgroundColor: '#364451', width: '75%', borderRadius: 5, padding: 3, flexDirection: 'row' }}>
          <Feather name="search" size={25} color="white" style={{}} />
          <TextInput
            style={{ width: '75%' }}
            placeholderTextColor={'#fff'}
            placeholder="Search..."
          />
        </View>
        <TouchableOpacity >
          <AntDesign name="message1" size={30} color='white' />
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedData} renderItem={({ item }) => (
          <View style={{ backgroundColor: '#364451', marginVertical: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:5 }}>
              <View>
                {/* <Image source={item.profile} style={{ height: 50, width: 50, borderRadius: 30 }} /> */}
                <Text style={{ fontSize: 18,fontFamily:'Lora',color:'white' }}>{item.data.Name}</Text>
                <Text style={{ fontSize: 12,fontFamily:'Lora',color:'white' }}>{item.data.Title}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap:5, alignItems: 'center' }}>
              <TouchableOpacity style={{flexDirection:"row",justifyContent:"center"}} onPress={()=>{console.log("sss")}}>
              <MaterialIcons name="follow-the-signs" size={15} color="white" style={{marginRight:10,marginTop:4}}/>
                <Text style={{color:'white',fontFamily:'Lora'}}>Follow</Text>
              </TouchableOpacity>
              </View>
            </View>
            <Image source={{uri:item.data.Picture}} style={{ height: 500, width: '100%', marginVertical: 10 }} />
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', borderRadius: 5,bottom:10}} />
               <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between',paddingHorizontal:10}}>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                  <AntDesign name={Count?"like1":'like2'} size={25} color="white" onPress={()=>setCount(Count+1)}/>
                  <Text style={{color:'#fff',fontFamily:'Lora'}}>Like{Count}</Text>
                  </View>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                   <FontAwesome name="commenting-o" size={25} color="white" />
                   <Text style={{color:'#fff',fontFamily:'Lora'}}>Comment</Text>
                   </View>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                   <Feather name="repeat" size={25} color="white" />
                   <Text style={{color:'#fff',fontFamily:'Lora'}}>Repost</Text>
                   </View>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                   <FontAwesome name="send" size={25} color="white" />
                   <Text style={{color:'#fff',fontFamily:'Lora'}}>Send</Text>
                   </View>
               </View>
            <View>


            </View>  
          </View>
        )}
      />
    </View> }

    </>
   
  )
}

export default HomePage

const styles = StyleSheet.create({})