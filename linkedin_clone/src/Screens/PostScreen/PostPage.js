import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal,Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll} from"firebase/storage"
import * as ImagePicker from "expo-image-picker";
import { addDoc, collection, getFirestore, doc, setDoc, Firestore  } from 'firebase/firestore';
import { app, auth, firebaseConfig } from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

const PostPage = ({navigation}) => {
  const db = getFirestore(app)
  const [modalVisible, setModalVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [title,setTitle]=useState(null);
  const [name,setName]=useState();
  const storage = getStorage();


  

  useEffect(async()=>{
    console.log("========================");

    const data = await AsyncStorage.getItem('user')

    console.log("ssda",data);
    const citiesRef = db.collection('users');
    const snapshot = await citiesRef.doc(userCredential.user).get();
    console.log(snapshot);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return null;
    }  
    snapshot.forEach(doc => {
     
      console.log("asdasd",doc.id, '=>', doc.data());
    });
  },[])
  useEffect(async () => {
    // Fetch and set initial images from Firebase Storage




    listFiles().then((listResp) => {
      const initialFiles = listResp.map((value) => {
        return { name: value.fullPath };
      });
      setFiles(initialFiles);
    });
  }, []);

  const togglemodel = () => {
    setModalVisible(!modalVisible)
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
 
  
    // Create a reference under which you want to list
    const listRef = ref(storage, "images");
  
    // Find all the prefixes and items.
    const listResp = await listAll(listRef);
    return listResp.items;
  };
  

  const addPostt=async()=>{
    if(title && selectedImageUrl ){
      const docRef=await addDoc(collection(db,"Feed"),{
        Name:name,
        Title:title,
        Picture:selectedImageUrl
        
      })
      .then(()=>{
        console.log("uploadeddddddd");
      })
    }
  }

  const pickImage = async (type) => {
    try {
      if (type === "camera") {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [5, 7],
        });
      }
      else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [5, 7], 
        });
      }

      if (!result.canceled) {
        const { uri } = result.assets[0];
        const fileName = uri.split("/").pop();
        console.log("asdasdasd",fileName);
        const uploadResp = await uploadToFirebase(uri, fileName, (v) =>
          console.log("check",v)
        );
        console.log("upload",uploadResp);

        listFiles().then((listResp) => {
          const updatedFiles = listResp.map((value) => {
            return { name: value.fullPath };
          });
          setFiles(updatedFiles);
        });

        // Set the selected image URL
        setSelectedImageUrl(uploadResp.downloadUrl);
      }
    } catch (e) {
      Alert.alert('Error Uploading Image ' + e.message);
    }
  };

  return (
    <View style={{ height: '100%', paddingTop: 50, paddingHorizontal: 10, backgroundColor: '#191919' }}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 5 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="face-man-profile" size={35} color="#fff" />
        </TouchableOpacity>
        <View style={{ borderWidth: 1, backgroundColor: '#364451', width: '60%', borderRadius: 5,flexDirection: 'row' }}>
          <Feather name="search" size={25} color="white" style={{}} />
          <TextInput
            style={{ width: '60%' }}
            placeholderTextColor={"#fff"}
            placeholder="Search..."
            
          />
        </View>
        <View>
          <MaterialIcons name="schedule"  size={30} color="#ffff" />
          </View>
         <TouchableOpacity  onPress={()=>addPostt()} style={{justifyContent:'center',alignItems:'center',borderColor:'#fff',width:50,borderWidth:1,borderRadius:15,height:30,backgroundColor:'#364451'}}>
           <Text style={{fontSize:14,color:'#ffff',fontFamily:'Lora'}}>Post</Text>
         </TouchableOpacity>
      </View>
      <View style={{borderWidth: 1, backgroundColor: '#364451', width: '100%',height:50, padding: 3, flexDirection: 'row'}}>
      <TextInput
            style={{ width: '50%',fontSize:18 }}
            placeholderTextColor={"#ffffff60"}
            placeholder="Name"
            color='#fff'
            onChangeText={(text)=>setName(text)}
          />
      </View>
      <View style={{borderWidth: 1, backgroundColor: '#364451', width: '100%',height:50, padding: 3, flexDirection: 'row'}}>
      <TextInput
            style={{ width: '100%',fontSize:12 }}
            placeholderTextColor={"#ffffff60"}
            placeholder="What do you want to talk about?"
            color='#fff'
            onChangeText={(text)=>setTitle(text)}
          />
      </View>
      {selectedImageUrl ?(
          <Image
            source={{ uri: selectedImageUrl }}
            style={{ height: 500, width: '100%', marginVertical: 10, backgroundColor: 'yellow', marginVertical: 10 }}
          />
        ):<View style={{backgroundColor:'red',height:500,width:'100%'}}/>}

      <TouchableOpacity onPress={togglemodel} style={{ padding: 15,width:'100%',marginRight: 15,alignItems:'flex-end'}}>
      <Ionicons name="image" size={30} color="#ffffff60" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}

      >

        <View style={{ justifyContent: 'center', backgroundColor: '#fff', height:'100%',alignItems: 'center', gap: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity onPress={togglemodel} style={{ padding: 15, backgroundColor: 'blue', marginRight: 15 }}>
              <Text style={{ color: '#fff', fontsize: 14 }}>Close Model</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => pickImage("Gallery")} style={{ padding: 15, backgroundColor: 'blue', marginRight: 15 }}>
                <Text style={{ color: '#fff', fontsize: 14 }}>Open Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => pickImage("camera")} style={{ padding: 15, backgroundColor: 'blue', marginRight: 15 }}>
                <Text style={{ color: '#fff', fontsize: 14 }}>Open Cemera</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>


    </View>
  )
}

export default PostPage














