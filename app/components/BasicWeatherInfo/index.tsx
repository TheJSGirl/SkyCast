import { Text, View, Image, ViewS } from 'react-native';
import styles from './basicWeatherInfo.style';
import { Txt } from '../Txt';
import React from 'react';


  
export function BasicWeatherInfo({temperature}: any) {
    return <> <View style={styles.clock}><Txt>Clock</Txt></View>
        <View style={styles.city}><Txt>City</Txt></View>
        <View style={styles.interpretation}><Txt>Sunny</Txt></View>
        <View style={styles.temp}>
            <Txt style={styles.temperature}>{temperature}&deg;</Txt>
        <Image style={styles.img} />
        </View>
    </> ;
}