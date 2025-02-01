import HomeScreen from "./pages/Home/Home";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import backgroundImg from '../assets/images/background.png';
// import backgroundImg from "../assets/images/bg.png";

export default function Index() {
  return (<ImageBackground imageStyle={styles.img} source={require('../assets/images/bg.png')} style={styles.imgBackground} >
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  </SafeAreaProvider>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  img: {
    opacity: .75
  }
})
