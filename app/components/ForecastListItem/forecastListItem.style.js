import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
   
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20
    },
    image: {
        width: 50,
        height: 50
    },
    day: {
        fontSize: 20
    },
    temp: {
        minWidth: 50,
        textAlign: "right"
    }
})