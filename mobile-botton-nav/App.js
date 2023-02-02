import { StatusBar } from 'expo-status-bar';
import {  View} from 'react-native';
import Styles from './styles/Styles.js';
import {MD3LightTheme, Provider, Text, Button, TextInput} from 'react-native-paper';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//This returns some options to modify the bottom tabs. The icon is selected 
//depending on the route.
function getOptions({route}){
  const iconName = route.name == 'Home' ? 'home' : 'user';
  return {
    tabBarIcon: ({color,size}) => <FontAwesome name={iconName} size={size} color={color}/>,
    tabBarStyle: {backgroundColor: MD3LightTheme.colors.primary},
    tabBarInactiveBackgroundColor: MD3LightTheme.colors.primaryContainer,
    tabBarActiveTintColor: MD3LightTheme.colors.onPrimary,
  };
}

export default function App() {

  return (
   <NavigationContainer>
    <Tab.Navigator screenOptions={getOptions}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}

function Profile({route}){

  //Checking if the params exist
  //The profile may be started without parameters from bottom menu (params is not defined)
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
