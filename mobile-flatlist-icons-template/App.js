import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import Styles from './styles/Styles.js';
import { MaterialIcons } from '@expo/vector-icons';

const icons = [
  'ac-unit', 'adb',  'agriculture', 'alarm', 'animation', 'audiotrack',
  'auto-stories', 'beach-access', 'cake', 'camera', 'devices', 'face'
];

export default function App() {

  const [messages, setMessages] = useState([{msg: 'Hello..', icon: 'camera'}]);
  const [text, setText] = useState("");
  
  function addMessage(){
    let ind = Math.floor(Math.random() * icons.length);  //0 - icons.length-1
    let iconName = icons[ind];
    let msg = {msg: text, icon: iconName }
    setMessages([...messages, msg]);
  }

  return (
      <View style={Styles.container}>
        <TextInput style={Styles.textInput} value={text} onChangeText={t => setText(t)} />
        <Button title='Add message' onPress={addMessage} />
        <FlatList
          data={messages}
          renderItem={ ({item, index}) => <MessageItem message={item} index={index}/> }
        />
      </View>
  );
}


function MessageItem({message, index}){

  const color = index%2 == 0 ? Styles.evenColor : Styles.oddColor;

  return(
    <View style={[Styles.messageItem, {backgroundColor: color}]}>
      <Text>{message.msg}</Text>
      <MaterialIcons name={message.icon} size={40}/>
    </View>
  );
}
