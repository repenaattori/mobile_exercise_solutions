import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
      <SumView />
      <CurrencyView/>
    </View>
  );
}

/**
 * Calculate sum of two integers
 * Add all the necessary event handling for calculating the sum when pressing button
 * You may assure the number format in calculation using e.g. Number(num1)
 */
function SumView(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  function calcSum(){
    let sum = Number(num1) + Number(num2);
    setSum(sum);
  }

  //In this example we have made a separate component for label+input and reuse it
  //Not part of the exercise, but example of good practice.
  return (
    <View>
      <FormInput label='Number 1:' value={num1} onchange={setNum1}/>
      <FormInput label='Number 2:' value={num2} onchange={setNum2}/>
      <Button 
        title='Sum' 
        onPress={calcSum}
      />
      <Text style={Styles.result}>Sum is {sum}</Text>
    </View>
  );
}

function FormInput({label, value, onchange}){
  return(
    <View>
      <Text style={Styles.label}>{label}</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={value} 
        style={Styles.textInput}
        onChangeText={ t => onchange(t) }
      />
    </View>
  );
}


/**
 * Create euros to pounds converter
 * JS uses . in decimal numbers.
 * You may replace comma given in UI with dot 
 * using e.g. let withoutComma = value.replace(',','.')
 * You may round the result to specific number of decimals by using e.g. result.toFixed(2) 
 */
function CurrencyView(){
  const [euros, setEuros] = useState(0);
  const [pounds, setPounds] = useState(0);
  const rate = 0.89;

  function calculate(givenEuros){
    setEuros( Number(givenEuros) );
    setPounds( rate * Number(givenEuros) );
  }

  return (
    <View>
      <FormInput label='Euros' value={euros} onchange={calculate}/>
      <Text style={Styles.result}>{euros}€ = {pounds}£</Text>
    </View>
  );
}
