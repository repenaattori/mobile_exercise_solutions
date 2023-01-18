import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight+5,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        backgroundColor: '#ffd56a',
    },
    title:{
        fontSize: 22,
        color: '#945100',
        fontWeight: 'bold'
    },
    form:{
        padding: 10
    },
    label:{
        color: '#945100',
    },
    textInput:{
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    button:{
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#945100',
        color: 'white',
        fontWeight: 'bold'
    }
});
  



