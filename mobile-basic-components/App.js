import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from './components/Logo.js';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <Logo title='Music services'/>
          <Logo title='Special logo'/>
          <Logo title='Whateva'/>
          <Logo title='May the force be with you'/>
          <StatusBar style='auto'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

