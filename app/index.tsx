import { useEffect, useState } from "react";
import HomeScreen from "./pages/Home/Home";
import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import fetchWeather from './service';
import { useFonts } from "expo-font";
import ApiService from './service'


export default function Index() {

  const [coordinates, setCoordinates] = useState<object>();
  const [weather, setWeather] = useState<any>();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("../assets/fonts/Alata-Regular.ttf")
  });
  
  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {

    if(coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }

  }, [coordinates]);

  async function fetchWeatherByCoords(coordinates: any) {
    const weatherResponse = await ApiService.fetchWeatherByCoords(coordinates);
    setWeather(weatherResponse)
  }

  async function fetchCityByCoords(coordinates: any) {
    const cityResponse = await ApiService.fetchCityByCoords(coordinates);
    console.log("response---", cityResponse)
    setCity(cityResponse)
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


  return (<ImageBackground imageStyle={[styles.img, styles.container]} source={require('../assets/images/bg.png')} style={styles.imgBackground} >
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
     <View style={{padding: 10, flex: 1}}>
     {isFontLoaded && weather && <HomeScreen weather={weather} city={city} />}
     </View>
    </SafeAreaView>
  </SafeAreaProvider>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 5,
    borderColor: 'red',
    margin: 10
  },
  imgBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  img: {
    opacity: .75
  }
})
