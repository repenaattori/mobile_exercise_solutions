import { Button, Image, Text, View } from "react-native";

export default function Logo({title}){
    return(
        <View>
            <Text>{title}</Text>
            <Image source={require('../assets/band.png')} />
            <Button title="REGISTER"/>
        </View>
    );
}