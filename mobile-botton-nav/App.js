import { StatusBar } from 'expo-status-bar';
import {  View} from 'react-native';
import Styles from './styles/Styles.js';
import {MD3LightTheme, Provider, Text, Button, TextInput} from 'react-native-paper';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function getOptions({route}){

}

export default function App() {

  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}

function Profile({route}){

  const fname = route.params ? route.params.fname : '';
  const lname = route.params ? route.params.lname : '';

  return(
    <Provider theme={MD3LightTheme}>
      <View>
        <Text variant='headlineLarge'>Welcome {fname} {lname}</Text>
      </View>
    </Provider>
  )
}

function Home({navigation}){

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  return(
    <Provider theme={MD3LightTheme}>
      <View>
        <Text variant='headlineLarge'>User information</Text>
        <TextInput mode='outlined' label='First name' value={fname} onChangeText={t=>setFname(t)}/>
        <TextInput mode='outlined' label='Last name' value={lname} onChangeText={t=>setLname(t)}/>
        <Button mode='contained' onPress={()=> navigation.navigate('Profile', {fname, lname}) }>Submit</Button>
      </View>
    </Provider>
  )
}
