import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
   container : {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
   },
   input: {
    backgroundColor: 'white',
    height: 40,
    paddingLeft: 20,
    borderRadius: 20,
    fontFamily: "Alata-Regular",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 20
   }
})