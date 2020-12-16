/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {Text, TouchableOpacity,StyleSheet,View,Image} from 'react-native';
import dice1 from './assets/dice1.png'
import dice2 from './assets/dice2.png'
import dice3 from './assets/dice3.png'
import dice4 from './assets/dice4.png'
import dice5 from './assets/dice5.png'
import dice6 from './assets/dice6.png'



const App = () => {

  const [state, setstate] = useState("Press ROLL BUTTON TO START THE GAME 😄")
  const img= [dice1,dice2,dice3,dice4,dice5,dice6]
  const onPressHandler = () => {
const rand = Math.floor(Math.random()*6);
setstate(img[rand])
  }
const resetHandler = () => {
  setstate(<Text style={{color:"#ffffff",fontWeight:"bold",fontSize:25}}>Press ROLL BUTTON TO START THE GAME 😄</Text>)
}


  
  return (
    <>
    <View style={style.container}>

{ typeof state === "number" ?   <Image style={{width:100,height:100}} source={state} /> : <Text>{state}</Text>}
    <TouchableOpacity onPress={onPressHandler} >
      <Text style={style.button}>ROLL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetHandler} >
      <Text style={style.buttonreset}>Reset</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default App;

const style=StyleSheet.create({
  container:{
    backgroundColor:"green",
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    marginTop:40,
    backgroundColor:"red",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#30475E",
    borderRadius:5,
    borderWidth:3,
    fontWeight:"bold"
    
  },
  buttonreset:{
    backgroundColor:"#ffff00",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#30475E",
    borderRadius:5,
    borderWidth:3,
    fontWeight:"bold"
    
  }
})