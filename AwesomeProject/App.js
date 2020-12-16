import React,{useState} from "react"
import
 {Text,
View,
StyleSheet,
TouchableOpacity
}

from "react-native"

const App = () => {
  
  const [randomColor, setrandomColor] = useState("rgb(32,110,126)")
  
const colorChanger =()=>{
const color= `rgb(${Math.floor(Math.random()*99)},${Math.floor(Math.random()*99)},${Math.floor(Math.random()*99)})`
setrandomColor(color)
}
  
  return (
    <>
<View style={[styles.container,{backgroundColor:randomColor}]}>
<TouchableOpacity onPress={()=>{setrandomColor("#000000")}}>
<Text style={[styles.text,{marginBottom:5}]}>
  Reset 🙂
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={colorChanger}>
<Text style={styles.text}>
  Click me 🙂
</Text>
</TouchableOpacity>
</View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#ffffff",
    borderRadius:15,
    textTransform:"uppercase"
  }
})