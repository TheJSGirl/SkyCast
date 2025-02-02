import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
   
    txt: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Alata-Regular'
    },
    clock: {
        alignItems: 'flex-end',
    },
    city: {

    },
    interpretation: {
        alignSelf: 'flex-end',
        transform: [{rotate: '-90deg'}]

    },
    temp: {
        // display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'baseline'
    },
    temperature: {
        fontSize: 150
    },
    img: {
        height: 50, 
        width: 50, 
        backgroundColor: 'white' 
    }


})