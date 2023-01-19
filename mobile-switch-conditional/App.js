import { useState } from 'react';
import {  Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  // Register state used for conditional rendering
  const [register, setRegister] = useState(false);

  const buttonText = register ? 'REGISTER' : 'LOGIN' 

  return (
    <View style={Styles.container}>
      <View style={Styles.switchRow}>
        <Text>Login/Register</Text>
        <Switch 
          style={Styles.switch}
          value={register}
          onValueChange={()=>setRegister(!register)}
        />
      </View>
      { register &&
        <View>
          <FormInput label={'First name'}/>
          <FormInput label={'Last name'}/>
        </View>
      } 
      <FormInput label={'Email'}/>
      <FormInput label={'Password'} isPw={true}/>
      <TouchableOpacity>
        <Text style={Styles.button}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Component for label text an input
 */
function FormInput({label, isPw}){
  return(
    <View>
      <Text style={Styles.label}>{label}</Text>
      <TextInput secureTextEntry={isPw} style={Styles.textInput}/>
    </View>
  )
}
