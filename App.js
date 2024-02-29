
import { StyleSheet, Text, View ,Image ,TouchableOpacity, TouchableHighlight, TextInput} from 'react-native';
import DropdownComponent from './src/DropdownComponent';
import RadioButtonComponent from "./src/RadioButtonComponent"
import saveApiData from './src/Context';


export default function App() {
 
  return (
    <View style={styles.container} >
      <View style={styles.containerMid}>

        <View style={styles.header}>
        <Text style={styles.baseText}>ÇIKTI ALMA UYGULAMASI</Text> 
        </View>

        <View style={styles.containerDropdown}>
        <DropdownComponent ></DropdownComponent>
        </View>

        <View style={styles.containerRadioButton}>
        <RadioButtonComponent></RadioButtonComponent>
        </View> 
        <TouchableHighlight underlayColor={'blue'} style={styles.button} onPress={saveApiData}>
        <Text style={{fontSize:25,fontWeight:'400'}}>Yazdır</Text>
      </TouchableHighlight>     
      <Image style={styles.imageStyle} source={require('./assets/teknomobil.png')}/>
   

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  containerDropdown:{
    //backgroundColor:'red',
    height:100,
    width:300,
    alignItems:'center',  
  },
  containerRadioButton:{
    //backgroundColor:'white',
    height:70,
    width:300,
    alignItems:'center', 
  },
  header:{
    borderRadius:20,
    height:100,
    width:300,
    //backgroundColor:'yellow',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },  
  containerMid:{
      borderWidth:5,
      height:415,
      width:300,
      backgroundColor: '#ccf4e0',
      alignItems:'center',
      borderRadius:20,   
  }, 
  imageStyle:{
    marginTop:5,
    marginLeft:220,
    height:40,
    width:60,
    resizeMode:'stretch',
  },
  button:{
    width:290,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding:10, 
  },
  baseText:{
    fontSize:30,
    fontWeight:'bold'
  },


});
