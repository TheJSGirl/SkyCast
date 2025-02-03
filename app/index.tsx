import { useEffect, useState } from "react";
import HomeScreen from "./pages/Home/Home";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import fetchWeather from './service';
import { useFonts } from "expo-font";


export default function Index() {

  const [coordinates, setCoordinates] = useState<object>();
  const [weather, setWeather] = useState<any>();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("../assets/fonts/Alata-Regular.ttf")
  });
  
  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {

    if(coordinates) {
      fetchWeatherByCoords(coordinates)
    }

  }, [coordinates]);

  async function fetchWeatherByCoords(coordinates: any) {
    const weatherResponse = await fetchWeather(coordinates);
    setWeather(weatherResponse.data)
  }

  async function getUserCoordinates() {
   const {status} = await requestForegroundPermissionsAsync();
   if(status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    } else {
      setCoordinates({lat: "48.85", lng: "2.35"});
    }
  }


  return (<ImageBackground imageStyle={styles.img} source={require('../assets/images/bg.png')} style={styles.imgBackground} >
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      {isFontLoaded && weather && <HomeScreen weather={weather} />}
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
