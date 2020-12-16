import React, { useState } from 'react';
import {
  View,
  Text,
Button,
Image,
TouchableOpacity,
StyleSheet
} from 'react-native';

import {RNCamera} from 'react-native-camera'

const PendingView = () => (
  <View 
style={{
  flex:1,
  alignItems:'center'
  ,justifyContent:"center"
}}
  >

<Text style={{fontSize:30,color:'red'}}>Loading . . .</Text>
  </View>
)

const App= () => {
  
const [image,setimage]= useState(null)

const takePicture = async (camera) => {
console.log("Camera",camera)
  try{
    const options = {quality:0.9,base64: false}
    const data = await camera.takePictureAsync(options)
setimage(data.uri)
  }catch(error){
    console.warn(error)
  }

}
  return (
    <>
<View style={styles.container}>
{image ? (
  <View style={styles.preview}>
  <Text style={styles.camtext}>Here is your profile pic</Text>
<Image source={{uri:image,width:'100%',height:"80%"}} style={styles.clicked} />
</View>
) : (
<RNCamera
 style={styles.preview} 
 type={RNCamera.Constants.Type.back}
 captureAudio={false}
flashMode={RNCamera.Constants.FlashMode.on}
androidCameraPermissionOptions={{
  title:"Permission to use camera",
  message:"Longer text to use camera",
  buttonPositive:"OK",
  buttonNegative:"Cancel"
}}
androidRecordAudioPermissionOptions={{
  title:"Permission to use audio",
  message:"Longer text to use audio",
  buttonPositive:"OK",
  buttonNegative:"Cancel"
}}
 >
{({camera,status})=> {
if(status !== "READY") return <PendingView />
return(
  <View 
  style={{
    flex:0,
    flexDirection:"row",
    justifyContent:"center"
  }}
  >
    <TouchableOpacity
    onPress={() => takePicture(camera)}
   style={styles.capture}
    >
      <Text>clicked</Text>
    </TouchableOpacity>
  </View>
) 
}}
</RNCamera>
)}

</View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container :{
    flex:1,
    flexDirection:"column",
    backgroundColor:"#0A79DF",
  },
  preview:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  capture:{
    flex:0,
    backgroundColor:"orange",
    padding:20,
    alignItems:"center"
  },
  camtext:{
    backgroundColor:"#3498",
    color:"#FFFFFF",
    marginBottom:10,
    width:"100%",
    textAlign:"center",
    paddingVertical:20,
    fontSize:25
  },
  clicked:{
    width:300,
    height:300,
    borderRadius:150 
   }
})