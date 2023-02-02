import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, View} from 'react-native';
import Styles from './styles/Styles.js';
import {MD3LightTheme, Provider, Text, Button, TextInput} from 'react-native-paper';

const MyTheme ={
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary: '#026a84'
  },
  roundness: 1
}

export default function App() {
  
  return (
   <Provider theme={MyTheme}>
    <SafeAreaView style={Styles.container}>
      <Text style={{color: MyTheme.colors.primary, alignSelf: 'center'}} variant='headlineLarge'>Login</Text>
      <TextInput 
        left={<TextInput.Icon icon={'email'} iconColor={MyTheme.colors.primary}/>} 
        mode='outlined' 
        label={'Username'}
      />
      <TextInput 
        left={<TextInput.Icon icon={'lock'} iconColor={MyTheme.colors.primary}/>} 
        mode='outlined' 
        label={'Password'} 
        secureTextEntry
      />
      <Button mode='contained' style={{marginTop: 10}}>
        SUBMIT
      </Button>
    </SafeAreaView>
   </Provider>
  );
}

