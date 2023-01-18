import {  Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
        <Text style={Styles.title}>Personal information</Text>
        <View style={Styles.form}>
          <Text style={Styles.label}>First Name</Text>
          <TextInput style={Styles.textInput}/>
          <Text style={Styles.label}>Last Name</Text>
          <TextInput style={Styles.textInput}/>
          <TouchableOpacity onPress={()=>console.log("Submit")}>
            <Text style={Styles.button}>SUBMIT</Text>
          </TouchableOpacity> 
        </View>
    </View>
  );
}

