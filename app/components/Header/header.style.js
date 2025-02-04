import { StyleSheet } from "react-native";

const BACK_BTN_WIDTH= 30
export default styles = StyleSheet.create({
   container : {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
   },
   header_txts: {
    alignItems: 'center',
    flex: 1,
    marginRight: BACK_BTN_WIDTH
   },
   subtitle: {
    fontSize: 30,
   },
   back_btn: {
    width: BACK_BTN_WIDTH
   },



})