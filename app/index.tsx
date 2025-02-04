import { useEffect, useState } from "react";
import HomeScreen from "./pages/Home/Home";
import ForecastsScreen from "./pages/Forecasts/Forecasts";

import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { useFonts } from "expo-font";
import ApiService from './service';
import {DefaultTheme, NavigationContainer, NavigationIndependentTree} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";

const Stack = createNativeStackNavigator();

export default function Index() {

  const [coordinates, setCoordinates] = useState<object>();
  const [weather, setWeather] = useState<any>();
  const [city, setCity] = useState();

  useNavigation()

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
    setCity(cityResponse)
  }

  async function fetchCoordsByCity(coordinates: any) {
    const coordsResponse = await ApiService.fetchCoordsByCity(coordinates);
    setCoordinates(coordsResponse)
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

  const onSearchSubmit = (evt) => {
    console.log(evt.nativeEvent.text)
  }


  return (
    <NavigationIndependentTree >
      <NavigationContainer 
       theme={{
        ...DefaultTheme, // Spread the default theme to retain other default properties
        colors: {
          ...DefaultTheme.colors, // Spread the default colors
          background: 'transparent', // Set background color to transparent
        },
      }}
      >
      <ImageBackground imageStyle={[styles.img, styles.container]} source={require('../assets/images/bg.png')} style={styles.imgBackground} >
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
     <View style={{padding: 10, flex: 1}}>
     {isFontLoaded && weather && 
      (<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, animation: 'fade'}}>
        <Stack.Screen name="Home">
          {/* <HomeScreen weather={weather} city={city} /> */}
          {() => <HomeScreen weather={weather} city={city} onSearchSubmit={fetchCoordsByCity} />}
        </Stack.Screen>
        <Stack.Screen name="Forecasts" component={ForecastsScreen} />

        {/* <HomeScreen weather={weather} city={city} /> */}
      </Stack.Navigator>)
     }
     </View>
    </SafeAreaView>
  </SafeAreaProvider>
  </ImageBackground>
  </NavigationContainer>
    </NavigationIndependentTree>
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
