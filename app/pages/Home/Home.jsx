import { Text, View } from "react-native";

import styles from './Home.style';
import React from "react";
import Txt from "@/app/components/Txt";
import  BasicWeatherInfo from "@/app/components/BasicWeatherInfo";
import {getWeatherInterpretation} from '../../../utils';
import AdvancedWeatherInfo from "@/app/components/AdvancedWeatherInfo";
import SearchBar from "@/app/components/SearchBar";


export default  function Home({weather, city, onSearchSubmit}) {
    const currentInterpretation = getWeatherInterpretation(weather.current_weather.weathercode)
   
    return <><View style={styles.basicInfo}>
        {/* <Txt>Basic Weather info</Txt> */}
        <BasicWeatherInfo dailyWeather = {weather.daily} interpretation={currentInterpretation} temperature={Math.round(weather.current_weather.temperature)} city={city} />
    </View>
    <View style={styles.searchBar}>
        <SearchBar  onSubmit={onSearchSubmit}/>
    </View>
    <View style={styles.advancedInfo}>
        <AdvancedWeatherInfo 
            sunrise={weather.daily.sunrise[0].split("T")[1]}
            sunset={weather.daily.sunset[0].split("T")[1]}
            windspeed={weather.current_weather.windspeed}
        />
    </View>
    
    </>
}