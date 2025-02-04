import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import styles from './basicWeatherInfo.style';
import Txt from '../Txt';
import Clock from '../Clock/index';
import {DefaultTheme, NavigationContainer, NavigationIndependentTree, useNavigation} from "@react-navigation/native";


import React from 'react';



  
export default function BasicWeatherInfo({temperature, interpretation, city, dailyWeather}: any) {
   const nav = useNavigation()
    return <> <View style={styles.clock}>
            <Clock />
        </View>
        <View style={styles.city}><Txt>{city}</Txt></View>
        <View style={styles.interpretation}><Txt>{interpretation?.label}</Txt></View>
        <View style={styles.temp}>
            <TouchableOpacity onPress={() => nav.navigate('Forecasts' , {city, ...dailyWeather} )}>
                <Txt style={styles.temperature}>{temperature}&deg;</Txt>
            </TouchableOpacity>
        <Image style={styles.img} source={interpretation?.image} />
        </View>
    </> ;
}