import { StyleSheet } from "react-native";
import  Constants  from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10,
        marginTop: Constants.statusBarHeight + 10
    },
    messageItem:{
        margin: 10,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#ffc77e',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput:{
        borderWidth: 1,
        padding: 5,
        marginBottom:10,
    },
    evenColor: '#ffe395',
    oddColor: '#d69e03'
});
  



